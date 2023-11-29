"use client"

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Login() {

  interface ULogin {
    email: string;
    password: string;
  }

  const [user, setUser] = useState<ULogin>({
    email: '',
    password: '',
  });


  const handleLogin = async () => {
    const router = useRouter()
    try {
      const response = await fetch('www.localhost:3001', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        router.push("/home")
      } else {
        alert("Email ou Senha incorreta!")
      }
    } catch (error: unknown) {
      alert('Erro ao enviar solicitação de login: '+ error);
    }
  };

  return (
    <div className="flex items-center justify-center md:py-40 py-20">
      <div className="w-96 md:p-4 p-6 bg-Azul rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center text-Branco">
          Login
        </h1>
        <form>
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
              type="button"
              className="w-full bg-Azul_claro text-Branco p-2 rounded hover:bg-blue-700"
              onClick={handleLogin}
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
      </div>
    </div>
  );
}
