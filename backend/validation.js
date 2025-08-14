// validation.js
const z=require('zod')

// Regex for DD/MM/YYYY format
const dobRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

const aadhaarSchema = z.object({
  aadhaarNo: z
    .string()
    .length(12, "Aadhaar number must be exactly 12 digits")
    .regex(/^\d+$/, "Aadhaar number must contain only digits"),
  fullName: z
    .string()
    .min(3, "Full name must be at least 3 characters")
    .max(100, "Full name is too long"),
});

const panSchema = z.object({
  id: z.number().positive("Invalid Aadhaar ID"),
  panNo: z
    .string()
    .length(10, "PAN number must be exactly 10 characters")
    .regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format"),
  holderName: z
    .string()
    .min(3, "Holder name must be at least 3 characters")
    .max(100, "Holder name is too long"),
  dob: z
    .string()
    .regex(dobRegex, "Date of birth must be in DD/MM/YYYY format"),
});

module.exports = {
  aadhaarSchema,
  panSchema,
};
