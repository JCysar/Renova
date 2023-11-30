import React, { useState } from 'react';
import { loginRoute } from '../api/route';
import Link from 'next/link';


export default async function loginComponent() {

  interface ULogin {
    email: string;
    password: string;
  }

  const [user, setUser] = useState<ULogin>({
    email: '',
    password: '',
  });

  return (
    <form onSubmit={await loginRoute(user)}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-Branco text-sm font-bold mb-2"
            >
              Usuário
            </label>
            <input
              type="email"
              id="username"
              className="w-full border p-2 rounded placeholder:italic placeholder:text-slate-400"
              placeholder="Digite seu Email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
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
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-Azul_claro text-Branco p-2 rounded hover:bg-blue-700"
            >
              Acessar
            </button>
          </div>

          <div>
            <Link href="/cadastro">
              <button
                type="button"
                className="w-full bg-Azul_claro text-Branco p-2 rounded hover:bg-blue-700"

              >
                Cadastrar
              </button>
            </Link>
          </div>
        </form>
  )
}
