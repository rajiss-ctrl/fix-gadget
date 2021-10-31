import MailIcon from '../components/images/mailicon.jpeg';
import NameIcon from '../components/images/nameicon.jpeg';
import './Contact.style.css';

const Contact = () => {
    return ( 
       <div className="form_container">
           <h1>Contact us for  solutions to your Gadgets issues</h1>
        <form name="contact v1"
        method="post"
        data-netlify="true"
        onSubmit="submit" >
            <input  type="hidden" name="form-name" value="contact v1"/>
            <div className="name-icon">
                <img src={NameIcon} alt={'name icon'} />
                <input className="first-name" type="text" name="first-name" placeholder="First Name" required />
            </div>
             <div className="name-icon2">
                <img src={NameIcon} alt="" />
                 <input className="last-name" type="text" name="last-name" placeholder="Last Name" />
            </div>
             <div className="mail-icon">
                <img src={MailIcon} alt="" />
                  <input className="email" type="email" name="email" placeholder="Email" />
            </div>
            <textarea name="comments"  placeholder="Your message"></textarea>
            <button type="submit">Send</button>
        </form>
       </div>
     );
}
 
export default Contact;