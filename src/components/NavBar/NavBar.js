import React, { useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpeg';
import './NavBar.style.css';

const NavBar = () => {
    const [open ,setOpen] = useState(false);
    const [screenWidth , setScreenWidth] = useState(0);
    const trackScreenWidth = ()=>{
        if(screenWidth){
            const width = window.innerWidth;
        // setScreenWidth(width);
        // if(width > 768){
        //     setOpen(true)
        // }
        }
    }

    useEffect(()=>{
trackScreenWidth();
window.addEventListener('resize',trackScreenWidth);
return ()=>window.addEventListener('resize',trackScreenWidth);

    },[])
    return (
            <nav className="nav-bar"  onClick={()=>{
                        setOpen(!open)
                    }}>
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