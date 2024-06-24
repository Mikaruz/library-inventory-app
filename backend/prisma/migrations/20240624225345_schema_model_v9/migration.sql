/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `author` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `book` table. All the data in the column will be lost.
  - You are about to drop the `_categorytocomic` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_categorytomanga` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `comic` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `manga` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_categorytocomic` DROP FOREIGN KEY `_CategoryToComic_A_fkey`;

-- DropForeignKey
ALTER TABLE `_categorytocomic` DROP FOREIGN KEY `_CategoryToComic_B_fkey`;

-- DropForeignKey
ALTER TABLE `_categorytomanga` DROP FOREIGN KEY `_CategoryToManga_A_fkey`;

-- DropForeignKey
ALTER TABLE `_categorytomanga` DROP FOREIGN KEY `_CategoryToManga_B_fkey`;

-- DropForeignKey
ALTER TABLE `comic` DROP FOREIGN KEY `Comic_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `manga` DROP FOREIGN KEY `Manga_authorId_fkey`;

-- AlterTable
ALTER TABLE `author` DROP COLUMN `imageUrl`;

-- AlterTable
ALTER TABLE `book` DROP COLUMN `imageUrl`;

-- DropTable
DROP TABLE `_categorytocomic`;

-- DropTable
DROP TABLE `_categorytomanga`;

-- DropTable
DROP TABLE `comic`;

-- DropTable
DROP TABLE `manga`;
