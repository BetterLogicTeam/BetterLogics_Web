import React, { useEffect } from 'react';
import './FAQ_MarketPlace.css'
import $ from 'jquery'

export default function FAQ_Marketplace() {




    return <div>


        


        <section class="faq_sec common_spacing">
            <div class="container">
                <h3 class="small_h1 section-title underline text-center font-wei text-white">FAQ</h3>
                <div className="section-heading-line"></div>
                <div class="row mt-5">
                    <div class="col-md-12 col-lg-12 col-sm-8 col-xs-12 col-md-offset-2">
                        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div class="accordion-item panel panel-default">
                                <div class="accordion-header panel-heading" role="tab" id="headingFive">
                                    <h4 class="panel-title">
                                        <a type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" class="collapsed accordion-button AccourdionAtag collapsed">
                                            <span>1</span>
                                            How do I create an NFT marketplace?
                                        </a>
                                    </h4>

                                </div>
                                <div id="collapseFive" class="panel-collapse collapse  accordion-collapse" aria-labelledby="headingFive" data-bs-parent="#accordion">
                                    <div class="panel-body accordion-body">
                                        <p className='Faq_text'>
                                        The listed below are the most comprehensive steps to create an NFT marketplace
                                    <br />
                                    <ul className="list2 Faq_text">
                                        <li>Build a user interface for the marketplace</li>
                                        <li>Choose the compatible blockchain</li>
                                        <li>Multi-integral wallet selection </li>
                                        <li>Targeting the right audiences</li>
                                        <li>Identifying operational sectors</li>
                                        <li>Define listing and categories</li>
                                        <li>Select the base tokens</li>
                                        <li>Program the required features</li>
                                        <li>Testing and launching in the mainnet</li>
                                    </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>



                            <div class="accordion-item panel panel-default">
                                <div class="accordion-header panel-heading" role="tab" id="headingFoure">
                                    <h4 class="panel-title">
                                        <a type="button" data-bs-toggle="collapse" data-bs-target="#collapseFoure" aria-expanded="false" aria-controls="collapseFoure" class="collapsed accordion-button AccourdionAtag collapsed">
                                            <span>2</span>
                                            What are the features of the NFT marketplace?
                                        </a>
                                    </h4>

                                </div>
                                <div id="collapseFoure" class="panel-collapse collapse  accordion-collapse" aria-labelledby="headingFoure" data-bs-parent="#accordion">
                                    <div class="panel-body accordion-body">
                                        <p className='Faq_text'>
                                        
                                        These are the most important features of an NFT marketplace that help you succeed
                                    <br />
                                    <ul className="list2 Faq_text">
                                        <li>Storefront</li>
                                        <li>Optimized Token Search</li>
                                        <li>Filters</li>
                                        <li>List Creation</li>
                                        <li>Listing Status</li>
                                        <li>Bidding Option</li>
                                        <li>Crypto Wallet</li>
                                        <li>Ratings</li>
                                    </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item panel panel-default">
                                <div class="accordion-header panel-heading" role="tab" id="headingThree">
                                    <h4 class="panel-title">
                                        <a type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" class="collapsed accordion-button AccourdionAtag collapsed">
                                            <span>3</span>
                                            How much does it cost to build an NFT marketplace?
                                        </a>
                                    </h4>

                                </div>
                                <div id="collapseThree" class="panel-collapse collapse  accordion-collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
                                    <div class="panel-body accordion-body">
                                        <p className='Faq_text '><a href="#" className='AccourdionAtag' target="_blank">Non-fungible tokens</a>, also widely known as NFTs, have taken over the digital world in a flash. With its arrival being just at the third quarter of 2021, the market cap of NFTs has experienced an enormous spike of around 1785% </p>
                                    </div>
                                </div>
                            </div>


                            <div class="accordion-item panel panel-default">
                                <div class="accordion-header panel-heading" role="tab" id="headingTwo">
                                    <h4 class="panel-title">
                                        <a type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" class="collapsed accordion-button AccourdionAtag collapsed">
                                            <span>4</span>
                                          Which is an NFT marketplace?
                                        </a>
                                    </h4>

                                </div>
                                <div id="collapseTwo" class="panel-collapse collapse  accordion-collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                                    <div class="panel-body accordion-body">
                                        <p className='Faq_text'>
                                        OpenSea is the most commonly used NFT marketplace. It is based in New York, founded in the year 2017. On this NFT platform, users can purchase and sell blockchain-dependent collectibles, art, music, domain names, trading cards, and virtual worlds, and much more. 
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div class="accordion-item panel panel-default">
                                <div class="accordion-header panel-heading" role="tab" id="headingOne">
                                    <h4 class="panel-title">
                                        <a type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" class="collapsed accordion-button AccourdionAtag collapsed">
                                            <span>5</span>
                                            What is an NFT Marketplace?
                                        </a>
                                    </h4>

                                </div>
                                <div id="collapseOne" class="panel-collapse collapse  accordion-collapse" aria-labelledby="headingOne" data-bs-parent="#accordion">
                                    <div class="panel-body accordion-body">
                                        <p className='Faq_text'>An NFT marketplace is a unique platform that is designed to trade
                                    non-fungible tokens. NFT marketplaces are developed on the power of blockchain networks,
                                    enabling marketplaces to securely store all transaction information and data in the digital ledger.
                                    Blockchain networks secure and prevent any type of cyber attacks on the platform. Non-fungible tokens
                                    are reaching astonishing heights, thus, the demand for NFT marketplaces is increasing. There are several
                                    types of NFT marketplaces that are introduced to the digital market, such as open type, exclusive type,
                                    and open protocol-based marketplaces. All these development services are specifically done by the NFT
                                    marketplace development company for the future generation to make business dreams reach great heights. </p>
                                    </div>
                                </div>
                            </div>



                            
                        </div>
                    </div>
                </div>
            </div>
        </section>









    </div>;
}
