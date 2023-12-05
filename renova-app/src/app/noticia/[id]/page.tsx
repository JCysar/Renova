import Image from "next/image"
import { redirect } from "next/navigation"


export default async function NoticiaPage({ params } : {params: { id: number}}) {

  const getNew = async () => {


    const response = await fetch(`http://localhost:3001/news/${params.id}`, {
      cache: 'no-store',

    })

    const data = await response.json()

    if(!response.ok)
      redirect('/')

    return data


  }

  const data = await getNew()

  return (
    <div className="md:min-h-screen my-10 mx-6">
      <h1 className="text-center md:text-start font-bold text-2xl ">Noticia</h1>
      <div className="border-2 border-grey-200 md:w-5/6"></div>
      <div className="flex flex-col items-center justify-center ">
        <h2 className='font-bold text-2xl my-6 text-center'>{data.title}</h2>

        <Image
          src={data.image}
          className="mr-3"
          width={400}
          height={400}
          alt="imagem da noticia"
        />



          <p className='text-justify my-6'>
            {data.text}
          </p>
      </div>

    </div>
  )
}
