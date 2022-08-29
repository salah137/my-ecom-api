-- DropIndex
DROP INDEX "Product_name_key";

-- AlterTable
ALTER TABLE "CardProuct" ADD COLUMN     "itemesCount" INTEGER NOT NULL DEFAULT 1;
