import './style.css';
import 'aos/dist/aos.css';

import Aos from 'aos';
import { useEffect } from 'react';

import PS4Console from '../../images/PS4.jpg';
import PS4VR from '../../images/PS4VR.jpg';
import PS4Controle from '../../images/PS4Controle.jpg';


export default function PS4() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='PS4'>
      <h1 className='ps4_title'>Explore o PlayStation®4</h1>
      <h2 className='ps4_subtitle'>Amazing games and non-stop fun. There's never been a better time to have fun with PS4.</h2>
      <div className="ps4_content">
        <div className="ps4_card" >
          <img src={PS4Console} alt="Ps4 console" />
          <h1>Playstation 4</h1>
          <p>The most incredible games are on PS4, with 1 TB of storage.</p>
          <button>More</button>
        </div>
        <div className="ps4_card" >
          <img src={PS4VR} alt="Ps4 Vr"/>
          <h1>Playstation 5</h1>
          <p>The most incredible games are on PS4, with 1 TB of storage.</p>
          <button>More</button>
        </div>
        <div className="ps4_card">
          <img src={PS4Controle} alt="Ps4 Controle"/>
          <h1>Playstation 6</h1>
          <p>The most incredible games are on PS4, with 1 TB of storage.</p>
          <button>More</button>
        </div>
      </div>
    </section>
  )
}