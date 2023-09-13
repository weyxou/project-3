import './style.css';
import 'aos/dist/aos.css';

import Aos from 'aos';
import { useEffect } from 'react';

import GT7Banner from '../../images/AppleTv.d5258cf8d9c455f76023.jpg';
import NaveGames from '../../images/fortnite-chapter-4-season-4-keyart-01-en-25aug23.webp';
import GranTurismo from '../../images/GranTurismo.webp';
import EldenRing from '../../images/EldenRing2.jpg'

export default function Lancamentos() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='lancamentos'>
      <div className="lancamentos_text">
        <h1>THIS MONTH</h1>
        <h2>PLAYSTATION ®</h2>
        <p>Check out this month's biggest releases, plus dedicated resources, guides, and more.</p>
        <button>more</button>
      </div>
      <img src={GT7Banner} alt="lancamentos_banner" className='lancamentos_banner' />
      <div className="lancamentos_content"  >
        <div className="lancamentos_item" >
          <img src={NaveGames} alt="NaveGames" />
          <p>Best arcade-style spaceship games for PS4 and PS5</p>
        </div>
        <div className="lancamentos_item" >
          <img src={GranTurismo} alt="NaveGames"  />
          <p  >How Gran Turismo 7 taps into the power of the PS5</p>
        </div>
        <div className="lancamentos_item">
          <img src={EldenRing} alt="NaveGames" />
          <p >How to survive your first few hours in Elden Ring</p>
        </div>
      </div>

    </section>
  )
}