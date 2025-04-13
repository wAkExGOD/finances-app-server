/*
  Warnings:

  - You are about to drop the column `category` on the `Purchase` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `Purchase` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Purchase` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Purchase" DROP COLUMN "category",
DROP COLUMN "time",
ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "PurchaseCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "PurchaseCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PurchaseCategory_name_key" ON "PurchaseCategory"("name");

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "PurchaseCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
