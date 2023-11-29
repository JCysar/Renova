'use client'

import { Icon } from '@iconify/react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <nav id="contato">
      <div className="absolute z-40 w-full  bg-gradient-to-t from-cyan-500 to-blue-500">
        <div className="flex  text-white p-4 px-20 max-md:flex-wrap max-md:px-0">
          <div id="col1" className="flex-auto px-1 relative max-md:w-20">
            <div className="flex justify-center">
              <div className="flex flex-col">
                <h1 className="font-bold text-2xl pb-3 ">Contato</h1>
                <p className=" text-base ">(55) 81 9 9935-1919</p>
                <p className=" text-base py-1">teste@gmail.com</p>
                <div className="flex flex-row ">
                  <Link href="https://www.google.com.br/" className="p-1">
                    <Image
                      src="/Instagram.svg"
                      alt="Instagram"
                      className="h-10 max-md:h-8"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link href="https://www.google.com.br/" className="p-1">
                    <Image
                      src="/Facebook.svg"
                      alt="Facebook"
                      className="h-10 max-md:h-8"
                      width={32}
                      height={32}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div id="col2" className="flex-auto px-1 max-md:w-20">
            <div className="flex justify-center ">
              <div className="flex flex-col">
                <h1 className=" font-bold text-2xl pb-3 ">Funcionamento</h1>
                <p className="  pl-0.5 max-md:pl-0 max-md:text-base">
                  Segunda a quinta: <br className="md:hidden" /> de 8h às 18h
                </p>
                <p className=" pl-0.5 max-md:pl-0">Sexta: 8h às 17h</p>
              </div>
            </div>
          </div>

          <div id="col3" className="flex-auto py-2 px-1 relative">
            <div className="flex justify-center md:pt-8  max-md:pt-2">
              <Link
                href="https://www.google.com.br/"
                className="flex flex-row w-80 h-14 rounded-full items-center bg-verde  px-7  max-md:px-3"
              >
                <Icon
                  icon="mdi:whatsapp"
                  color="white"
                  width="40"
                  height="40"
                  className="flex ml-4 absolute"
                />
                <p className="flex ml-16  text-2xl font-bold  absolute">
                  AGENDAMENTO
                </p>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </nav>
  )
}
