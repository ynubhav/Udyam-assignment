const { PrismaClient } = require("./generated/prisma/client.js");
const prisma = new PrismaClient();

function randomNumber(length) {
  return Array.from({ length }, () => Math.floor(Math.random() * 10)).join("");
}

function randomString(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return Array.from(
    { length },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join("");
}

function randomDateString(startYear = 1970, endYear = 2005) {
  const start = new Date(startYear, 0, 1);
  const end = new Date(endYear, 11, 31);
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-based
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

const firstNames = [
  "Rahul",
  "Priya",
  "Amit",
  "Sneha",
  "Vikram",
  "Anjali",
  "Rohan",
  "Neha",
  "Karan",
  "Pooja",
];
const lastNames = [
  "Kumar",
  "Sharma",
  "Verma",
  "Singh",
  "Gupta",
  "Yadav",
  "Rai",
  "Chopra",
  "Mishra",
  "Joshi",
];

async function main() {
  console.log("Seeding Aadhaar & PAN data...");

  for (let i = 0; i < 20; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const fullName = `${firstName} ${lastName}`;
    const aadhaarNo = randomNumber(12);
    const phoneNumber = randomNumber(10);
    const panNo = `${randomString(5)}${randomNumber(4)}${randomString(1)}`;
    const dob = randomDateString();

    await prisma.aadhaar.create({
      data: {
        aadhaarNo,
        fullName,
        phoneNumber,
        panCard: {
          create: {
            panNo,
            holderName: fullName,
            dob,
          },
        },
      },
    });
  }

  console.log("20 demo Aadhaar + PAN records seeded!");
}

main()
  .catch((e) => {
    console.error(" Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
