import Image from 'next/image'
import { Icon } from '@iconify/react'
import React from 'react'

interface DevProps {
  image: string
  name: string
  description: string
}
export default function Dev({ ...props }: DevProps) {
  return (
    <div className=" flex items-center justify-center">
      <div className="flex-colun justify-center mr-6  my-2 text-center">
        <div className='flex justify-center'>
          <Image
            src={props.image}
            alt="Imagem do desenvolvedor"
            className="rounded-full h-24"
            width={100}
            height={100}
          />
        </div>
        <p className='w-32'>{props.name}</p>
      </div>

      <div className=' w-full md:w-96'>
        <div className=' text-center'>
          <p>{props.description}</p>
        </div>
        <div className="flex justify-center mt-3">
          <Image
            src="/instagram.png"
            alt="logo do instagram"
            width={32}
            height={32}
          />
          <Icon icon="uil:github" width="32" height="32" />
          <Icon
            icon="entypo-social:linkedin-with-circle"
            width="32"
            height="32"
            color="#0e76a8"
          />
        </div>
      </div>
    </div>
  )
}
