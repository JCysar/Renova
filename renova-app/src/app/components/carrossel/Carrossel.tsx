// Import Swiper React components
"use client"
import Link from 'next/link';
import Image from 'next/image';
import * as React from 'react';
import './style.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Pagination , Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


const content = [
  {
    img: '/COVID-19.jpg',
    date: '26 Maio 2023',
    header: 'Recife realiza mutirão de vacinação contra Covid em 15 localidades',
    info: 'Mulher prepara vacina contra a Covid-19 para aplicação no Recife',
    link: 'https://g1.globo.com/pe/pernambuco/noticia/2022/12/07/recife-realiza-mutirao-de-vacinacao-contra-covid-em-15-localidades-saiba-onde-tomar-doses-no-feriado-e-fim-de-semana.ghtml',

  },
  {
    img: '/Outubro_Rosa.jpg',
    date: '08 Outubro 2023',
    header: 'Prefeitura promove ações destinadas a saúde da mulher no Outubro Rosa',
    info: 'Mulher prepara vacina contra a Covid-19 para aplicação no Recife',
    link: 'https://www.pmsaposse.sp.gov.br/campanha-outubro-rosa-promove-acoes-com-foco-na-saude-da-mulher/',
  },
  {
    img: '/Novembro-Azul.jpeg',
    date: '17 Novembro 2023',
    header: 'Prefeitura do Recife reforça importância dos cuidados com a saúde integral do homem no Novembro Azul',
    info: ' Cuidados básicos com a saúde e a realização de exames de rotina são as formas mais eficazes para identificar qualquer doença precocemente e iniciar o tratamento. Na Rede Municipal, público deve buscar serviço em mais de 150 unidades de saúde, além de laboratórios da rede conveniada',
    link: 'https://www2.recife.pe.gov.br/noticias/17/11/2022/prefeitura-do-recife-reforca-importancia-dos-cuidados-com-saude-integral-do',
  },
];

export default function Fade() {
  return (
    <section className=" pb-[1rem]  bg-gradient-to-l from-cyan-500 to-blue-500">
      <div className="lg:mx-auto max-w-5xl mx-[1.5rem]">
        <h1 className="text-[3rem] text-white font-bold underline mb-[1rem] text-center">
          Notícias Gerais
        </h1>
        <Swiper
          modules={[Navigation, Pagination, EffectFade, Autoplay]}
          effect={'fade'}
          loop={true}
          pagination={{
            clickable: true,

          }}
          autoplay={{ delay: 4000 }}
          spaceBetween={30}
          navigation={true}
          className="fade"
        >
          {content.map((p, index) => {
            return (
              <SwiperSlide
                className=" grid md:grid-cols-2 gap-y-10 md:gap-x-10 x-md:pt-10 "
                key={index}
              >
                <div className='flex justify-center'>
                  <Image src={p.img} alt=""   width={800} height={800}  />
                </div>
                <div className="px-y pt-7">
                  <header className="date text-slate-200 font-bold ">
                    {p.date}
                  </header>
                    <div className="title ">
                      <h1 className="font-bold mt-3 text-xl text-white ">{p.header}</h1>
                      <p className=" text-white line-clamp-2 ">{p.info}</p>
                    </div>
                    <Link href={p.link} >
                      <button className="btn bg-Azul p-[1rem_1.5rem] font-bold text-white mt-2 ">
                        Saiba mais
                      </button>
                    </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
