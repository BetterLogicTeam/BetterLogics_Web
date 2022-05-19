import React from 'react';

import './NFT_PlateformsMarket.css'
import ReactWhatsapp from 'react-whatsapp';


export default function NTF_Plateform_Market() {
    return <div>

        <div className="section-block">

            <div className="container">
                <div className="section-heading center-holder">
                    <h3>Our NFT Platforms</h3>
                    <div className="section-heading-line"></div>
                    <p>We Offer various NFT Platform services, they include</p>
                </div>

                <div className="row">

                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <div className="content1">
                            <a href="#" target="_blank">
                                <div className="content1-overlay"></div>
                                <img className="content1-image" src="nft-for-music.png" />
                                <div className="content1-details fadeIn-top">
                                    <h3>NFT for Music</h3> </div>
                            </a>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <div className="content1">
                            <a href="#" target="_blank">
                                <div className="content1-overlay"></div> <img className="content1-image" src="nft-for-art.png" />
                                <div className="content1-details fadeIn-top">
                                    <h3>NFT for Art</h3> </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <div className="content1">
                            <a href="#" target="_blank">
                                <div className="content1-overlay"></div> <img className="content1-image" src="nft-for-games.png" />
                                <div className="content1-details fadeIn-top">
                                    <h3>NFT for Games</h3> </div>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </div>




        {/* ------------------------------Our Expertise In NFT Marketplace Development------------------------ */}


        <div className="section-block section-block-grey">
            <div className="container">
                <div className="row">
                    <div className="section-heading text-center">
                        <h3>Our Expertise In NFT Marketplace Development</h3>
                        <div className="section-heading-line"></div>
                        <p> Better Logics offers meticulous services that will give you a clear idea about our NFT marketplace development services.</p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-justify mt-20">

                        <ul className="list">
                            <li>Our NFT Platform is invulnerable to all types of cyber-attacks.</li>
                            <li>Utilization of a wide range of blockchain technologies, such as Ethereum, <a href="https://www.BetterLogics.com/binance-smart-chain" target="_blank">Binance Smart Chain</a>, Polkadot, etc.</li>
                            <li>A stable amount of assurance is provided to the NFT marketplace.</li>
                            <li>Highly customizable and crafted with all the required specifications.</li>
                            <li>An optimized level of guidance and technical support is provided.</li>

                        </ul>
                        <p className="expertise">Our foremost priority is to make you the frontrunner in the NFT race by implementing our extensive beneficial features and technical expertise in the NFT platform.</p>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center mt-10">
                        <img className="rounded-border shadow-primary" data-src="" src="nft-dev-img-01.png" width="100%" />
                    </div>

                </div>
                <div className="mt-25 text-center btnwhatsandconntechhere">
                    <ReactWhatsapp number="+923330689368" message="Hi! I'm interested in one of your products at  Better Logics" className="whatsaapherebg mt-4" >
                        <a target="_blank" className="button-md dark-button two-btn">Connect With Whatsapp</a>
                    </ReactWhatsapp>
                    </div>
            </div>
        </div>




    </div>;
}
