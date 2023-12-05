
interface UNoticia {
  image: string,
  title: string,
  text: string
}
export default function Noticia({...props}: UNoticia) {
  return (
    <div className=" flex flex-wrap  px-6 items-center justify-center my-10 md:flex-nowrap">
      <img
        src={props.image}
        className="mr-3 h-[168px] w-64"

        alt="imagem da noticia"
      />
      <div className=''>
        <h3 className='font-bold  my-3 text-center md:text-start'>{props.title}</h3>
        <p className='text-justify md:text-start line-clamp-4 '>
          {props.text}
        </p>

      </div>
    </div>
  )
}
