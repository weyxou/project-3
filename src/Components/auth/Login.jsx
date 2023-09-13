import React, { useState } from 'react'
import {auth} from '../../Firebase'
import './login.css'


import {signInWithEmailAndPassword , GoogleAuthProvider, signInWithPopup} from 'firebase/auth'


import { Link , useNavigate} from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer'



const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const navigate = useNavigate();
  
    const handleSubmit = async (e)=>{
      e.preventDefault();
  
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          email,
          password
        )
        console.log(user)
  
        navigate('/home')
      } catch (error) {
        console.log(error)
      }
    }



    const googleClick = async ()=>{
try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider)
     
    navigate('/home');
} catch (error) {
    console.log(error)
}
    }


  return (
    <>
   <Header/>
    <div className="container">   
    <h2>Login</h2>    
       <div className="container-reg">
       <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
     type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <div className='text-center'>
  <button
   type="submit" class="btn-primary">Login</button>
  </div>
  <div className='reg'>
<h4>Dont have an account?</h4>
<Link to='/register'> <p>Sign up </p> </Link> </div>
</form>
       </div>
    </div>
    <Footer/>
    </>
  )
}

export default Login