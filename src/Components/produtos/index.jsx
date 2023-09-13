import './style.css';
import 'aos/dist/aos.css';

import Aos from 'aos';
import { useEffect } from 'react';

import PS5 from '../../images/ps5.png';
import DualSense from '../../images/dualsense.jpg';
import Headset from '../../images/headset.jpg';
import ControleMidea from '../../images/Media.png';
import Camera from '../../images/camera.jpg';
import { useState } from 'react';



export default function Produtos() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [produtoIMG, setProdutoIMG] = useState(PS5);
  const [info, setInfo] = useState({
    title: "Console Playstation 5",
    desc: "Enjoy a seamless, wireless experience with a 3D audio-enabled headset on PS5 consoles."
  });

  function SelecionarProduto(item) {
    for (let i = 1; i <= 5; i++) {
      const a = document.getElementById(i);
      if (a.classList.length > 1) {
        a.classList.remove('selecionado');
      }
    }
    const element = document.getElementById(item.target.id);

    element.classList.toggle('selecionado');

    switch (item.target.id) {
      case "1":
        setProdutoIMG(PS5);
        setInfo({
          title: "Playstation 5",
          desc: "Discover a new generation of incredible Playstation games.."
        });
        break
      case "2":
        setProdutoIMG(DualSense);
        setInfo({
          title: "DualSense wireless controller",
          desc: "Immerse yourself in the gaming experience with a controller that supports haptic feedback and dynamic trigger effects."
        });
        break
      case "3":
        setProdutoIMG(Headset);
        setInfo({
          title: "Pulse 3D wireless headset",
          desc: "Enjoy a seamless, wireless experience with a 3D audio-enabled headset on PS5 consoles."
        });
        break
      case "4":
        setProdutoIMG(ControleMidea);
        setInfo({
          title: "Media control",
          desc: "Convenience and an intuitive layout let you control movies, streaming services and more on your PS5 console."
        });
        break
      case "5":
        setProdutoIMG(Camera);
        setInfo({
          title: "Camera HD",
          desc: "Add your own image to gameplay videos and broadcasts with smooth, crisp, Full HD capture."
        });
        break
      default:
        console.log('Erro')
    }
  }

  return (
    <div>
      <div className="produtos_content">
        <div className="produtos_text">
          <h1  >{info.title}</h1>
          <p>{info.desc}</p>
          <button>More</button>
        </div>
        <img src={produtoIMG} alt={produtoIMG} data-aos="fade-up-left" />
      </div>

      <div className="produtos_selector">
        <div id='1' className="produtos_item" onClick={(item) => SelecionarProduto(item)}>
          <img src={PS5} alt="ps5" id='1' />
          <p id='1'>Console PS5</p>
        </div>
        <div id='2' className="produtos_item" onClick={(item) => SelecionarProduto(item)}>
          <img src={DualSense} alt="DualSense" id='2' />
          <p id='2'>DualSense wireless controller</p>
        </div>
        <div id='3' className="produtos_item" onClick={(item) => SelecionarProduto(item)}>
          <img src={Headset} alt="ps5" id='3' />
          <p id='3'>PULSE 3D™ Wireless Headset</p>
        </div>
        <div id='4'className="produtos_item" onClick={(item) => SelecionarProduto(item)}>
          <img src={ControleMidea} alt="ps5" id='4' />
          <p id='4'>Media Console</p>
        </div>
        <div id='5' className="produtos_item" onClick={(item) => SelecionarProduto(item)}>
          <img src={Camera} alt="Camera" id='5' />
          <p id='5'>Camera HD</p>
        </div>
      </div>

    </div>
  )
}