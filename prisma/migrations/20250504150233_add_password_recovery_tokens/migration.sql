-- CreateTable
CREATE TABLE "PasswordRecoveryTokens" (
    "userId" INTEGER NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "PasswordRecoveryTokens_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "PasswordRecoveryTokens_token_key" ON "PasswordRecoveryTokens"("token");

-- AddForeignKey
ALTER TABLE "PasswordRecoveryTokens" ADD CONSTRAINT "PasswordRecoveryTokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
