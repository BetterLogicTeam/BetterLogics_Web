import React from 'react';
import './Faq_Non_Fungible.css'

export default function FAQ_Non_Fungible() {
  return <div>

  <div className="section-block faqSection " id="demo" style={{ padding: "40px 0px" }}>
            <div className="container">
                <div className="section-heading center-holder">
                    <h4>FAQ</h4>
                    <div className="section-heading-line"></div>
                </div>

                <div className="accordion container section-block" id="accordionExample">
                    <div className="accordion-item bcolorFAQ">
                        <h2 className="accordion-header" id="headingOne">
                            <a className="accordion-button AccourdionAtag" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <span>Why are non-fungible tokens a good investment?</span>

                            </a>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="panel-body text-left"> 


                              NFTs ensure authenticity, and they hold a stable value. The value of NFTs increases as the interest on the NFT increases. The NFT can be staked in the wallet and can be sold at any time. You will receive a royalty every time your NFT is resold. 
                            
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <a className="accordion-button AccourdionAtag collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <span>How to invest in non-fungible tokens? </span>

                            </a>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="panel-body text-left"> 

                              All you have to do is pick your favourite marketplace and pick your desired NFT and make purchases; that's it, you just invested in NFT.
                             
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <a className="accordion-button AccourdionAtag collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <span>How non-fungible tokens work?</span>

                            </a>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className="panel-body text-left">
                                NFTs are indivisible, unique which can be used for trading like buying, selling and staking for future uses.
                                </div>

                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
  
  </div>;
}
