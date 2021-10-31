// import React, {useState} from 'react';
import './Faq.style.css';


const Faqs = ({faq, index, toggleFag}) => {
    return ( 
        <div 
        className={"faq " + (faq.open ? 'open' : '')}
        key={index}
        onClick={()=>toggleFag(index)}
        >
            <div className="faq-question">
                {faq.question}
            </div>
             <div className="faq-answer">
                {faq.answer}
            </div>
        </div>
     );
}
 
export default Faqs;