import { Link } from 'react-router-dom';
import CallIcon from '../images/call.jpeg';
import './Header.style.css';

const Header = () => {
    return ( 
        <header className="header_container">
            <div className="phone">
                <p><img src={CallIcon} alt={'phone icon'} /> <a  href="tel:+2348032987531">+2348032987531</a></p>
            </div>
            <div className="herder_preview">
           <h1>YOUR PC, YOUR COMPANION AT WORK!
               </h1> 
               <p>HAVING COMPUTER PROBLEMS?</p>
               <Link to="/contact">we can help</Link>
               </div>
        </header>
     );
}
 
export default Header;