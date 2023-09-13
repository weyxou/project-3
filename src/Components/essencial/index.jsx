import './style.css';
import 'aos/dist/aos.css';

import Aos from 'aos';
import { useEffect } from 'react';

import EssencialIMG from '../../images/essencial.jpg';

export default function Essencial() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='essencial'>
      <div className="essencial_text">
        <h1>New promotions on PlayStation™Store</h1>
        <p>Incredible discounts, curated compilations and seasonal promotions for PS5, PS4 and PS VR, all in one place.</p>
        <button>More</button>
      </div>
      <img src={EssencialIMG} alt="Essencial" className='EssencialIMG'/>
    </section>
  )
}