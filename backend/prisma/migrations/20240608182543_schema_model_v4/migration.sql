-- AlterTable
ALTER TABLE `book` ADD COLUMN `editedAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6);

-- AlterTable
ALTER TABLE `comic` ADD COLUMN `editedAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6);

-- AlterTable
ALTER TABLE `manga` ADD COLUMN `editedAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6);

-- AlterTable
ALTER TABLE `user` ADD COLUMN `editedAt` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6);
