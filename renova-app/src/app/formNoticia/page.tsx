"use client"

import { use, useState, useEffect } from "react"
import {useRouter } from "next/navigation";

interface UNoticia {
  title: string,
  text: string,
  image: string
}

export default function FormNoticia () {

  const [text,setText] = useState<string>('')
  const [title,setTitle] = useState<string>('')
  const [image,setImage] = useState<string>('')
  const router = useRouter()



  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log(token);
    if (!token) {
      console.log(token);

      router.replace("/login");
    }
  }, [router]);

  const handleNew = async ({title,text,image}:UNoticia) => {
    const token = localStorage.getItem('token')

    const New:UNoticia = {
      title,
      text,
      image
    }
    const response = await fetch('http://www.localhost:3001/login/newForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Berear ${token}`,

      },
      body: JSON.stringify(New),
    });

    const data = await response.json()
    if (response.ok) {
      console.log(data);
      alert("Noticia criada!")


    } else {
      alert(data.mensagem)
    }
  }

  return (


      <div className="flex items-center justify-center md:py-40 py-20">
        <div className="w-96 md:p-4 p-6 bg-Azul rounded-lg">
          <h1 className="text-2xl font-bold mb-4 text-center text-Branco">
              Formulário de Notícia
          </h1>
          <form onSubmit={() => use(handleNew({title,text,image}))}>
            <div className="mb-4">
              <label
                htmlFor="Titulo"
                className="block text-Branco text-sm font-bold mb-2"
              >
                Titulo
              </label>
              <input
                type="text"
                id="title"
                className="w-full border p-2 rounded placeholder:italic placeholder:text-slate-400"
                placeholder="Digite o Titulo"
                onChange={(e) => setTitle( e.target.value )}

              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="text"
                className="block text-Branco text-sm font-bold mb-2"
              >
                Imagem
              </label>
              <input
                type="text"
                id="image"
                className="w-full border p-2 rounded placeholder:italic placeholder:text-slate-400"
                placeholder="Digite a URL da imagem"
                onChange={(e) => setImage( e.target.value )}

              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="text"
                className="block text-Branco text-sm font-bold mb-2"
              >
                Texto
              </label>
              <textarea
                id="text"
                name="text"
                rows={8}
                cols={50}
                className="w-full border p-2 rounded placeholder:italic placeholder:text-slate-400"
                placeholder="Digite o texto da notícia"
                onChange={(e) => setText( e.target.value )}

              />
            </div>

            <div>
                <button
                  type="submit"
                  className="w-full bg-Azul_claro text-Branco p-2 rounded hover:bg-blue-700"

                >
                  Cadastrar
                </button>
            </div>
          </form>
        </div>
      </div>



  );
}
