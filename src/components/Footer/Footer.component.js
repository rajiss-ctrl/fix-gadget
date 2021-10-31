import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Circle from '../images/circleimg.png';
import RajiSvg from '../images/rajissctrl.svg';
import Facebook from '../images/facebook02.png';
import Twitter from '../images/twitter02.png';
import Instagram from '../images/instagram01.jpg';
import Francis from '../images/francis1.jpg';
import Faqs from './Faq';

import './Footer.style.css';

const Footer = () => {
    const [faqs,setFaqs] = useState([
        {
            question:'Can you repair faulty smart phone?',
            answer:'Yes, we are repairing all kind of gadgets',
            open:false
        },
        {
            question:'Did you sell laptop?',
            answer:'We have trusted dealers of fairly used and new one we can recommend',
            open:false
        }
    ]);
   
    const toggleFag =(index)=>{
        setFaqs(faqs.map((faq,i)=>{
            if(i === index){
                faq.open = !faq.open
            }else{
                faq.open = false
            }
            return faq;
        }))
    }
    return ( 
            <footer>
        <section className="preview">
            <p>We are ready to serve you and that's the more reason we have our office
            opened from Monday to Saturdays of every week. If your pc develop fault dont 
            worry we have you covered .</p>
            <img className="circle" src={Circle} alt={'circle pic'} />
            <h2>Frequently Asked Questions</h2>
            <div className="faqs">
                {faqs.map((faq,i)=>
                    <div className="faq" >
                    <Faqs faq={faq} index={i} toggleFag={toggleFag}/> 
                    </div>
                )}
            </div>
        </section>
        <section className="footer_section">
            <div className="footer_nav">
                    <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contacts</Link></li>
               <li><Link to="accessaries">Accessaries</Link></li>
                    </ul>
            </div>
            <div className="footer_remark">
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Quis, obcaecati!</p>
                    <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Quis, obcaecati!</p>
                    <fieldset>
                        <legend>
                            <h1>Address</h1>
                        </legend>
                        <p>Kulende Market Zango ilorin</p> 
                        <img src={Francis} alt={'Francis pic'} />
                    </fieldset>
                   <div className="social">
                    <img src={Facebook} alt={'facebook pic'} />
                    <img src={Twitter} alt={'twitter pic'} />
                    <img src={Instagram} alt={'instagram pic'} />
                   </div>
            </div>
            <div className="rajiss-ctrl">
                <div className="rajiss-pic">
                    <p><img src={RajiSvg} alt={'rajiss-ctrl pic'} /></p>
                </div>
                <p>Rajis S Sanjo</p>
                <small>09059438448</small>
                <p><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />2021</p>
                <p>rajiss-ctrl</p>
                
            </div>
        </section>
        </footer>
     );
}
 
export default Footer;