// server.js
const express=require('express');
const { PrismaClient }= require("./generated/prisma/index.js"); // adjust if path differs
const { aadhaarSchema, panSchema } =require("./validation.js");
const cors =require('cors')
const dotenv = require('dotenv');

dotenv.config();

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Aadhaar verification
app.post("/api/v1/verify-aadhaar", async (req, res) => {
  try {
    const result = aadhaarSchema.safeParse(req.body);
    if (!result.success) {
      return res
        .status(400)
        .json({ errors: result.error.errors, success: false });
    }
    const { aadhaarNo, fullName } = req.body;
    const aadhaar = await prisma.aadhaar.findUnique({
      where: { aadhaarNo },
      include: { panCard: true },
    });

    if (!aadhaar || aadhaar.fullName.toLowerCase() !== fullName.toLowerCase()) {
      return res
        .status(400)
        .json({ error: "Invalid Aadhaar details", success: false });
    }

    return res.json({
      id: aadhaar.id,
      phoneLast4: aadhaar.phoneNumber.slice(-4),
      success: true,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", success: false });
  }
});

// PAN verification
app.post("/api/v1/verify-pan", async (req, res) => {
  try {
    const result = panSchema.safeParse(req.body);
    if (!result.success) {
      return res
        .status(400)
        .json({ errors: result.error.errors, success: false });
    }
    const { id, panNo, holderName, dob } = req.body;

    if (!id || !panNo || !holderName || !dob) {
      return res
        .status(400)
        .json({ error: "All PAN details are required", success: false });
    }

    const pan = await prisma.panCard.findUnique({
      where: { aadhaarId: id },
      include: { aadhaar: true },
    });

    if (
      !pan ||
      pan.panNo !== panNo ||
      pan.holderName.toLowerCase() !== holderName.toLowerCase() ||
      pan.dob !== dob
    ) {
      return res
        .status(400)
        .json({ error: "Invalid PAN details", success: false });
    }

    return res.json({
      message: "PAN verified successfully",
      aadhaarId: pan.aadhaarId,
      success: true,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", success: false });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: "Not Found", success: false });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = { app, prisma }; // Export for testing