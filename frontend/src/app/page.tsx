"use client"

import axios from "axios";
import { Sales } from "@/components/sales";
import { useEffect, useState } from "react";
import { ChartOverview } from "@/components/chart";
import { BadgeDollarSign, DollarSign, Percent, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ICliente {
  id: number;
  nome: string;
  email: string;
  urlImg: string;
  gasto: number;
}

export default function Home() {
  const url = "http://localhost:8080/clientes"
  const [clientes, setClientes] = useState<ICliente[]>([]);

  useEffect(() => {
    axios.get(url)
      .then(res => setClientes(res.data))
  }, [clientes])

  return (
    <main className="sm:ml-20 p-4 mt-10">
      <section className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-4">
        <Card className="bg-slate-900 text-white border-none">
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl select-none">
                Total Vendas
              </CardTitle>
              
              <DollarSign className="ml-auto w-5 h-5" />
            </div>

            <CardDescription>
              Total de vendas em 90 dias
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">
              {`R$
                
                ${
                  clientes
                  .reduce((acc, cliente) => acc + cliente.gasto, 0)
                  .toLocaleString('pt-BR',
                    {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    }
                  )
                }
              `}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 text-white border-none">
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl select-none">
                Todos Clientes
              </CardTitle>
              <Users className="ml-auto w-5 h-5" />
            </div>

            <CardDescription>
              Todos nossos queridos clientes ^-^
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">{clientes.length}</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 text-white border-none">
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl select-none">
                Pedidos hoje
              </CardTitle>
              <Percent className="ml-auto w-5 h-5" />
            </div>

            <CardDescription>
              Total de pedidos hoje
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">65</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 text-white border-none">
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl select-none">
                Total de Pedidos hoje
              </CardTitle>
              <BadgeDollarSign className="ml-auto w-5 h-5" />
            </div>

            <CardDescription>
              Total de pedidos em 30 dias
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">2300</p>
          </CardContent>
        </Card>
      </section>
      
      <section className="mt-4 flex flex-col sm:flex-col md:flex-row gap-4">
        <ChartOverview />
        <Sales />
      </section>
    </main>
  );
}