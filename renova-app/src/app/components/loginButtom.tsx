'use client'

import { redirect } from "next/navigation";
import Link from "next/link";
import { useState } from "react"

export default function loginButtom() {

  const [token, setToken] = useState<string | null>(null);

  const getToken = () => {
    setToken(localStorage.getItem('token'))
  }

  getToken()

  return(
    <>
      {
        token ? (
          <li className="md:ml-3 rounded-full bg-Azul_claro px-5  w-fit">
            <div
              className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-Azul md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              onClick={() =>  {
                localStorage.removeItem('token')
                redirect('/')
              }}
            >
              Sair
            </div>
          </li>
        )

        : (
          <li className="md:ml-3 rounded-full bg-Azul_claro px-5  w-fit">
            <Link
              href="/login"
              className="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:border-0 md:hover:text-Azul md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Login
            </Link>
          </li>
        )
      }
    </>
  )
}
