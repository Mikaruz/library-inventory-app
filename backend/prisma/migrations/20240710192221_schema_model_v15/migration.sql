/*
  Warnings:

  - A unique constraint covering the columns `[ISBN]` on the table `Book` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ISBN` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `copiesAvailable` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `book` ADD COLUMN `ISBN` VARCHAR(191) NOT NULL,
    ADD COLUMN `copiesAvailable` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Book_ISBN_key` ON `Book`(`ISBN`);
