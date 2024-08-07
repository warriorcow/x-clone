-- CreateTable
CREATE TABLE "UserProfile" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "birthDate" TIMESTAMP(3),
    "nickName" TEXT NOT NULL,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPosts" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "description" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "UserPosts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_nickName_key" ON "UserProfile"("nickName");

-- AddForeignKey
ALTER TABLE "UserPosts" ADD CONSTRAINT "UserPosts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
