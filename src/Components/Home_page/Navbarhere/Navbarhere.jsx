import React from 'react';
import './Navbarstyle.css'
import { GrMenu } from 'react-icons/gr'
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'


export default function Navbarhere() {




  return <div>

    <Navbar collapseOnSelect expand="xl" className="navbgher12">


      <Container className='mt-3'>

        <Link to="/" className='TextdecorationNFT145'>
          <a class="navbar-brand" href="#">
            <div className='First_Col'>
              <img src='BlLOGO.png' width="80px" className='me-2' />
              <div className='seond_col'>
                <span className="name_first">BETTER</span>  <br />
                <small className="name_second me-auto">LOGICS </small>

              </div>
            </div>

          </a>

        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bnt_nav_color' />

        <Navbar.Collapse id="responsive-navbar-nav" className='nav_link_resp'>
          <Nav className="ms-auto textNavher_white">

            <NavDropdown className='navtexthere' style={{ color: 'red' }} title={<span className='Nav_text_link' >NFT</span>} id="collasible-nav-dropdown">
              <Link to="/NFT" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1">NFT Development Service</NavDropdown.Item>
              </Link>

              <Link to="/NFT_Marketplace" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1">NFT MarketPlace Developmen</NavDropdown.Item>
              </Link>
              <Link to="/NFT_MusicToken" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1"> NFT Music tokenization Development   </NavDropdown.Item>
              </Link>
              <Link to="/NFT_Gamming" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1"> NFT Gamming Platform Development   </NavDropdown.Item>
              </Link>

              <Link to="/NFT_Art" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1"> NFT Art Platform Development  </NavDropdown.Item>
              </Link>
              <Link to="/NFT_Non_Fungible" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1"> NOn Fungible Token  </NavDropdown.Item>
              </Link>
              <Link to="/NFT_OpenSea" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1"> Opensea Clone  </NavDropdown.Item>
              </Link>
              <Link to="/NFT_Semi_Fungible" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1"> Semi Fungible Token Development </NavDropdown.Item>
              </Link>

            </NavDropdown>

            <NavDropdown className='navtexthere' title={<span className='Nav_text_link' >DEFI</span>} id="collasible-nav-dropdown">

              <Link to="/DEFI_Development" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1"> Decentralized Finance (Defi) Development </NavDropdown.Item>
              </Link>
              {/*<Link to="/DEFI_Marketing" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" > DEFI Marketing Service </NavDropdown.Item>
</Link>*/}
              <Link to="/DEFI_Safe_Moon" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" > Safemoon Clone </NavDropdown.Item>
              </Link>
              <Link to="/DEFI_Safe_Mars_Clone" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" > SafeMars Clone </NavDropdown.Item>
              </Link>
              <Link to="/DEFI_PanCake_Clone" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" > PancakeSwap Clone </NavDropdown.Item>
              </Link>
              <Link to="/DEFI_UniSwap_Clone" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" > Uniswap Clone </NavDropdown.Item>
              </Link>
            </NavDropdown>


            <NavDropdown className='navtexthere' title={<span className='Nav_text_link' >ICO</span>} id="collasible-nav-dropdown">
              <Link to="/ICO_Development" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" >ICO Development </NavDropdown.Item>
              </Link>
              <Link to="/ICO_Consulting" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" >ICO Consulting Services</NavDropdown.Item>
              </Link>

            </NavDropdown>



            <NavDropdown className='navtexthere' title={<span className='Nav_text_link' >IDO</span>} id="collasible-nav-dropdown">
              <Link to="/IDO_Development" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" >IDO Development</NavDropdown.Item>
              </Link>
              <Link to="/IDO_LaunchPad" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" >IDO Launchpad Development</NavDropdown.Item>
              </Link>

            </NavDropdown>



            <NavDropdown className='navtexthere' title={<span className='Nav_text_link' >MLM CLONE</span>} id="collasible-nav-dropdown">
              <Link to="/MLM_Forsage_Script" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" >Forsage Clone</NavDropdown.Item>
              </Link>
              <Link to="/MLM_Double_Way" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" > Doubleway MLM Clone</NavDropdown.Item>
              </Link>
              <Link to="/MLM_Tron_Smart_Contract" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" >Smart Contract MLM </NavDropdown.Item>
              </Link>
              <Link to="/MLM_Million_Menoy_Clone" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" >Million Money Clone </NavDropdown.Item>
              </Link>
              <Link to="/MLM_Lions_Share_Clone" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" >LionsShare Clone</NavDropdown.Item>
              </Link>

            </NavDropdown>



            <NavDropdown className='navtexthere' title={<span className='Nav_text_link' >CRYPTOCURRENCY</span>} id="collasible-nav-dropdown">
              <Link to="/Crpto_Dev" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" >Cryptocurrency Development </NavDropdown.Item>
              </Link>

              <Link to="/Wallet_Deve" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" >Wallet Development</NavDropdown.Item>
              </Link>
              <Link to="/Crpto_Wallet_Trust" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" >Crypto Wallet Trust Wallet</NavDropdown.Item>
              </Link>

              <Link to="/Cryptocurrency_MLM" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" > Cryptocurrency MLM Software</NavDropdown.Item>
              </Link>
              <Link to="/Cryptocurrency_ATM_Software" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" > Cryptocurrency ATM Software</NavDropdown.Item>
              </Link>
              <Link to="/Cryptocurrency_Creation_Service" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" >  Cryptocurrency Creation Service</NavDropdown.Item>
              </Link>
              <Link to="/MetaMask_Clone" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" >MetaMask Clone </NavDropdown.Item>
              </Link>
              <Link to="/Binance_Smart_Chain_Development" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" > Binance Smart Chain Development </NavDropdown.Item>
              </Link>


            </NavDropdown>


            <NavDropdown className='navtexthere' title={<span className='Nav_text_link' >EXCHANGE</span>} id="collasible-nav-dropdown">


              <Link to="/Cryptocurrenc_Exchange_Software" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" >Cryptocurrency Exchange Software</NavDropdown.Item>
              </Link>
              <Link to="/P2p_Exchange" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" >P2P PCryptocurrency Exchange</NavDropdown.Item>
              </Link>
              <Link to="/White_Label" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" >White Label Cryptocurrency Exchange </NavDropdown.Item>
              </Link>
              <Link to="/Legal_Crypto_Exchange" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" >Legal Cryptocurrency Exchange</NavDropdown.Item>
              </Link>
              <Link to="/Exchange_Marketing" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" >Cryptocurrency Exchange Marketing</NavDropdown.Item>
              </Link>
              <Link to="/Decentralized_Exchange" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" >Decentralized Exchange Development</NavDropdown.Item>
              </Link>
              <Link to="/Hybrid_crypto_Exchange" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" >Hybrid crypto Exchange Software</NavDropdown.Item>
              </Link>



            </NavDropdown>




            <NavDropdown className='navtexthere' title={<span className='Nav_text_link' >BLOCKCHAIN</span>} id="collasible-nav-dropdown">
              <Link to="/BlockChain_Development" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" >Blockchain Development</NavDropdown.Item>
              </Link>
              <Link to="/Palkadot_Deve" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" >Polkadot Development Service</NavDropdown.Item>
              </Link>
              <Link to="/Blockchain_consultin" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" >Blockchain consulting</NavDropdown.Item>
              </Link>
              <Link to="/Blockchain_IOT" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" >Blockchain IoT Development</NavDropdown.Item>
              </Link>


            </NavDropdown>


            <NavDropdown className='navtexthere' title={<span className='Nav_text_link' >CONTACT US</span>} id="collasible-nav-dropdown">
              <Link to="/About_US_MAin" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" >About Us </NavDropdown.Item>
              </Link>
              <Link to="/Main_Privacy_Policy" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" >Privacy Policy</NavDropdown.Item>
              </Link>
              <Link to="/Main_Terms_and_Conditions" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" >Terms and Conditions</NavDropdown.Item>
              </Link>
              <Link to="/Main_Contact_Us_here" className='TextdecorationNFT145'>
                <NavDropdown.Item href="#action/3.1" >Contact Us</NavDropdown.Item>
              </Link>



            </NavDropdown>






          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>



  </div>;
}
