import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpeg';
import './NavBar.style.css';

const NavBar = () => {
    const [open ,setOpen] = useState(false);
      const [screenWidth, setScreenWidth] = useState(0);
    
    const trackScrenWidth = ()=>{
        const width = window.innerWidth;
        setScreenWidth(width);
        if(width > 800){
            setOpen(true)
    
        }
    }

    useEffect(()=>{
trackScrenWidth();
window.addEventListener('resize',trackScrenWidth);
return ()=>window.addEventListener('resize',trackScrenWidth);

    },[])
    return (
            <nav className="nav-bar">
                <img className="logo" src={logo} alt={'repair pc pic'} />
                <div className="list-wrapper">
                     <img 
                    src={`${process.env.PUBLIC_URL}/menu.png`} 
                    alt="menu icon"
                    style={{opacity: !open ? 1 : 0}} 
                    onClick={()=>{
                        setOpen(!open)
                    }}/>
                    <img 
                    src={`${process.env.PUBLIC_URL}/close.png`} 
                    alt="cross icon"
                    style={{opacity: open ? 1 : 0}}
                     onClick={()=>{
                        setOpen(!open)
                    }} />
                </div>
            
            <ul style={{left: open ? "0" : "-100vw"}}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
               <li><Link to="/accessaries">Accessaries</Link></li>
            </ul>
        </nav>
       
      );
}
 
export default NavBar;