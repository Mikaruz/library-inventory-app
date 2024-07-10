/*
  Warnings:

  - You are about to drop the column `biography` on the `author` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `author` table. All the data in the column will be lost.
  - You are about to drop the column `editedAt` on the `author` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `author` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `editedAt` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `review` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `editedAt` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `editedAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `_booktocategory` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoryId` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_booktocategory` DROP FOREIGN KEY `_BookToCategory_A_fkey`;

-- DropForeignKey
ALTER TABLE `_booktocategory` DROP FOREIGN KEY `_BookToCategory_B_fkey`;

-- AlterTable
ALTER TABLE `author` DROP COLUMN `biography`,
    DROP COLUMN `createdAt`,
    DROP COLUMN `editedAt`,
    DROP COLUMN `lastname`;

-- AlterTable
ALTER TABLE `book` DROP COLUMN `createdAt`,
    DROP COLUMN `editedAt`,
    DROP COLUMN `review`,
    ADD COLUMN `categoryId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `category` DROP COLUMN `createdAt`,
    DROP COLUMN `editedAt`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `createdAt`,
    DROP COLUMN `editedAt`;

-- DropTable
DROP TABLE `_booktocategory`;

-- CreateTable
CREATE TABLE `Reader` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `lastname` VARCHAR(191) NOT NULL,
    `dni` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `ocupation` ENUM('STUDENT', 'TEACHER') NOT NULL DEFAULT 'STUDENT',

    UNIQUE INDEX `Reader_dni_key`(`dni`),
    UNIQUE INDEX `Reader_email_key`(`email`),
    UNIQUE INDEX `Reader_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Loan` (
    `id` VARCHAR(191) NOT NULL,
    `readerId` VARCHAR(191) NOT NULL,
    `bookId` VARCHAR(191) NOT NULL,
    `loanDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `returnDate` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Loan` ADD CONSTRAINT `Loan_readerId_fkey` FOREIGN KEY (`readerId`) REFERENCES `Reader`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Loan` ADD CONSTRAINT `Loan_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `Book`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
