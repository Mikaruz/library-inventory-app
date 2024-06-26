/*
  Warnings:

  - You are about to drop the column `price` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `book` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `book` DROP COLUMN `price`,
    DROP COLUMN `quantity`;
