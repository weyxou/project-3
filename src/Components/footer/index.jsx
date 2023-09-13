import './style.css';

import SonyLogo from '../../images/ps-bug.svg';
import SIE from '../../images/sie.svg';

export default function Footer() {
  return (
    <footer>
      <div className="sony_information">
        <img src={SonyLogo} alt="SonyLogo" />
        <img src={SIE} alt="SIE" />
      </div>
      <div className="footer_menu">
        <ul>
          <li>Support</li>
          <li>Polítics</li>
          <li>Service Terms</li>
          <li>PlayStation Studios</li>
          <li>Service Terms</li>
          <li>About company</li>
          <li>PlayStation and the environment</li>
        </ul>
        <ul>
          <li>Terms of service and user agreement</li>
          <li>PS™Store Cancellation Policy</li>
          <li>Health warnings</li>
          <li>Classification</li>
          <li>Careers</li>
          <li>Videogames</li>
          <li>Site map</li>
        </ul>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>YouTube</li>
          <li>Instagram</li>
          <li>Twitch</li>
        </ul>
      </div>
    </footer>
  )
}