/*
  Warnings:

  - You are about to drop the column `author` on the `comic` table. All the data in the column will be lost.
  - You are about to drop the column `author` on the `manga` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `Comic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorId` to the `Manga` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publicationYear` to the `Manga` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comic` DROP COLUMN `author`,
    ADD COLUMN `authorId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `manga` DROP COLUMN `author`,
    ADD COLUMN `authorId` VARCHAR(191) NOT NULL,
    ADD COLUMN `publicationYear` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `_CategoryToManga` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_CategoryToManga_AB_unique`(`A`, `B`),
    INDEX `_CategoryToManga_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_CategoryToComic` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_CategoryToComic_AB_unique`(`A`, `B`),
    INDEX `_CategoryToComic_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Comic` ADD CONSTRAINT `Comic_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Author`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Manga` ADD CONSTRAINT `Manga_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Author`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CategoryToManga` ADD CONSTRAINT `_CategoryToManga_A_fkey` FOREIGN KEY (`A`) REFERENCES `Category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CategoryToManga` ADD CONSTRAINT `_CategoryToManga_B_fkey` FOREIGN KEY (`B`) REFERENCES `Manga`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CategoryToComic` ADD CONSTRAINT `_CategoryToComic_A_fkey` FOREIGN KEY (`A`) REFERENCES `Category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_CategoryToComic` ADD CONSTRAINT `_CategoryToComic_B_fkey` FOREIGN KEY (`B`) REFERENCES `Comic`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
