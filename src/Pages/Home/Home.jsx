import React from 'react'

import Banner from '../../Components/banner';
import Produtos from '../../Components/produtos';
import Footer from '../../Components/footer';
import Lancamentos from '../../Components/lancamentos';
import NovoJogo from '../../Components/NovoJogo';
import PS4 from '../../Components/PS4';
import Essencial from '../../Components/essencial';
import PsnPlus from '../../Components/psnPlus';
import Header from '../../Components/header/Header';


const Main = () => {
  return (
    
<div className="Home">
          <Header className="header" />
          <Banner className="banner" />
          <main>
              <Produtos />
          </main>
          <Lancamentos />
          <NovoJogo />
          <PS4 />
          <PsnPlus />
          <Essencial />
          <Footer />
      </div>
  )
}

export default Main