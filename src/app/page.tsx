import Carrossel from './components/carrossel/Carrossel'
import Noticia from './components/noticia'
import Link from 'next/link'

export default function Home() {
  return (
    <div className=''>
      <div className='my-6 block px-10'>
        <h1 className='text-2xl font-bold my-6 mx-3 text-center'>Alirio</h1>
        <h1 className='text-2xl font-bold my-6 mx-3'>Noticias</h1>
        <div className=" border border-grey-200 md:w-5/6"></div>
        <div className='md:grid md:grid-cols-2'>
          <Link href="/noticia" >
            <Noticia
            image="/logo.png"
            title='titulo 1'
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            minus enim! Quo sapiente esse adipisci laborum unde omnis vel a quidem
            maiores? Placeat fugiat quis, culpa harum voluptatibus libero accusamus."/>
          </Link>
          <div className=" border-2 border-grey-200 w-full md:hidden"></div>


          <Link href="/noticia" >
            <Noticia
            image="/logo.png"
            title='titulo 2'
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            minus enim! Quo sapiente esse adipisci laborum unde omnis vel a quidem
            maiores? Placeat fugiat quis, culpa harum voluptatibus libero accusamus."/>
          </Link>
          <div className=" border-2 border-grey-200 w-full md:hidden"></div>

          <Link href="/noticia" >
            <Noticia
            image="/logo.png"
            title='titulo 3'
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            minus enim! Quo sapiente esse adipisci laborum unde omnis vel a quidem
            maiores? Placeat fugiat quis, culpa harum voluptatibus libero accusamus."/>
          </Link>
          <div className=" border-2 border-grey-200 w-full md:hidden"></div>

          <Link href="/noticia" >
            <Noticia
            image="/logo.png"
            title='titulo 4'
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            minus enim! Quo sapiente esse adipisci laborum unde omnis vel a quidem
            maiores? Placeat fugiat quis, culpa harum voluptatibus libero accusamus."/>
          </Link>

        </div>
      </div>

      <Carrossel />


    </div>


  )
}
