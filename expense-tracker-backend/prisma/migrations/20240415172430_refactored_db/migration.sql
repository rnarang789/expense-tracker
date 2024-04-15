/*
  Warnings:

  - The values [TRANSFER] on the enum `TransactionType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `transferToAccount` on the `Transactions` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TransactionType_new" AS ENUM ('INCOME', 'EXPENSE');
ALTER TABLE "Transactions" ALTER COLUMN "transactionType" DROP DEFAULT;
ALTER TABLE "Transactions" ALTER COLUMN "transactionType" TYPE "TransactionType_new" USING ("transactionType"::text::"TransactionType_new");
ALTER TYPE "TransactionType" RENAME TO "TransactionType_old";
ALTER TYPE "TransactionType_new" RENAME TO "TransactionType";
DROP TYPE "TransactionType_old";
ALTER TABLE "Transactions" ALTER COLUMN "transactionType" SET DEFAULT 'EXPENSE';
COMMIT;

-- AlterTable
ALTER TABLE "Transactions" DROP COLUMN "transferToAccount",
ALTER COLUMN "transactionCategory" DROP NOT NULL;
