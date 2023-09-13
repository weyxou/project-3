import './style.css';
import 'aos/dist/aos.css';

import Aos from 'aos';
import { useEffect } from 'react';

import GranTurismo from '../../images/armored-core-6-keyart-02-en-20apr23.webp';
import GranTurismoLogo from '../../images/GT7_Logo.png';

import EndenRing from '../../images/best-family-games-keyart-01-24jul23$en.webp';
// import EldenRingLogo from '';

import GTA5 from '../../images/GTA5.png';
import GTA5ONLINE from "../../images/GTA5online.webp";
import GTA5logo from '../../images/LogoGTA5png.png'

import AppleTv from '../../images/AppleTv.jpg';
import AppleTvLogo from '../../images/AppleTVLogo.svg.png';


import Promotion from '../../images/semana-do-consumidor-playstation.webp';
import SConsumidorLogo from '../../images/SemanaConsumidorLogo.png';
import SConsumidor from '../../images/SemanaConsumidor.png';

import { useState } from 'react';


export default function Banner() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [background, setBackground] = useState(GranTurismo);
  const [BannerIMG, setBannerIMG] = useState(GranTurismoLogo);
  const [info, setInfo] = useState({
    title: "Find your way",
    desc: "Gran Turismo 7 builds on generations of racing simulation experience to bring you the best features in the franchise's history"
  });

  function ChangeBanner(item) {
    let nome = (item.target.alt);

    switch (nome) {
      case "GranTurismo7":
        setBackground(GranTurismo);
        setBannerIMG(GranTurismoLogo);
        setInfo({
          title: "Find your way",
          desc: "Gran Turismo 7 builds on generations of racing simulation experience to bring you the best features in the franchise's history"
        })
        break;
      case "EndenRing":
        setBackground(EndenRing);
        // setBannerIMG(EldenRingLogo);
        setInfo({ title: "Now available for PS4 and PS5 ", desc: "Use the power of the Elden Ring and become an Elden Lord in the Lands Between." });
        break;
      case "GTA5":
        setBackground(GTA5);
        setBannerIMG(GTA5logo);
        setInfo({ title: "Now available for PS5", desc: "Get your free GTA Online, exclusive to PS5 until June 14, 2022" });
        break;
      case "AppleTv":
        setBackground(AppleTv);
        setBannerIMG(AppleTvLogo);
        setInfo({ title: "I unlocked 3 months of Apple TV+ on your PS4 console", desc: "Your PS4 just got more fun.Explore Apple Originals on your favorite gaming console.Restrictions apply." });
        break;
      case "Promotion":
        setBannerIMG(SConsumidorLogo);
        setBackground(SConsumidor);
        setInfo({ title: "Promotion !!", desc: "Take advantage of Playstation Consumer Week to increase your collection. Classics and great PS4 and PS5 games at special prices. Check it out!" });
        break;
      default:
        console.log("Erro")
    }
  }

  return (
    <div className='banner'>
      <img src={background} alt="banner" className='banner_img' />

      <img data-aos="fade-right" src={BannerIMG} alt="Logo" className='banner_logo' />

      <div className="banner_content" data-aos="fade-right">
        <h1 data-aos="fade-right">{info.title}</h1>
        <p data-aos="fade-right">{info.desc}</p>
        <button>more</button>
      </div>

      <section className='banner_selector'>
        <div data-aos="fade" className="banner_selector_item" onClick={(item) => { ChangeBanner(item) }}><img src={GranTurismo} alt="GranTurismo7" /></div>
        <div data-aos="fade" data-aos-delay="200" className="banner_selector_item" onClick={(item) => { ChangeBanner(item) }}><img src={EndenRing} alt="EndenRing" /></div>
        <div data-aos="fade" data-aos-delay="400" className="banner_selector_item" onClick={(item) => { ChangeBanner(item) }}><img src={GTA5ONLINE} alt="GTA5" /></div>
        <div data-aos="fade" data-aos-delay="600" className="banner_selector_item" onClick={(item) => { ChangeBanner(item) }}><img src={AppleTv} alt="AppleTv" /></div>
        <div data-aos="fade" data-aos-delay="00" className="banner_selector_item" onClick={(item) => { ChangeBanner(item) }}><img src={Promotion} alt="Promotion" /></div>
      </section>
    </div>
  )
}