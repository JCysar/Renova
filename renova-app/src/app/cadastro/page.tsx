"use client"

import {useState, use} from 'react'

export default function Cadastro() {
  interface UCadastro {
    name: string
    email: string;
    password: string;
  }

  const [user, setUser] = useState<UCadastro>({
    name: "",
    email: '',
    password: '',
  });


 const handleCadastro = async (user: object) => {


      const response = await fetch('http://www.localhost:3001/cadastrar', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });


      const data = await response.json()

      if (response.ok) {
        return alert("Cadastrado com sucesso!")
      } else {
        return alert(data.mensagem)
      }
  };

  return (
    <div className="flex items-center justify-center  md:py-40 py-20 ">
      <div className="w-96 md:p-4 p-6 bg-Azul rounded-lg ">
        <h1 className="text-2xl font-bold mb-4 text-center text-Branco">
          Cadastro
        </h1>
        <form onSubmit={() => use(handleCadastro(user))}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-Branco text-sm font-bold mb-2"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              className="w-full border p-2 rounded placeholder:italic placeholder:text-slate-400"
              placeholder="Digite seu Nome"
              onChange={(e) => setUser({...user, name: e.target.value})}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-Branco text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="name"
              className="w-full border p-2 rounded placeholder:italic placeholder:text-slate-400"
              placeholder="Digite seu Email"
              onChange={(e) => setUser({...user, email: e.target.value})}

            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-Branco text-sm font-bold mb-2"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="w-full border p-2 rounded placeholder:italic placeholder:text-slate-400"
              placeholder="Digite sua senha"
              onChange={(e) => setUser({...user, password: e.target.value})}

            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-Azul_claro text-Branco p-2 rounded hover:bg-blue-700"

            >
              Criar conta
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
