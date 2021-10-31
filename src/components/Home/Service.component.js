import AsideImg from '../images/ram.jpeg';
import AsembleImg from '../images/assemblepc.jpeg';
import Francis from '../images/francis1.jpg';
import Desk_laptopImg from '../images/desktopandpc.jpeg';
import CableImg from '../images/cable.jpeg';
import LaptopImg from '../images/laptop.jpeg';
import WhiteCharger from '../images/chargerpcs.jpeg';

import './Service.style.css';


const Service = () => {
    return ( 
        <main>
            <aside>
            <header>
                <img src={Francis} alt={'francis pic'} />
                <p>Director: Mr. Francis</p>
                <h1>Our Services</h1>
            </header>
             <ol>
                    <li>Complete computer setup</li>
                    <li>Repairing of Computers</li>
                    <li>Networking</li>
                    <li>Hardware Upgrade</li>
                    <li>Virus Removal</li>
                    <li>Broken Glass and LCD</li>
                    <li>Computer and phone accessories</li>
                </ol>
            </aside>
            <article>
                <div className="card">
                    <img src={AsembleImg} alt={'laptop assemble pic'} />
                    <p>we repaire and offer maintainance service</p>
                </div>
                <div className="card">
                    <img src={Desk_laptopImg} alt={'desktop and loptop'} />
                    <p>we repaire, installation and maintainance service</p>
                </div>
                <div className="card">
                    <img src={CableImg} alt={'networking cable pic'} />
                    <p>computer networking service</p>
                </div>
                
                <div className="card">
                    <img src={LaptopImg} alt={' loptop pic'} />
                    <p>Virus Removal</p>
                </div>
                <div className="card">
                    <img src={AsideImg} alt={'computer Ram pic'} />
                    <p>Hardware Upgrade</p>
                </div>
                <div className="card">
                    <img src={WhiteCharger} alt={'Networking pic'} />
                    <p>Complete computer setup</p>
                </div>
                
            </article>
        </main>
     );
}
 
export default Service;