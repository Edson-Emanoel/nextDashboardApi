-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Clientes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "urlImg" TEXT,
    "gasto" INTEGER NOT NULL
);
INSERT INTO "new_Clientes" ("email", "gasto", "id", "nome", "urlImg") SELECT "email", "gasto", "id", "nome", "urlImg" FROM "Clientes";
DROP TABLE "Clientes";
ALTER TABLE "new_Clientes" RENAME TO "Clientes";
CREATE UNIQUE INDEX "Clientes_nome_key" ON "Clientes"("nome");
CREATE UNIQUE INDEX "Clientes_email_key" ON "Clientes"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
