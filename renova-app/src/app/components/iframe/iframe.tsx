"use client"

import MapDekstop from "./mapDekstop";
import MapMobile from "./mapMobile";


function Maps() {
  const screenSize = window.innerWidth;
  /* const [mapOpen, setMapOpen] = useState(false); */

  return (
    <div className="App flex-auto">
      <section id="mapa" className="my-6 mx-3">
        <h1 className="my-2 text-center font-bold text-2xl md:text-start">Endereço</h1>
        <div className="border-2 border-grey-200 md:w-5/6"></div>
        <div className='text-center flex justify-center mt-3'>
          {screenSize > 420 ? <MapDekstop /> : <MapMobile />}
        </div>
      </section>
    </div>
  );
}

export default Maps;
