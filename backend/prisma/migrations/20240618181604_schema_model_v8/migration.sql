/*
  Warnings:

  - You are about to drop the column `genre` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `genre` on the `manga` table. All the data in the column will be lost.
  - Added the required column `review` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `review` to the `Comic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `review` to the `Manga` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `book` DROP COLUMN `genre`,
    ADD COLUMN `review` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `comic` ADD COLUMN `review` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `manga` DROP COLUMN `genre`,
    ADD COLUMN `review` VARCHAR(191) NOT NULL;
