/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-undef */
import MapEmbed from "./MapEmbed";
import MapMobile from "./MapMobile";


function Maps() {
  const screenSize = window.innerWidth;
  /* const [mapOpen, setMapOpen] = useState(false); */

  return (
    <div className="App flex-auto">
      <section id="mapa" className="mx-auto uppercase">
        <div className='text-center flex justify-center'>
          {screenSize > 420 ? <MapEmbed /> : <MapMobile />}
        </div>
      </section>
    </div>
  );
}

export default Maps;
