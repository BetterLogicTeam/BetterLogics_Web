import React from 'react';
import './Homestyle.css'
import ReactWhatsapp from 'react-whatsapp';


export const Homepage = () => {
    return <div>
        <div className="swiper-slide banner-block">

        
            <div className="sec-overlay"></div>
            <div className="container overlay2">
                <div className="left-holder slider-content ">
                    <h1 className="text-center headinghere">Blockchain Development Company</h1>
                    <div className="row">
                        <div className="col-xs-12 col-md-12 col-sm-12">
                            <p className="animated fadeInDown text-center">We are in the business of developing world quality blockchain-based development services that are readily accessible and highly affordable. Get in touch with us and enrich your business with expertise.</p></div>
                    </div>
                    <div className="animated fadeInUp mt-30 text-center">
                        <a href="#contact" className="button-md dark-button js-scroll-trigger" >Talk To Our Experts</a></div>
                </div>
            </div>
        </div>


        <div className="section-block">
            <div className="container">
                <div className="section-heading center-holder">
                    <h2>Comprehensive Blockchain Development Company</h2>
                    <div className="section-heading-line"></div>
                    <p> Better Logics, as a leader in blockchain technology, has enriched clients around the world with innovative solutions to the challenges they face. Our services are just what the doctor ordered for businesses spanning a large scale of sectors. We provide highly tailored blockchain development solutions across numerous industries. Our decentralized and automated process has saved our clients milLions of dollars in operating costs and manual labor. Our strategically designed offerings such as ICO, Smart contract, smart wallets, Hyperledger, and other blockchain-based solutions can help you take the next step in your business growth. Explore a world of possibilities with our services designed to give you the platform you need to succeed. </p>
                    <p>Our clientele is highly diverse and boasts of everything from small startups to some of the largest conglomerates in the market space. Enabled by a team of in-house specialists including expert developers, marketing professionals, business analysts, SEO analysts, and more, we have the capability to take on any project and deliver a successful result.</p>
                </div>
                <div className="mt-25 text-center">
                <ReactWhatsapp number="+923330689368" message="Hi! I'm interested in one of your products at  Better Logics" className="whatsaapherebg   mt-4" >

                <a target="_blank" href="#" className="button-md dark-button two-btn">Connect With Whatsapp</a>

            </ReactWhatsapp>
                </div>
            </div>
        </div>




    </div>;
};
