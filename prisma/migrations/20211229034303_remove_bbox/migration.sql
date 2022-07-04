/*
  Warnings:

  - You are about to drop the column `bottomEdge` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `leftEdge` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `rightEdge` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `topEdge` on the `Location` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Location" DROP COLUMN "bottomEdge",
DROP COLUMN "leftEdge",
DROP COLUMN "rightEdge",
DROP COLUMN "topEdge";
