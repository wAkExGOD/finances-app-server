-- CreateTable
CREATE TABLE "ConfirmEmailTokens" (
    "userId" INTEGER NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "ConfirmEmailTokens_pkey" PRIMARY KEY ("userId")
);

-- AddForeignKey
ALTER TABLE "ConfirmEmailTokens" ADD CONSTRAINT "ConfirmEmailTokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
