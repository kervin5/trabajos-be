/*
  Warnings:

  - You are about to drop the column `viewCount` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `companyId` on the `User` table. All the data in the column will be lost.

*/
-- AlterEnum
ALTER TYPE "JobSource" ADD VALUE 'EXTERNAL';

-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'EDITOR';

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_companyId_fkey";

-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "jobId" INTEGER;

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "viewCount",
ADD COLUMN     "companyId" INTEGER,
ADD COLUMN     "externalUrl" TEXT,
ADD COLUMN     "views" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "companyId";

-- CreateTable
CREATE TABLE "EmployeeInCompany" (
    "companyId" INTEGER NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "role" "Role" NOT NULL DEFAULT E'USER',

    CONSTRAINT "EmployeeInCompany_pkey" PRIMARY KEY ("employeeId","companyId")
);

-- AddForeignKey
ALTER TABLE "EmployeeInCompany" ADD CONSTRAINT "EmployeeInCompany_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeInCompany" ADD CONSTRAINT "EmployeeInCompany_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE SET NULL ON UPDATE CASCADE;
