-- CreateTable
CREATE TABLE "Clientes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "gasto" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Clientes_nome_key" ON "Clientes"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Clientes_email_key" ON "Clientes"("email");
