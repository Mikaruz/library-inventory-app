/*
  Warnings:

  - You are about to drop the column `quantityAvailable` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `quantityAvailable` on the `comic` table. All the data in the column will be lost.
  - You are about to drop the column `quantityAvailable` on the `manga` table. All the data in the column will be lost.
  - Added the required column `quantity` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Comic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Manga` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `book` DROP COLUMN `quantityAvailable`,
    ADD COLUMN `quantity` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `comic` DROP COLUMN `quantityAvailable`,
    ADD COLUMN `quantity` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `manga` DROP COLUMN `quantityAvailable`,
    ADD COLUMN `quantity` INTEGER NOT NULL;

