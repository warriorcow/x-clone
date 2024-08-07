/*
  Warnings:

  - You are about to drop the column `postId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Post_postId_key";

-- DropIndex
DROP INDEX "User_userId_key";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "postId";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "userId";
