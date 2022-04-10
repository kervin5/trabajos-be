/*
  Warnings:

  - The `role` column on the `EmployeeInCompany` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `published` on the `Job` table. All the data in the column will be lost.
  - Changed the type of `role` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "SystemRole" AS ENUM ('ADMIN', 'CANDIDATE', 'EMPLOYER');

-- CreateEnum
CREATE TYPE "UserRoleInCompany" AS ENUM ('OWNER', 'ADMIN', 'RECRUITER');

-- CreateEnum
CREATE TYPE "JobSatatus" AS ENUM ('DRAFT', 'PUBLISHED', 'CLOSED', 'DELETED', 'EXPIRED');

-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "verified" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "EmployeeInCompany" DROP COLUMN "role",
ADD COLUMN     "role" "UserRoleInCompany" NOT NULL DEFAULT E'RECRUITER';

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "published",
ADD COLUMN     "status" "JobSatatus" NOT NULL DEFAULT E'DRAFT',
ALTER COLUMN "content" DROP DEFAULT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "emailVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "phoneVerified" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "role",
ADD COLUMN     "role" "SystemRole" NOT NULL;

-- DropEnum
DROP TYPE "Role";
