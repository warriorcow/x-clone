/*
  Warnings:

  - You are about to drop the column `birhtDate` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_userId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "birhtDate",
DROP COLUMN "userId",
ADD COLUMN     "birthDate" TIMESTAMP(3);
