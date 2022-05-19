import React from 'react';
import './Homestyle_nft.css'
import ReactWhatsapp from 'react-whatsapp';


export default function Home_NFT() {
    return <div>
        <div className="swiper-slideNFT banner-blockNFT " >
            <div className="sec-overlayNFT"></div>
            <div className="container">
                <div className="slider-content text-left ">
                    <br /><br /><br />

                    <div className="row">
                        <div className="col-xs-12 col-md-12 text-center">
                            <div className="animated fadeInDown banner_tit">
                                <h1>NFT Development Solution | Powerful Blockchain Platform</h1>
                            </div>
                            <p className="animated fadeInDown">The Non Fungible Token evolutes the digital world by attracting many industries. NFT platform benefits various industries towards the growth of their business in the blockchain market. </p>
                            <div className="animated fadeInUp mt-30">
                                <a href="#contact" className="button-md dark-button two-btn js-scroll-trigger">Talk to Our Experts</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* ---------------------------------BFT DEvelopment---------------------------------- */}


        <div className="section-block">
            <div className="container">

                <div className=" col-md-12 col-sm-12 col-xs-12">
                    <div className="section-heading text-center">
                        <h2>Our Innovation towards NFT Development </h2>
                        <div className="section-heading-line"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7 col-xs-12 col-sm-12 col-md-6">
                        <div className="mt-40 intro_cnt">
                            <p>Non Fungible Tokens are widely spread across the globe for their uniqueness from other crypto tokens and having the best value in the marketplace. The worth of developing NFT has benefitted milLions worldwide, making them wealthy in a short period. NFT has lured many audiences with high-end features initialized in it. </p>
                            <p>The selling of music albums on the NFT platform has stormed the internet in recent times and showed ways for implementing the Non Fungible Tokens in various industries. The market for NFT is blooming since 2020 and creates, sells, and exchanges multiple digital products like art, music, images, videos, and games that attract enormous traders, developers, and companies. </p>
                            <p>Non-Fungible Tokens hold their data/value in smart contracts and contribute greatly to make them unique (non-interchangeable) in nature. One of the greatest potentials of NFTs is that they have the ability to represent both tangible and intangible assets.  Better Logics’s all-round NFT token development services will ensure reliable, secured, and transparent platforms to create first-class NFTs.</p>
                        </div>
                        <div className="mt-25 mt-5 btnnfthere">
                        <ReactWhatsapp number="+923330689368" message="Hi! I'm interested in one of your products at  Better Logics" className="whatsaapherebg   mt-4" >

                        <a target="_blank" href="#" className="button-md dark-button two-btn">Connect With Whatsapp</a>

                    </ReactWhatsapp>
                        </div>
                    </div>
                    <div className=" col-lg-5 col-xs-12 col-sm-12 col-md-6 text-center innovation">
                        <div itemscope="" itemtype="https://schema.org/ImageObject">
                            <meta itemprop="name" content=" Better Logics" /> <img src="https://www.infiniteblocktech.com/img/nft/innovation_nft.png" className="img-responsive" alt="NFT Development" itemprop="contentUrl" />
                            <meta itemprop="description" content="NFT evolutes the digital world by attracting many industries. NFT platform benefits various industries towards the growth of their business in the blockchain market. Get it now" />
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* --------------------------------NFT Expolar---------------- */}

        <div className="section-block cta_wrapper">
                <div className="container">
                    <div className="section-heading center-holder">
                        <h2>Explore the Potential of NFT Development</h2> 
                    </div>
                    <div className="mt-25 text-center"> 
                        <a href="#contact" className="button-md dark-button two-btn js-scroll-trigger">Talk To Our Experts</a> 
                    </div>
                </div>
            </div>
    </div>;
}
