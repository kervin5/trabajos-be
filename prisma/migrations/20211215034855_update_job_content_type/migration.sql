/*
  Warnings:

  - You are about to drop the column `content` on the `Job` table. All the data in the column will be lost.
  - Added the required column `jobContentId` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EditorBlockType" AS ENUM ('PARAGRAPH', 'LIST', 'IMAGE', 'HEADER', 'DELIMITER');

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "content",
ADD COLUMN     "jobContentId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "EditorBlock" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "type" "EditorBlockType" NOT NULL,
    "data" JSONB NOT NULL,
    "jobContentId" INTEGER,

    CONSTRAINT "EditorBlock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobContent" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobContent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EditorBlock" ADD CONSTRAINT "EditorBlock_jobContentId_fkey" FOREIGN KEY ("jobContentId") REFERENCES "JobContent"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_jobContentId_fkey" FOREIGN KEY ("jobContentId") REFERENCES "JobContent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
