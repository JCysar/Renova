import Image from "next/image"
import React from "react"


export default function NoticiaPage() {
  return (
    <div className=" flex flex-wrap  items-center justify-center my-10 mx-6">
      <Image
        src="/logo.png"
        className="mr-3"
        width={153}
        height={116}
        alt="imagem da noticia"
      />
      <div className='h-screen'>
        <h3 className='font-bold  my-3 text-center'>titulo da noticia</h3>
        <p className=''>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, cumque tempore! Natus, eveniet odio. Optio error tempore rem aspernatur dignissimos minus soluta, autem vitae temporibus, magnam explicabo dolor libero deserunt?
          <br/>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quae nostrum omnis quia. Velit sunt voluptates distinctio facere, provident voluptate molestiae, officiis veniam, nihil ratione aliquam. Ipsum enim ut eveniet.
          <br/>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ratione non a quaerat. Necessitatibus, reiciendis iste recusandae eius modi tenetur laboriosam vel sed sunt adipisci voluptatem nam placeat similique ea.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, cumque quam! Vitae, expedita nulla! Rem quasi expedita earum adipisci unde eaque minima illum quaerat fuga recusandae temporibus architecto, ad corrupti!
        </p>

      </div>
    </div>
  )
}
