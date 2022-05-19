import React,{useRef} from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function New_form() {
    const form = useRef();
   

   const sendEmail = (e) => {
     e.preventDefault();
 
     emailjs.sendForm('service_6i5sbfi', 'template_5js41cu', form.current, 'K4Y7kXhAD_D5pBOiq')
       .then((result) => {
           console.log(result.text);
       }, (error) => {
           console.log(error.text);
       });
   };
  return (
    <div>
    <form ref={form} onSubmit={sendEmail}>
    <label>Name</label>
    <input type="text" name="name" />
    <label htmlFor="">email</label>
    <input type="email" name="email"  />
    <input type="submit" value="submit" />
    </form>
   
    
    
    
    </div>
  )
}
