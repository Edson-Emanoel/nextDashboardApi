/*
  Warnings:

  - Added the required column `urlImg` to the `Clientes` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Clientes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "urlImg" TEXT NOT NULL,
    "gasto" INTEGER NOT NULL
);
INSERT INTO "new_Clientes" ("email", "gasto", "id", "nome") SELECT "email", "gasto", "id", "nome" FROM "Clientes";
DROP TABLE "Clientes";
ALTER TABLE "new_Clientes" RENAME TO "Clientes";
CREATE UNIQUE INDEX "Clientes_nome_key" ON "Clientes"("nome");
CREATE UNIQUE INDEX "Clientes_email_key" ON "Clientes"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;