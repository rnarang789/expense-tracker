/*
  Warnings:

  - Added the required column `transactionDate` to the `Transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transactions" ADD COLUMN     "transactionDate" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "TotalAmount" (
    "id" TEXT NOT NULL,
    "incomeTotal" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "expenseTotal" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "finalTotal" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "userId" TEXT NOT NULL,

    CONSTRAINT "TotalAmount_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TotalAmount_userId_key" ON "TotalAmount"("userId");

-- AddForeignKey
ALTER TABLE "TotalAmount" ADD CONSTRAINT "TotalAmount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
