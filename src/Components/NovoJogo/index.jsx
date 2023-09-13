import './style.css';
import 'aos/dist/aos.css';

import Aos from 'aos';
import { useEffect } from 'react';

import TheShow22 from '../../images/TheShow22.jpg';
import TheShow22Logo from '../../images/TheShow22_Logo.png';

export default function NovoJogo() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='NovoJogo'>
      <img src={TheShow22} alt="TheShow22" className='NovoJogo_background' />
      <div className="NovoJogo_content" >
        <img src={TheShow22Logo} alt="TheShow22Logo" className='TheShow22Logo' />
        <h1>Domine o The Show</h1>
        <p>Every pitch... Every hit... Every win. Leave your mark and run the show in MLB The Show 22, April 5th, on PS4 and PS5.</p>
        <button>More</button>
      </div>
    </section>
  )
}