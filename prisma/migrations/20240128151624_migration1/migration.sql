-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" "Gender" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL,
    "bookName" TEXT NOT NULL,
    "bookDescription" TEXT NOT NULL,
    "authorName" TEXT NOT NULL,
    "bookReleased" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
