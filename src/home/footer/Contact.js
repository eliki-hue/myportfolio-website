import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Footer.css"

const ContactUs = () => {
  const form = useRef();
  const [status, setStatus]=useState(null)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iv4g50e', 'template_o0gt4ap', form.current, 'sQQgLC14Rgr5kC5EI')
      .then((result) => {
          console.log(result);
          if(result.text =='OK'){
            
            setStatus("Message sent successfully")
          }
         
      }, (error) => {
          console.log(error.text);
          setStatus(error.text)
      });
      e.target.reset()
  };

  return (
    <>
    <p>{status}</p>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required/>
      <label>Email</label>
      <input type="email" name="user_email" required />
      <label>Message</label>
      <textarea name="message" required/>
      <button type="submit" className='contact-btn ' value="Send" >Send Message</button>
    </form>
    </>
  );
};
export default ContactUs;