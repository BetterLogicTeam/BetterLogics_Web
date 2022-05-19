import React from 'react'
import './Contact_us.css'
import ReactWhatsapp from 'react-whatsapp';


export default function Contac_Us() {
    return (
        <div>


            <div className="Contac_Us121">
                <div className="container inner_contachhh ">
                    <div className="divher_tectx">
                    <h1>Contact</h1>
                    <ul>
                        <li><a href="./">Home</a>
                        </li><li><a href="contact-us">Contact</a></li>

                    </ul>
                        </div>
                    
                </div>
            </div>







            <div className="section-block">
                <div className="container">
                    <div className="col-xs-12 col-md-12 col-sm-12">
                        <div className="contact-info-box">
                            <div className="row">
                                <div className="col-xs-12 col-md-4 col-sm-12">
                                    <div className="contact-info-section text-center">
                                        <div className="row">
                                            <div className="center-holder col-md-2 col-sm-2 col-xs-4 "><i className="fa fa-phone"></i></div>
                                            <div className="col-md-12 col-sm-12 col-xs-12 mt-2">
                                                <h4>Call Us</h4>
                                               <a href="tel: +923330689368 " className='phone_number'><p>+923330689368</p></a>
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-md-4 col-sm-12 ">
                                    <div className="contact-info-section  text-center">
                                        <div className="row">
                                            <div className="center-holder col-md-2 col-sm-2 col-xs-4"><i className="fa fa-envelope-open"></i></div>
                                            <div className="col-md-12 col-sm-12 col-xs-12 mt-2">
                                                <h4>Message</h4>
                                                <p >
                                                    <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=betterlogicslhr@gmail.com">info@BetterLogics.org</a>


                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-xs-12 col-md-4 col-sm-12">
                                    <div className="contact-info-section  text-center">
                                        <div className="row">
                                            <div className="center-holder col-md-2 col-sm-2 col-xs-4">                 <i className="fab fa-whatsapp"></i></div>
                                            <div className="col-md-12 col-sm-12 col-xs-12 mt-2">

                                                <ReactWhatsapp number="+923330689368" message="Hi! I'm interested in one of your products at  Better Logics" className="bgherefooter" >
                                                    <h4>Whatsapp</h4>
                                                    <p>
                                                        <p>+923330689368</p>


                                                    </p>

                                                </ReactWhatsapp>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></div>





        </div>
    )
}
