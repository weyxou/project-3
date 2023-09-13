import React, { useState } from 'react';
// import { auth } from '../Firebase';
import './Register.css'

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase';
import Header from '../header/Header';
import Footer from '../footer';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);

            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
        <Header/>
            <div className="container">
                <h2> Sign up </h2>
                <div className="container-reg">
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">
                                Email address
                            </label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">
                                Password
                            </label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                class="form-control"
                                id="exampleInputPassword1"
                            />
                        </div>
                        <div className="text-center">
                            <button  type="submit" class="btn btn-primary">
                                Register
                            </button>
                        </div>
                        <div className='login'>
                           <p> Already have an account?</p>
                           <a href="/login"> Login</a>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Register;
