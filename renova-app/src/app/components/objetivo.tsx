import React from 'react'

interface IText {
  title: string
  text: string
}

export default function TextLayout({ ...props }: IText) {
  return (
    <div className=" px-3  text-center md:text-start my-8 md:mx-3 md:h-72">
      <h1 className="  font-bold md:text-4xl text-3xl">{props.title}</h1>
      <div className=" border-2 border-grey-200 md:w-5/6"></div>
      <p className='my-3 text-justify md:my-10 md:mx-3'>{props.text}</p>
    </div>
  )
}
