import './style.css';

import Login from '../../Components/auth/Login'
import Home from '../../Components/auth/Home'
import Register from '../../Components/auth/Register'
import { Routes, Route} from 'react-router-dom'
import Main from './Home';
function App() {
  return (
<>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
      </Routes>
</>
  );
}

export default App;
