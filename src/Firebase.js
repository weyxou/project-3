import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'



const firebaseConfig = {
    apiKey: 'AIzaSyABJuFzDhGSk6wGi6ZWBZDiviejOq2t9-c',
    authDomain: 'auth-d81f4.firebaseapp.com',
    projectId: 'auth-d81f4',
    storageBucket: 'auth-d81f4.appspot.com',
    messagingSenderId: '690663732660',
    appId: '1:690663732660:web:986721a65b2b68f38d6ee1',
    measurementId: 'G-6VK3F91B9K',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)