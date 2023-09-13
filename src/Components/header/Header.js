import { useRef, useState } from 'react';
import { navData } from './navdata';
import './Header.css';
import NavBtn from './NavBtn';
import Navdrop from './Navdrop';

// Импортируем изображения
import headerNavIcon from '../../assets/images/header-nav-icon.png';
import headerNavClose from '../../assets/images/header-nav-close.png';
import searchGlass from '../../assets/images/search-glass.png';
import playstationLogo from '../../assets/images/playstation-logo.png';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const [mobileNavOn, setMobileNavOn] = useState(false);
    const [dropTitle, setDropTitle] = useState('Games');
    const [isDropHidden, setIsDropHidden] = useState(true);

    const navRef = useRef();

    const navBtnElements = navData.map(({ title }) => (
        <NavBtn
            key={title}
            title={title}
            dropState={{ dropTitle, setDropTitle, isDropHidden, setIsDropHidden }}
        />
    ));

    function toggleNav() {
        navRef.current.classList.toggle('header-navbar-toggle');
        setMobileNavOn((prev) => !prev);
    }


    return (
        <header>
            <div className={`main-header-container ${!isDropHidden ? 'main-header-shrink' : ''}`}>
                <div className="header-icon-container">
                    <img
                        className="header-navbar-icon"
                        onClick={() => {
                            toggleNav();
                            setIsDropHidden(true);
                        }}
                        src={mobileNavOn ? headerNavClose : headerNavIcon}
                        alt="toggle navbar button"
                    />
                    <img
                        className="header-search-icon"
                        src={searchGlass}
                        alt="magnifying glass icon"
                    />
                </div>
                <img className="ps-header-logo" src={playstationLogo} alt="playstation logo" />
                <button className="header-sign-btn"  >
                    <a href='/register'>Sign In</a>
                </button>
                <nav ref={navRef} className="header-navbar header-navbar-toggle">
                    {navBtnElements}
                </nav>
            </div>
            <Navdrop dropState={{ dropTitle, setDropTitle, isDropHidden, setIsDropHidden }} />
        </header>
    );
}

export default Header;
