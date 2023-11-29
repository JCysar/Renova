import Image from 'next/image'

interface UNoticia {
  image: string,
  title: string,
  text: string
}
export default function Noticia({...props}: UNoticia) {
  return (
    <div className=" flex flex-wrap  items-center justify-center my-10 md:flex-nowrap  md:max-w-md">
      <Image
        src={props.image}
        className="mr-3"
        width={153}
        height={116}
        alt="imagem da noticia"
      />
      <div className=''>
        <h3 className='font-bold  my-3 text-center md:text-start'>{props.title}</h3>
        <p className='text-justify md:text-start md:line-clamp-4'>
          {props.text}
        </p>

      </div>
    </div>
  )
}
