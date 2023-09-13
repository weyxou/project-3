import { useState } from 'react';
import './NavBtn.css';
import navGamesFilledBlue from '../../assets/images/nav-Games-filled-blue.png';
import navGamesOutlineBlue from '../../assets/images/nav-Games-outline-blue.png';
import navGamesOutlineGray from '../../assets/images/nav-Games-outline-gray.png';
import filledArrow from '../../assets/images/filled-arrow.png';
import unfilledArrow from '../../assets/images/unfilled-arrow.png';

function NavBtn(props) {
    const { dropTitle, setDropTitle, isDropHidden, setIsDropHidden } = props.dropState;
    const title = props.title;

    const [hovered, setHovered] = useState(false);

    const btnIsFocused = dropTitle === title && !isDropHidden ? true : false;

    function handleClick() {
        setDropTitle(title);
        if (isDropHidden) {
            setIsDropHidden(false);
        } else if (!isDropHidden && dropTitle === title) {
            setIsDropHidden(true);
        }
    }

    function toggleHovered() {
        setHovered((prev) => !prev);
    }

    function getBtnIcons(title) {
        if (btnIsFocused) {
            return {
                icon: `nav-${title}-filled-blue`,
                arrow: `filled-arrow`,
            };
        } else {
            if (hovered) {
                return {
                    icon: `nav-${title}-outline-blue`,
                    arrow: `filled-arrow`,
                };
            } else {
                return {
                    icon: `nav-${title}-outline-gray`,
                    arrow: `unfilled-arrow`,
                };
            }
        }
    }

    return (
        <button
            onClick={handleClick}
            onMouseEnter={toggleHovered}
            onMouseLeave={toggleHovered}
            className={`nav-btn ${btnIsFocused ? 'nav-btn-background-blue' : ''}`}>
            <img
                className="nav-btn-icon"
                src={
                    btnIsFocused
                        ? navGamesFilledBlue
                        : hovered
                        ? navGamesOutlineBlue
                        : navGamesOutlineGray
                }
                alt={`${title} icon`}
            />
            <span className={`nav-btn-title ${btnIsFocused ? `nav-btn-title-opened` : ''}`}>
                {title}
            </span>
            <img
                className={`nav-btn-arrow ${btnIsFocused ? 'nav-btn-arrow-rotate' : ''}`}
                src={btnIsFocused ? filledArrow : unfilledArrow}
                alt="arrow icon pointing down"
            />
        </button>
    );
}

export default NavBtn;
