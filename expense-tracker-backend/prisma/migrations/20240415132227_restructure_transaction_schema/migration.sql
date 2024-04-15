/*
  Warnings:

  - You are about to drop the column `expense` on the `Transactions` table. All the data in the column will be lost.
  - You are about to drop the column `income` on the `Transactions` table. All the data in the column will be lost.
  - You are about to drop the column `transfer` on the `Transactions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Transactions" DROP COLUMN "expense",
DROP COLUMN "income",
DROP COLUMN "transfer",
ADD COLUMN     "amount" DOUBLE PRECISION NOT NULL DEFAULT 0.0;
