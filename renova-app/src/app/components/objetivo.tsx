import React from 'react'

interface IText {
  title: string
  text: string
}

export default function TextLayout({ ...props }: IText) {
  return (
    <div className=" justify-center text-center my-8 md:mx-3">
      <h1 className=" font-bold text-2xl">{props.title}</h1>
      <p>{props.text}</p>
    </div>
  )
}
