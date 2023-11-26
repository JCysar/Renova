import Image from "next/image"

export default function devs() {
  return(
  <div id="body-center" className="">

          <h2 id="dev-title" >DESENVOLVEDORES</h2>

          <div id="devs-container" className=" w-full flex-auto md:mx-3 md:flex md:justify-between text-center  ">
              <div className="flex justify-center items-center  w-full  md:flex-col my-2">
                  <Image src="/Icones/D_Cavalcanti.jpg" alt="Imagem do desenvolvedor" className="rounded-full h-24" width={100} height={100} />
                  <p className="ml-3">
                      Daniel Cavalcanti
                  </p>
              </div>
              <div className="flex justify-center items-center  w-full  md:flex-col my-2">
                  <Image src="/Icones/D_Pereira.jpg" alt="Imagem do desenvolvedor" className="rounded-full h-24" width={100} height={100} />
                  <p className="ml-6">
                      Daniel Pereira
                  </p>
              </div>
              <div className="flex justify-center items-center  w-full  md:flex-col my-2">
                  <Image src="/Icones/Julio.jpg" alt="Imagem do desenvolvedor" className="rounded-full h-24" width={100} height={100}/>
                  <p className="ml-10">
                      Júlio Cesar
                  </p>
              </div>
              <div className="flex justify-center items-center  w-full  md:flex-col my-2">
                  <Image src="/Icones/Irinaldo.jpeg" alt="Imagem do desenvolvedor" className="rounded-full h-24" width={100} height={100}/>
                  <p className="ml-6">
                      Irinaldo Júnior
                  </p>
              </div>
              <div className="flex justify-center items-center  w-full  md:flex-col my-2">
                  <Image src="/Icones/Caio.jpeg" alt="Imagem do desenvolvedor" className="rounded-full h-24 " width={100} height={100}/>
                  <p className="ml-14">
                      Caio Luiz
                  </p>
              </div>
              <div className="flex justify-center items-center  w-full  md:flex-col my-2">
                  <Image src="/Icones/Marcos.jpg" alt="Imagem do desenvolvedor" className="rounded-full h-24" width={100} height={100}/>
                  <p className="ml-4">
                      Marcos Arruda
                  </p>
              </div>
          </div>
  </div>
  )
}
