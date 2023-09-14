import React from 'react'
import Header from '../header/Header'
import Footer from '../footer'

import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import './game.css'

const Games = () => {
  console.log(getAuth())
  const navigate = useNavigate();
  
  const auth = getAuth();

const glav=async()=>{
  await auth.signOut();
  navigate('/glav')
}


  return (
    <>
    <Header/>
    <div className='card-gl'>
    <div className='cards'>
      <div className='card-img'> 
        <img src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-games-ghost-of-tsushima-image-block-02-en-14oct21?$1600px$" alt="" />
      </div>
      <div className='card-desc'>
        <h2>Ghost of Tsushima</h2>
        <p>Forget the rules and win the war for <br />
         the freedom of Tsushima in this <br /> expanded version of the 
          open-world <br /> action adventure  from Sucker Punch Productions</p>
      <button>Buy</button>
      </div>
    </div>
    </div>




    <button onClick={glav}> Home</button>
<Footer/>
    </>
  )
}

export default Games