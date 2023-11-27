import Image from 'next/image'

export default function Noticia() {
  return (
    <div className=" align-middle md:flex">
      <Image
        src="/logo.png"
        className=" self-center md:mx-3"
        width={100}
        height={100}
        alt="imagem da noticia"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
        minus enim! Quo sapiente esse adipisci laborum unde omnis vel a quidem
        maiores? Placeat fugiat quis, culpa harum voluptatibus libero accusamus.
      </p>
    </div>
  )
}
