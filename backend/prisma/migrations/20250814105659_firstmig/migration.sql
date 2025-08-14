-- CreateTable
CREATE TABLE "public"."Aadhaar" (
    "id" SERIAL NOT NULL,
    "aadhaarNo" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,

    CONSTRAINT "Aadhaar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PanCard" (
    "id" SERIAL NOT NULL,
    "panNo" TEXT NOT NULL,
    "holderName" TEXT NOT NULL,
    "dob" TEXT NOT NULL,
    "aadhaarId" INTEGER NOT NULL,

    CONSTRAINT "PanCard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Aadhaar_aadhaarNo_key" ON "public"."Aadhaar"("aadhaarNo");

-- CreateIndex
CREATE UNIQUE INDEX "Aadhaar_phoneNumber_key" ON "public"."Aadhaar"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "PanCard_panNo_key" ON "public"."PanCard"("panNo");

-- CreateIndex
CREATE UNIQUE INDEX "PanCard_aadhaarId_key" ON "public"."PanCard"("aadhaarId");

-- AddForeignKey
ALTER TABLE "public"."PanCard" ADD CONSTRAINT "PanCard_aadhaarId_fkey" FOREIGN KEY ("aadhaarId") REFERENCES "public"."Aadhaar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
