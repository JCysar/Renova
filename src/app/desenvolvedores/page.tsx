'use client'

import Dev from '../components/dev'

export default function devs() {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to top, #004080 , #3399ff)`,
    WebkitBackgroundClip: 'text',
    color: 'transparent'
  }
  return (
    <div  className="w-full">
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
          description="Especialista em Rainbow Six"
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
          description="Qual a necessidade disso?"
        />
        <div className=" border-2 border-grey-200 w-full"></div>

        <Dev
          name="Irinaldo"
          image="/Icones/Irinaldo.jpeg"
          description="Especialista em não dormir"
        />
        <div className=" border-2 border-grey-200 w-full"></div>

        <Dev name="Julio" image="/Icones/Julio.jpg" description="Coxinha" />
        <div className=" border-2 border-grey-200 w-full"></div>

        <Dev name="Caio" image="/Icones/Caio.jpeg" description="Viajando..." />
        <div className=" border-2 border-grey-200  "></div>

        <Dev
          name="Marcos"
          image="/Icones/Marcos.jpg"
          description="Bikes e vidros"
        />
      </div>
    </div>
  )
}
