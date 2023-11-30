import Image from "next/image"
import React from "react"


export default function NoticiaPage() {
  return (
    <div className="md:h-screen my-10 mx-6">
      <h1 className="text-center md:text-start font-bold text-2xl ">Noticia</h1>
      <div className="border-2 border-grey-200 md:w-5/6"></div>
      <div className="flex flex-col items-center justify-center ">
        <h2 className='font-bold text-2xl my-6 text-center'>titulo da noticia</h2>

        <Image
          src="/logo.png"
          className="mr-3"
          width={200}
          height={200}
          alt="imagem da noticia"
        />



          <p className='text-justify my-6'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, cumque tempore! Natus, eveniet odio. Optio error tempore rem aspernatur dignissimos minus soluta, autem vitae temporibus, magnam explicabo dolor libero deserunt? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae possimus voluptatum natus aliquam dolores, numquam reiciendis, et doloribus, quis officiis ipsum aspernatur sequi rem facere fugit perspiciatis neque molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quibusdam libero sunt vel error harum asperiores molestias, aspernatur natus, beatae odio, ea dolores explicabo? Voluptas sunt libero totam et sit?
            <br/><br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quae nostrum omnis quia. Velit sunt voluptates distinctio facere, provident voluptate molestiae, officiis veniam, nihil ratione aliquam. Ipsum enim ut eveniet.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore ratione non a quaerat. Necessitatibus, reiciendis iste recusandae eius modi tenetur laboriosam vel sed sunt adipisci voluptatem nam placeat similique ea.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, cumque quam! Vitae, expedita nulla! Rem quasi expedita earum adipisci unde eaque minima illum quaerat fuga recusandae temporibus architecto, ad corrupti!
          </p>
      </div>

    </div>
  )
}
