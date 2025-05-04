/*
  Warnings:

  - You are about to drop the `ConfirmEmailTokens` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PasswordRecoveryTokens` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ConfirmEmailTokens" DROP CONSTRAINT "ConfirmEmailTokens_userId_fkey";

-- DropForeignKey
ALTER TABLE "PasswordRecoveryTokens" DROP CONSTRAINT "PasswordRecoveryTokens_userId_fkey";

-- DropTable
DROP TABLE "ConfirmEmailTokens";

-- DropTable
DROP TABLE "PasswordRecoveryTokens";

-- CreateTable
CREATE TABLE "ConfirmEmailToken" (
    "userId" INTEGER NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "ConfirmEmailToken_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "PasswordRecoveryToken" (
    "userId" INTEGER NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "PasswordRecoveryToken_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "ConfirmEmailToken_token_key" ON "ConfirmEmailToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "PasswordRecoveryToken_token_key" ON "PasswordRecoveryToken"("token");

-- AddForeignKey
ALTER TABLE "ConfirmEmailToken" ADD CONSTRAINT "ConfirmEmailToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PasswordRecoveryToken" ADD CONSTRAINT "PasswordRecoveryToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
