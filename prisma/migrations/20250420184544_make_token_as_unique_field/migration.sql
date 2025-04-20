/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `ConfirmEmailTokens` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ConfirmEmailTokens_token_key" ON "ConfirmEmailTokens"("token");
