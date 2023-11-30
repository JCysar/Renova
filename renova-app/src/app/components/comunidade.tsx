import Maps from "./iframe/iframe"

export default function Comunidade({...props}) {
  return (
    <>
      <div id="Comunidade" className="mt-16 mx-3">
        <h1 className="my-2 text-center font-bold text-2xl md:text-start">{props.comunidade_title}</h1>
        <div className="border-2 border-grey-200 md:w-5/6"></div>
        <p className="text-justify mt-3 md:text-start">{props.comunidade_text}</p>
      </div>
      <div id="Historia" className="my-6 mx-3">
        <h1 className="my-2 text-center font-bold text-2xl md:text-start">{props.historia_title}</h1>
        <div className="border-2 border-grey-200 md:w-5/6"></div>
        <p className="text-justify mt-3 md:text-start">{props.historia_text}</p>
      </div>
      <div id="Demografia" className="my-6 mx-3">
        <h1 className="my-2 text-center font-bold text-2xl md:text-start">{props.demografia_title}</h1>
        <div className="border-2 border-grey-200 md:w-5/6"></div>
        <p className="text-center mt-3 md:text-start">
          {props.demografia_text_area}
          <br />
          {props.demografia_text_populacao}
          <br />
          {props.demografia_text_densidade_demografica}
        </p>
      </div>
      <Maps />

    </>

  )
}
