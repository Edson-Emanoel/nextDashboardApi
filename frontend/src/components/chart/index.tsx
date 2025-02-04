"use client"

import { DollarSign } from "lucide-react";
import { ChartConfig, ChartContainer } from "../ui/chart";
import {Bar, XAxis, BarChart, CartesianGrid, Tooltip, YAxis, Legend} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useState } from "react";

const CustomLegendContainer = (props) => {
      const { payload } = props; // payload contém as informações da legenda
    
      // Função para adicionar espaço antes de cada letra maiúscula
      const formatLegendText = (text: string) => {
        return text.replace(/([A-Z])/g, ' $1').trim();
      };
    
      return (
        <div
          style={{
            backgroundColor: "#1e293b",
            borderRadius: "8px",
            padding: "10px",
            display: "inline-block",
            marginTop: "15px",
            marginLeft: "60px",
            alignSelf: "center"
          }}
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", gap: "10px" }}>
            {payload.map((entry, index) => (
              <li key={`item-${index}`} style={{ color: entry.color }}>
                <span style={{ marginRight: "5px" }}>●</span>
                <span style={{ fontSize: "14px", fontWeight: "bold" }}>{formatLegendText(entry.value)}</span>
              </li>
            ))}
          </ul>
        </div>
      );
};

export function ChartOverview(){

      const chartData = [
            { month: "Janeiro", ValorAnoPassado: 20000, ValorAnoAtual: 22000 },
            { month: "Fevereiro", ValorAnoPassado: 18000, ValorAnoAtual: 15000 },
            { month: "Março", ValorAnoPassado: 25000, ValorAnoAtual: 18000 },
            { month: "Abril", ValorAnoPassado: 22000, ValorAnoAtual: 10000 },
            { month: "Maio", ValorAnoPassado: 15000, ValorAnoAtual: 17500 },
            { month: "Junho", ValorAnoPassado: 16000, ValorAnoAtual: 26000 },
            { month: "Julho", ValorAnoPassado: 20000, ValorAnoAtual: 22000 },
            { month: "Agosto", ValorAnoPassado: 18000, ValorAnoAtual: 19500 },
            { month: "Setembro", ValorAnoPassado: 25000, ValorAnoAtual: 21000 },
            { month: "Outubro", ValorAnoPassado: 22000, ValorAnoAtual: 20000 },
            { month: "Novembro", ValorAnoPassado: 20000, ValorAnoAtual: 26000 },
            { month: "Dezembro", ValorAnoPassado: 25000, ValorAnoAtual: 28000 }
      ]

      const chartConfig = {
            ValorAnoPassado: {
                  label: "Ano Passado",
                  color: "#4f46e5"
            },

            ValorAnoAtual: {
                  label: "Ano Atual",
                  color: "#FEA50D"
            }
      } satisfies ChartConfig;

      return(
            <Card className="max-w-[40%] min-w-[280px] bg-slate-900 text-white border-none flex flex-col gap-10 sm:w-[100%] sm:h-[400px] md:w-[100%] md:h-[400px] lg:w-[80%] lg:h-[40%]">
                  <CardHeader className="w-[100%] h-[10%]">
                        <div className="flex items-center justify-center">
                              <CardTitle className="text-lg sm:text-xl text-gray-300">
                                    Valor de vendas
                              </CardTitle>
                              <DollarSign className="ml-auto w-4 h-4" />
                        </div>
                  </CardHeader>
                  
                  <CardContent className="w-full h-[500px] sm:w-[100%] sm:h-[400px] lg:w-full lg:h-full">
                        <ChartContainer config={chartConfig} className="h-[100%] w-full">
                              <BarChart data={chartData}>
                                    <Legend content={<CustomLegendContainer />} />
                                    <CartesianGrid vertical={false} />
                                    <XAxis
                                          dataKey="month"
                                          tickLine={false}
                                          tickMargin={10}
                                          axisLine={false}
                                          style={{ fill: "#FFF" }}
                                          tickFormatter={(value) => value.slice(0, 3)}
                                    />
                                    <YAxis style={{ fill: "#FFF" }} />
                                    <Bar dataKey="ValorAnoPassado" fill="var(--color-ValorAnoPassado)" radius={4} />
                                    <Bar dataKey="ValorAnoAtual" fill="var(--color-ValorAnoAtual)" radius={4} />
                              </BarChart>
                        </ChartContainer>
                  </CardContent>
            </Card>
      )
}