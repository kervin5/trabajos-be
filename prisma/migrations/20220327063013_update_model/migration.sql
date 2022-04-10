/*
  Warnings:

  - The values [USER,EDITOR] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `EditorBlock` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('ADMIN', 'OWNER', 'RECRUITER', 'CANDIDATE');
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "EmployeeInCompany" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "EmployeeInCompany" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TABLE "User" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'CANDIDATE';
ALTER TABLE "EmployeeInCompany" ALTER COLUMN "role" SET DEFAULT 'RECRUITER';
COMMIT;

-- DropForeignKey
ALTER TABLE "EditorBlock" DROP CONSTRAINT "EditorBlock_jobId_fkey";

-- AlterTable
ALTER TABLE "EmployeeInCompany" ALTER COLUMN "role" SET DEFAULT E'RECRUITER';

-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "content" TEXT NOT NULL DEFAULT E'';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "lastName" TEXT,
ALTER COLUMN "role" SET DEFAULT E'CANDIDATE';

-- DropTable
DROP TABLE "EditorBlock";

-- DropEnum
DROP TYPE "EditorBlockType";
