import React, { useRef } from 'react';
import './Contactus.css'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactWhatsapp from 'react-whatsapp';



export default function ContactUs() {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_jw4vhis', 'template_l3monfp', form.current, 'Uy7PTbbafJWke5RFL')
            .then((result) => {
                console.log(result.text);
                toast.success("Email Sent Successfully!")
            }, (error) => {
                console.log(error.text);
                toast.error("Email Not Sent !")
            });
        const input = document.querySelectorAll("#name,#email,#subject,#skype,#number,#message");
        input.forEach((item) => {
            item.value = ""
        })

    };
    return <div>
        <div className="section-block section-block-grey" id="contact">
            <div className="container">
                <div className="center-holder section-heading text-white"><span>Get in Touch</span>
                    <h3>Let's Talk about Your Business</h3>
                    <div className="section-heading-line"></div>
                </div>
                <div className="row mt-50">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="contact-form-box">
                            <form className="contact-form" id='clear_form' ref={form} onSubmit={sendEmail}>


                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-md-6 labhhgg">
                                        <label for="validationTooltip01" class="form-label label_here mb-0" >Name <span className='strick'>*</span> </label>
                                        <input type="text" name="name" id='name' placeholder="Name" required />
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-6 labhhgg">
                                        <label for="validationTooltip01" class="form-label label_here mb-0" >Email <span className='strick'>*</span> </label>
                                        <input type="email" name="email" id='email' placeholder="E-mail" required />
                                    </div>

                                </div>

                                <div className="col-md-12 col-xs-12 col-sm-12">
                                    <label for="validationTooltip01" class="form-label label_here mb-0" >Subject  </label>

                                    <input type="text" name="subject" id='subject' placeholder="Subject" />
                                </div>

                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-md-6">
                                        <label for="validationTooltip01" class="form-label label_here mb-0" >Skype ID </label>

                                        <input type="text" name="skype" id='skype' placeholder="Skype ID" />
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-6">
                                        <label for="validationTooltip01" class="form-label label_here mb-0" >Number <span className='strick'>*</span> </label>


                                        <input type="number" name="number" id='number' className="phone_val" placeholder="Number"  min="11"   required />
                                    </div>
                                </div>

                                <div className="col-md-12 col-xs-12 col-sm-12" style={{ width: "100% !important" }}>
                                    <label for="validationTooltip01" class="form-label label_here mb-0" >Message <span className='strick'>*</span> </label>

                                    <textarea name="massage" placeholder="Message" id='message' required></textarea>

                                </div>
                                <div className="col-md-12 col-xs-12 col-sm-12">
                                    <div className="center-holder">
                                        <button type="submit" className="contact-validate-btn submit_send" >Send Message</button>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>;
}
