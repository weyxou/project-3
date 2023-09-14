import React from 'react'
import './home.css'

import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer'


const Homeqwe = () => {
  console.log(getAuth())
  const navigate = useNavigate();

  const auth = getAuth();

  const logOut = async () =>{
await auth.signOut();
navigate('/')
  }

  const games=async()=>{
    await auth.signOut();
    navigate('/games')
  }
  return (
    <>
<Header/>
    <div className="home">
    <h1>Welcome </h1>

    <div className='home1'>
      <h1>{auth.currentUser.displayName}</h1>
      <h2>{auth.currentUser.email} </h2>
      <img src={auth.currentUser.photoURL} alt="" />
    </div>
    <button onClick={games}> game </button>
    <button onClick={logOut}>Log Out</button>
    </div>
    <Footer/>
    </>
  )
}

export default Homeqwe