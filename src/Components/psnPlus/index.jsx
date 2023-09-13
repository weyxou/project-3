import './style.css';
import 'aos/dist/aos.css';

import Aos from 'aos';
import { useEffect } from 'react';

import PsnPlusIMG from '../../images/PsnPlus.png';
import PlusLogo from '../../images/PlayStationPlus.png'

export default function PsnPlus() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section>
      <img src={PsnPlusIMG} alt="PsnPlusBackground" className='PsnPlusBackground'/>
      <div className="plus_content">
        <img src={PlusLogo} alt="PsnPlusLogo" />
        <p>Enhance your PlayStation experience with online multiplayer, monthly games, exclusive discounts and more.</p>
        <button>More about Playstation Plus</button>
      </div>
    </section>
  )

}