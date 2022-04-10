/*
  Warnings:

  - You are about to drop the column `jobContentId` on the `EditorBlock` table. All the data in the column will be lost.
  - You are about to drop the column `jobContentId` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the `JobContent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "EditorBlock" DROP CONSTRAINT "EditorBlock_jobContentId_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_jobContentId_fkey";

-- AlterTable
ALTER TABLE "EditorBlock" DROP COLUMN "jobContentId",
ADD COLUMN     "jobId" INTEGER;

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "jobContentId";

-- DropTable
DROP TABLE "JobContent";

-- AddForeignKey
ALTER TABLE "EditorBlock" ADD CONSTRAINT "EditorBlock_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE SET NULL ON UPDATE CASCADE;
