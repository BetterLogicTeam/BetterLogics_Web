import React, { useRef } from 'react'
import './Home_ICO_Dev.css'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaArrowAltCircleUp} from 'react-icons/fa'

export default function Home_ICO_Develoment() {
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



    return (
        <div>

            <div className="swiper_slide_ICO" >
                <div className="sec-overlay"></div>
                <div className="container">
                    <div className="slider-content text-left">
                        <div className="row">
                            <div className="col-xs-12 col-md-7 col-sm-7">
                                <h1 className="animated fadeInDown">ICO Development Company</h1>
                                <p className="Icon_Home_Text">Unparalleled ICO development services from the seasoned industry experts. Customized solutions to launch your tokens successfully.</p>
                                <div className="animated fadeInUp mt-30">
                                    <a href="#contact" className="button-md dark-button two-btn js-scroll-trigger">Talk to Our Experts</a> </div>
                            </div>
                            <div className="col-xs-12 col-md-5 col-sm-5">
                                <div className="bann_fomr mt-4">
                                    <div className="contact-form-box">
                                        <h4>Talk To Our Experts</h4>
                                        <form id="banner_form" className="contact-form" ref={form} onSubmit={sendEmail}>
                                            <div className="row">

                                                <div className="col-xs-12 col-sm-6 col-md-6">
                                                    <input type="text" name="name" id="name" placeholder="Name" required="" /> </div>
                                                <div className="col-xs-12 col-sm-6 col-md-6">
                                                    <input name="email" id="email" placeholder="E-mail" type="email" /> </div>
                                                <div className="col-md-12 col-xs-12 col-sm-12">
                                                    <input name="subject" id='subject' placeholder="Subject" /> </div>
                                                <div className="col-xs-12 col-sm-6 col-md-6">
                                                    <input name="skype" id='skype' placeholder="Skype ID" /> </div>
                                                <div className="col-xs-12 col-sm-6 col-md-6">


                                                    <input type="hidden" className="country_code" />
                                                    <input type="number" name="number" id='number' className="phone_val" placeholder='Number' /> </div>
                                                <div className="col-md-12 col-xs-12 col-sm-12" style={{ width: "100% !important" }}>
                                                    <textarea name="massage" id='message' placeholder="Message"></textarea>
                                                </div>
                                                <div className="col-md-12 col-xs-12 col-sm-12">
                                                    <div className="center-holder">
                                                        <button className="form-btn submit_send" type="submit" data-mail="banner_form">Send Message</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="section-block">
                <div className="container">
                    <div className="section-heading center-holder">
                        <h2>ICO Development Service Company</h2>
                        <div className="section-heading-line"></div>
                        <p>ICO, abbreviated from Initial Coin Offering, is one of the profitable and preferred fundraising mechanisms in the cryptosphere. ICO development refers to the creation of crypto tokens that the users sell in exchange for other cryptos to raise substantial funds for their start-ups. </p>
                        <p>Our dedicated developers from Better Logics , strive to bring your vision to life by offering well planned, optimized, tailor-made solutions for your ICO development that fit the current business model and match your requirements. We make sure your ICO business is profitable and drive 100% positive outcomes.</p>
                    </div>
                    <div className="row mt-20">

                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="number-box services-txt121"><img src="code_2.png" className="ser-img" />
                                <div className="number-box-line"></div> <strong>ICO Development</strong>
                                <p className="services-txt121 text-dark">Build and design optimum models for ICO tokens with all the specifications and launch in the market within weeks.</p>
                            </div>
                        </div>


                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="number-box services-txt121"> <img src="marketing-2.png" className="ser-img" />
                                <div className="number-box-line"></div> <strong>ICO Marketing</strong>
                                <p className=" text-dark">Strategic ICO marketing from seasoned experts who will give you the competitive edge in the market.</p>
                            </div>
                        </div>


                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="number-box services-txt121"> <img src="community.png" className="ser-img" />
                                <div className="number-box-line"></div> <strong>Community Building</strong>
                                <p className="services-txt121 text-dark">Build and create independent and transparent communities across various categories, engineered by blockchain based solutions.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>







            {/* <section className="section-block-grey">
                <div className="container">
                    <div className="row">
                        <div className="center-holder section-heading">
                            <h3>Our Exclusive ICO Development Solutions</h3>
                            <div className="section-heading-line"></div>
                        </div>
                        <div className="pre-Token-sec sto-Token-sec">
                            <div className="row mt-50">
                                <div className="col-xs-6 col-sm-3 col-md-3">
                                    <div className="feature-box pre-feature-box newBoxhereh">
                                        <div><img className="services-icon" src="whitepaper.png" /></div>
                                        <h4>Creation of whitepaper/litepaper and design</h4> </div>
                                </div>
                                <div className="col-xs-6 col-sm-3 col-md-3">
                                    <div className="feature-box pre-feature-box newBoxhereh">
                                        <div><img className="services-icon" src="design.png" /></div>
                                        <h4>Design of landing page</h4> </div>
                                </div>
                                <div className="col-xs-6 col-sm-3 col-md-3">
                                    <div className="feature-box pre-feature-box newBoxhereh">
                                        <div><img className="services-icon" src="fundraising.png" /></div>
                                        <h4>ICO fundraising dashboard platform</h4> </div>
                                </div>
                                <div className="col-xs-6 col-sm-3 col-md-3">
                                    <div className="feature-box pre-feature-box newBoxhereh">
                                        <div><img className="services-icon" src="token12.png" /></div>
                                        <h4>Coin or token development process</h4> </div>
                                </div>
                                <div className="col-xs-6 col-sm-3 col-md-3">
                                    <div className="feature-box pre-feature-box newBoxhereh">
                                        <div><img className="services-icon" src="management.png" /></div>
                                        <h4>Bounty sector management</h4> </div>
                                </div>
                                <div className="col-xs-6 col-sm-3 col-md-3">
                                    <div className="feature-box pre-feature-box newBoxhereh">
                                        <div><img className="services-icon" src="pr-marketing.png" /></div>
                                        <h4>PR marketing</h4> </div>
                                </div>
                                <div className="col-xs-6 col-sm-3 col-md-3">
                                    <div className="feature-box pre-feature-box newBoxhereh">
                                        <div><img className="services-icon" src="cross-chain-marketing.png" /></div>
                                        <h4>Numerous cross-chain marketing campaigns</h4> </div>
                                </div>
                                <div className="col-xs-6 col-sm-3 col-md-3">
                                    <div className="feature-box pre-feature-box newBoxhereh">
                                        <div><img className="services-icon" src="marketing-2.png" /></div>
                                        <h4>Listing platform services</h4> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}








            <section className="section-block">
                <div className="container">
                    <div className="section-heading center-holder">
                        <h3>Workflow Of Our Top-Tier ICO Development Company</h3>
                        <div className="section-heading-line"></div>
                    </div>
                    <div className="mt-30">
                        <div className="process-flow123">
                            <div className="timeline-box123 left123">
                                <div className="content123">
                                    <h4>Stage1- Ideation</h4>
                                    <p>Our team of blockchain developers will go through the idea and validate the feasibility of the business.</p>
                                </div>
                            </div>
                            <div className="timeline-box123 right123">
                                <div className="content123">
                                    <h4>Stage2-Creation Of Whitepaper</h4>
                                    <p>The technical writers of our company will analyze the business platform and create a perfect whitepaper that consists of every detail and the vision of the client’s business.</p>
                                </div>
                            </div>
                            <div className="timeline-box123 left123">
                                <div className="content123">
                                    <h4>Stage3-Landing Page Design</h4>
                                    <p>We develop and design a personalized landing page to present the client’s business idea to a selected group of audience. The user interface of the page will be also created seamlessly to provide a simple interface for the clients.</p>
                                </div>
                            </div>
                            <div className="timeline-box123 right123">
                                <div className="content123">
                                    <h4>Stage4-Pre-ICO Marketing</h4>
                                    <p>Before providing ICO development to the client, we provide perfect pre-marketing solutions to the target audience. These marketing solutions are done in Telegram, Reddit, Twitter, LinkedIn, and much more.</p>
                                </div>
                            </div>
                            <div className="timeline-box123 left123">
                                <div className="content123">
                                    <h4>Stage5-Development Of Token</h4>
                                    <p>Our blockchain experts from the development team will develop tokens on the client’s desired standard. This token standard is dependent on the chosen blockchain network.</p>
                                </div>
                            </div>
                            <div className="timeline-box123 right123">
                                <div className="content123">
                                    <h4>Stage6-Wallet Integration</h4>
                                    <p>We provide a seamless digital wallet that is filled with the ability to process multi-crypto coins and tokens and provide support to the business platform. This digital wallet is highly secured and furnishes business platforms with a top-tier wallet infrastructure.</p>
                                </div>
                            </div>
                            <div className="timeline-box123 left123">
                                <div className="content123">
                                    <h4>Stage7-Post ICO Marketing</h4>
                                    <p>We use numerous post ICO marketing strategies to promote the business platform to a wide range of audiences. These marketing solutions include social media marketing, email marketing, SEO analysis, and much more.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>








            <div className="section-block-grey">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6">
                            <div className="pr-30-md">
                                <div className="section-heading text-left">
                                    <h2>Flourish in the Market by Making Use of an Ideal ICO Launching Platform</h2> </div>
                                <div className='line_non_fungible_center'>

                                    <div className="section-heading-line-left Line_Non_fungible"></div>
                                </div>
                                <div className="mt-20 text-content text-left">
                                    <p>ICOs have been growing so evidently in recent years that every investor in the cryptoverse either wants to run an ICO or take part in one. Chances are highly likely that you might be one of them. Launching an ICO might be a time-consuming, tedious process if you run a campaign on your own, all the way from scratch. It will also probably cost you a lot of money. To indulge yourself with a smooth, successful running ICO launch campaign, all you need is a reliable ICO launching platform. </p>
                                    <p>At Better Logics, we have the finest set of ICO developers with prodigious experience in the field, who offer all-inclusive services right from ICO token development, to ICO Marketing, Pre and Post Launch services etc. Our ICO launch services assure a solid base for your ICO and huge traction from potential investors around the world. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 text-center">
                            <div className="full-width mt-15-xs video-video-box imghereicon">
                                <img alt="img" src="planning.jpg" className="mb-10 rounded-border shadow-primary" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>






        </div>
    )
}
