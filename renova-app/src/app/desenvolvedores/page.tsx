'use client'

import Dev from '../components/dev'
export const gradientStyle = {
  backgroundImage: `linear-gradient(to top, #004080 , #3399ff)`,
  WebkitBackgroundClip: 'text',
  color: 'transparent'
}

export default function devs() {
  return (
    <div  className="w-full  my-6">
      <h2
        id="dev-title"
        className=" flex font-bold text-2xl font text-col justify-center my-6 "
        style={gradientStyle}
      >
        DESENVOLVEDORES
      </h2>
      <div id="devs-container" className="flex-auto  ml-2">
        <Dev
          name="Daniel Pereira"
          image="/Icones/D_Pereira.jpg"
          description="Descrição da pessoa"
        />
        <div
          className=" border-2"
          style={{
            backgroundImage: 'linear-gradient(to right, #4dc0b5, #3490dc)'
          }}
        ></div>

        <Dev
          name="Daniel Cavalcante"
          image="/Icones/D_Cavalcanti.jpg"
          description="Descrição da pessoa"
        />
        <div className=" border-2 border-grey-200 w-full"></div>

        <Dev
          name="Irinaldo"
          image="/Icones/Irinaldo.jpeg"
          description="Descrição da pessoa"
        />
        <div className=" border-2 border-grey-200 w-full"></div>

        <Dev name="Julio" image="/Icones/Julio.jpg" description="Descrição da pessoa" />
        <div className=" border-2 border-grey-200 w-full"></div>

        <Dev name="Caio" image="/Icones/Caio.jpeg" description="Descrição da pessoa" />
        <div className=" border-2 border-grey-200  "></div>

        <Dev
          name="Marcos"
          image="/Icones/Marcos.jpg"
          description="Descrição da pessoa"
        />
      </div>
    </div>
  )
}
