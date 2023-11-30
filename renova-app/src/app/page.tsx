import Carrossel from './components/carrossel/Carrossel'
import Comunidade from './components/comunidade'
import Noticia from './components/noticia'
import Link from 'next/link'


export default function Home() {
 
  return (
    <div className=''>
      <div className='my-6 block px-10'>
        <h1 className='text-2xl font-bold my-6 mx-3 text-center'>Comunidade</h1>
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
      <Comunidade
        comunidade_title="Comunidade"
        comunidade_text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, enim dolores ab, obcaecati aperiam odio molestiae debitis qui voluptatibus deleniti inventore asperiores! Magnam delectus vel fuga voluptate, quidem pariatur minus? Lorem ipsum dolor sit amet consectetur adipisicing elit."

        historia_title="História"
        historia_text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, enim dolores ab, obcaecati aperiam odio molestiae debitis qui voluptatibus deleniti inventore asperiores! Magnam delectus vel fuga voluptate, quidem pariatur minus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolorem. Fugiat unde dolorum quas repellendus consequuntur. Eos quo praesentium quae corrupti, perspiciatis quia atque. Voluptate voluptatum sit minima nihil culpa."

        demografia_title="Demografia"
        demografia_text_area="Área: 25 ha."
        demografia_text_populacao="População: 4.655 habitantes"
        demografia_text_densidade_demografica="Densidade demográfica: 184,89 hab./ha."
      />


    </div>


  )
}
