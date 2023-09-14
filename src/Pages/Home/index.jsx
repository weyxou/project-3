import './style.css';

import Login from '../../Components/auth/Login'
import Home from '../../Components/auth/Home'
import Register from '../../Components/auth/Register'
import { Routes, Route} from 'react-router-dom'
import Main from './Home';
import Games from '../../Components/game/Games';
import Header from '../../Components/header/Header';
import AddProduct from '../AddProduct';
import ProductList from '../../Components/admin-panel/PoductLIst';
function App() {
  return (
<>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/games' element={<Games/>}/>
        <Route path='/admin' element={<AddProduct/>}/>
        <Route path='/product' element={<ProductList/>}/>
        <Route path='/glav' element={<App/>}/>
      </Routes>
</>
  );
}

export default App;
