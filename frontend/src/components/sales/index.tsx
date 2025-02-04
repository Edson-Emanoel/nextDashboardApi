"use client"

import axios from "axios";
import { Users2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import '../../app/globals.css';

interface ICliente {
      id: number;
      nome: string;
      email: string;
      urlImg: string;
      gasto: number;
}

export function Sales() {
      const url = "http://localhost:8080/clientes"
      const [clientes, setClientes] = useState<ICliente[]>([]);
      
      const [showForm, setShowForm] = useState("hidden");
      
      const [urlImg, setUrlImg] = useState("");
      const [nome, setNome] = useState("");
      const [email, setEmail] = useState("");
      const [gasto, setGasto] = useState<number>();
      
      useEffect(() => {
      axios.get(url)
            .then(res => setClientes(res.data))
      }, [clientes])

      function changeShowForm (){
            if (showForm === "flex"){
                  setShowForm("hidden")
            }

            if(showForm == "hidden"){
                  setShowForm("flex")
            }
      }

      async function Cadastrar () {
            axios.post(url, {
                  nome,
                  email,
                  gasto
            })

            changeShowForm()
      }

      return (
            <Card className="w-[100%] min-w-[300px] bg-slate-900 text-white border-none flex flex-col gap-5 sm:w-[100%] sm:h-[400px] md:w-[100%] md:h-[400px] lg:w-[80%] lg:h-[40%]">
                  {/* Formulário */}
                  <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} className={`${showForm} fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center`}>
                        <form className="w-[15%] h-[40%] bg-slate-900 rounded-xl px-10 py-5 gap-2 flex flex-col items-center justify-center">
                              <h2 className="text-2xl text-white mb-5">Formulário</h2>

                              <div className="flex flex-col">
                                    <label htmlFor="" className="text-muted-foreground">Url da Foto do Cliente: </label>

                                    <input
                                          type="text"
                                          value={urlImg}
                                          onChange={(e) => setUrlImg(e.target.value)}
                                          placeholder="Ex: https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                                          className="w-[300px] px-1 py-1.5 rounded-sm bg-slate-950 text-white outline-none"
                                    />
                              </div>

                              <div className="flex flex-col">
                                    <label htmlFor="" className="text-muted-foreground">Nome do Cliente: </label>

                                    <input
                                          type="text"
                                          value={nome}
                                          onChange={(e) => setNome(e.target.value)}
                                          placeholder="Ex: Xavier"
                                          className="w-[300px] px-1 py-1.5 rounded-sm bg-slate-950 text-white outline-none"
                                    />
                              </div>

                              <div className="flex flex-col">
                                    <label htmlFor="" className="text-muted-foreground">Email do Cliente: </label>

                                    <input
                                          type="email"
                                          value={email}
                                          onChange={(e) => setEmail(e.target.value)}
                                          placeholder="Ex: xavier@gmail.com"
                                          className="w-[300px] px-1 py-1.5 rounded-sm bg-slate-950 text-white outline-none"
                                    />
                              </div>

                              <div className="flex flex-col">
                                    <label htmlFor="" className="text-muted-foreground">Valor das Compras do Cliente: </label>

                                    {/* <input
                                          type="text"
                                          value={gasto}
                                          onChange={(e) => setGasto(+e.target.value)}
                                          placeholder="Ex: 1500 (digite sem pontos)"
                                          className="w-[300px] px-1 py-1.5 rounded-sm bg-slate-950 text-white outline-none"
                                    /> */}

                                    <input
                                          type="text"
                                          value={
                                          gasto
                                                ? gasto.toLocaleString('pt-BR', {
                                                style: 'currency',
                                                currency: 'BRL',
                                                minimumFractionDigits: 2,
                                                })
                                                : ''
                                          }
                                          onChange={(e) => {
                                          const rawValue = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                                          const numericValue = rawValue ? parseFloat(rawValue) / 100 : 0; // Divide por 100 para incluir centavos
                                          setGasto(numericValue); // Atualiza o estado como número
                                          }}
                                          placeholder="Ex: R$ 1.500,00"
                                          className="w-[300px] px-1 py-1.5 rounded-sm bg-slate-950 text-white outline-none"
                                    />
                              </div>

                              <div className="gap-5 flex mt-2">
                                    <button type="submit" className="bg-green-800 px-4 py-1 rounded-sm" onClick={Cadastrar}>Cadastrar</button>
                                    <button type="submit" className="bg-zinc-500 px-4 py-1 rounded-sm" onClick={changeShowForm}>Cancelar</button>
                              </div>
                        </form>
                  </div>

                  <CardHeader>
                        <div className="flex items-center justify-between">
                              <CardTitle className="text-lg sm:text-xl text-gray-300">
                                    Todos Clientes
                              </CardTitle>
                              <Users2 />
                        </div>
                        
                        <CardDescription>
                              Todos nossos clientes ^-^
                        </CardDescription>

                        <button className="w-36 h-9 bg-indigo-700 hover:bg-indigo-800 rounded-sm self-end text-lg font-medium transition-colors" onClick={changeShowForm}>Novo Cliente</button>
                  </CardHeader>

                  <CardContent className="max-h-[160px] overflow-y-scroll scrollbar-custom gap-2 flex flex-col">
                        {clientes.map((cliente) => (
                              <article className="flex items-center gap-2 border-b py-2 px-5 rounded-t hover:bg-slate-800 transition-colors duration-150 cursor-pointer" key={cliente.id}>
                                    <Avatar className="w-12 h-12">
                                          <AvatarImage src={cliente.urlImg} />
                                    </Avatar>
                                    
                                    <div className="w-full flex items-center justify-between">
                                          <div className="flex flex-col">
                                                <p className="text-sm sm:text-base font-semibold">{cliente.nome}</p>
                                                <span className="text-[12px] sm:text-sm text-slate-400">{cliente.email}</span>
                                          </div>

                                          <p className="text-muted-foreground font-semibold text-xl">
                                                {`R$
                                                      ${
                                                            cliente.gasto
                                                            .toLocaleString('pt-BR',
                                                                  {
                                                                    minimumFractionDigits: 2,
                                                                    maximumFractionDigits: 2
                                                                  }
                                                            )
                                                      }
                                                `}
                                          </p>
                                    </div>
                              </article>  
                        ))}
                  </CardContent>
            </Card>
      )
}