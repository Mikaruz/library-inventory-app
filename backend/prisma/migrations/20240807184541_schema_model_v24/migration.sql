/*
  Warnings:

  - You are about to drop the `_booktocategory` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoryId` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_booktocategory` DROP FOREIGN KEY `_BookToCategory_A_fkey`;

-- DropForeignKey
ALTER TABLE `_booktocategory` DROP FOREIGN KEY `_BookToCategory_B_fkey`;

-- AlterTable
ALTER TABLE `book` ADD COLUMN `categoryId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_booktocategory`;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
