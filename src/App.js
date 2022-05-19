import logo from './logo.svg';
import './App.css';
import Navbarhere from './Components/Home_page/Navbarhere/Navbarhere';


import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import ContactUs from './Components/Home_page/ContactUs_Home/ContactUs';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Home_page/Footer_Home/Footerhere'
import BlockChain_Development from './Components/Main_BlockChain/BlockChain_Development';
import Palkadot_Deve from './Components/Main_BlockChain/Palkadot_Deve';
import Blockchain_consultin from './Components/Main_BlockChain/Blockchain_consultin';
import Blockchain_IOT from './Components/Main_BlockChain/Blockchain_IOT';
import Crowdfunding_Platform from './Components/Main_BlockChain/Crowdfunding_Platform';
import {FaArrowAltCircleUp} from 'react-icons/fa'


import Home from './Components/Home';
import NFT from './Components/NFT_Main/NFT';
import NFT_Marketplace from './Components/NFT_Main/NFT_Marketplace'
import NFT_MusicToken from './Components/NFT_Main/NFT_MusicToken';
import NFT_Gamming from './Components/NFT_Main/NFT_Gamming';
import NFT_Art_Plateform from './Components/NFT_Main/NFT_Art_Plateform';
import Non_Fungible_NFT from './Components/NFT_Main/Non_Fungible_NFT';
import OpenSea from './Components/NFT_Main/OpenSea';
import Semi_Fungible from './Components/NFT_Main/Semi_Fungible';




import DEFI_Development from './Components/DEFI_Main/DEFI_Development'
import DEFI_Safe_Moon_Clone from './Components/DEFI_Main/DEFI_Safe_Moon_Clone'
import Safe_Mars_Clone from './Components/DEFI_Main/Safe_Mars_Clone';
import DEFi_Pancake from './Components/DEFI_Main/DEFi_Pancake';
import UniSwap_Clone from './Components/DEFI_Main/UniSwap_Clone';


import ICO_Development from './Components/Main_ICO/ICO_Development';
import ICO_Consulting_Service from './Components/Main_ICO/ICO_Consulting_Service';



import IDO_Development from './Components/Main_IDO/IDO_Development';
import IDO_LaunchPad from './Components/Main_IDO/IDO_LaunchPad';
import MLM_Forsage_Script from './Components/Main_MLM_Clone/MLM_Forsage_Script';
import MLM_Double_Way from './Components/Main_MLM_Clone/MLM_Double_Way';
import MLM_Tron_Smart_Contract from './Components/Main_MLM_Clone/MLM_Tron_Smart_Contract';
import MLM_Million_Menoy from './Components/Main_MLM_Clone/MLM_Million_Menoy';
import MLM_Lions_Share from './Components/Main_MLM_Clone/MLM_Lions_Share';




import Cryptocurrency_Development from './Components/Main_Cryptocurrency/Cryptocurrency_Development';
import Wallet_Develoment from './Components/Main_Cryptocurrency/Wallet_Develoment';
import Crypto_Wallet_Trust from './Components/Main_Cryptocurrency/Crypto_Wallet_Trust';
import Cryptocurrency_MLM from './Components/Main_Cryptocurrency/Cryptocurrency_MLM';
import Cryptocurrency_ATM_Software from './Components/Main_Cryptocurrency/Cryptocurrency_ATM_Software';
import Cryptocurrency_Creation_Service from './Components/Main_Cryptocurrency/Cryptocurrency_Creation_Service';
import MetaMask_Clone from './Components/Main_Cryptocurrency/MetaMask_Clone';
import Binance_Smart_Chain_Development from './Components/Main_Cryptocurrency/Binance_Smart_Chain_Development';
import Cryptocurrenc_Exchange_Software from './Components/Main_Exchange/Cryptocurrenc_Exchange_Software';
import P2p_Exchange from './Components/Main_Exchange/P2p_Exchange';
import White_Label from './Components/Main_Exchange/White_Label';
import Legal_Crypto_Exchange from './Components/Main_Exchange/Legal_Crypto_Exchange';
import Exchange_Marketing from './Components/Main_Exchange/Exchange_Marketing';
import Decentralized_Exchange from './Components/Main_Exchange/Decentralized_Exchange';
import Hybrid_crypto_Exchange from './Components/Main_Exchange/Hybrid_crypto_Exchange';
import About_US_MAin from './Components/Main_Contact_Us/About_US_MAin';
import Main_Privacy_Policy from './Components/Main_Contact_Us/Main_Privacy_Policy';
import Main_Terms_and_Conditions from './Components/Main_Contact_Us/Main_Terms_and_Conditions';
import Main_Contact_Us_here from './Components/Main_Contact_Us/Main_Contact_Us_here';







function App() {
  const scrolltop=()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
  return (
    <div className="App">
    <Router>
    <ToastContainer />

 

    <Navbarhere></Navbarhere>

    <Route exact path="/" component={Home}></Route>
    <Route exact path="/NFT" component={NFT}></Route>
    <Route exact path="/NFT_Marketplace" component={NFT_Marketplace}></Route>
    <Route exact path="/NFT_MusicToken" component={NFT_MusicToken}></Route>
    <Route exact path="/NFT_Gamming" component={NFT_Gamming}></Route>
    <Route exact path="/NFT_Art" component={NFT_Art_Plateform}></Route>
    <Route exact path="/NFT_Non_Fungible" component={Non_Fungible_NFT}></Route>
    <Route exact path="/NFT_OpenSea" component={OpenSea}></Route>
    <Route exact path="/NFT_Semi_Fungible" component={Semi_Fungible}></Route>

    <Route exact path="/BlockChain_Development" component={BlockChain_Development}></Route>
    <Route exact path="/Palkadot_Deve" component={Palkadot_Deve}></Route>
    <Route exact path="/Blockchain_consultin" component={Blockchain_consultin}></Route>
    <Route exact path="/Blockchain_IOT" component={Blockchain_IOT}></Route>
    <Route exact path="/Crowdfunding_Platform" component={Crowdfunding_Platform}></Route>

    <Route exact path="/DEFI_Development" component={DEFI_Development}></Route>
    <Route exact path="/DEFI_Safe_Moon" component={DEFI_Safe_Moon_Clone}></Route>
    <Route exact path="/DEFI_Safe_Mars_Clone" component={Safe_Mars_Clone}></Route>
    <Route exact path="/DEFI_PanCake_Clone" component={DEFi_Pancake}></Route>
    <Route exact path="/DEFI_UniSwap_Clone" component={UniSwap_Clone}></Route>

  <Route exact path="/ICO_Development" component={ICO_Development}></Route>
  <Route exact path="/ICO_Consulting" component={ICO_Consulting_Service}></Route>

  <Route exact path="/IDO_Development" component={IDO_Development}></Route>
  <Route exact path="/IDO_LaunchPad" component={IDO_LaunchPad}></Route>

  <Route exact path="/MLM_Forsage_Script" component={MLM_Forsage_Script}></Route>
  <Route exact path="/MLM_Double_Way" component={MLM_Double_Way}></Route>
  <Route exact path="/MLM_Tron_Smart_Contract" component={MLM_Tron_Smart_Contract}></Route>
  <Route exact path="/MLM_Million_Menoy_Clone" component={MLM_Million_Menoy}></Route>
  <Route exact path="/MLM_Lions_Share_Clone" component={MLM_Lions_Share}></Route>

  <Route exact path="/Crpto_Dev" component={Cryptocurrency_Development}></Route>
  <Route exact path="/Wallet_Deve" component={Wallet_Develoment}></Route>
  <Route exact path="/Crpto_Wallet_Trust" component={Crypto_Wallet_Trust}></Route>
  <Route exact path="/Cryptocurrency_MLM" component={Cryptocurrency_MLM}></Route>

  <Route exact path="/Cryptocurrency_ATM_Software" component={Cryptocurrency_ATM_Software}></Route>
  <Route exact path="/Cryptocurrency_Creation_Service" component={Cryptocurrency_Creation_Service}></Route>
  <Route exact path="/MetaMask_Clone" component={MetaMask_Clone}></Route>
  <Route exact path="/Binance_Smart_Chain_Development" component={Binance_Smart_Chain_Development}></Route>

  <Route exact path="/Cryptocurrenc_Exchange_Software" component={Cryptocurrenc_Exchange_Software}></Route>
  <Route exact path="/P2p_Exchange" component={P2p_Exchange}></Route>
  <Route exact path="/White_Label" component={White_Label}></Route>
  <Route exact path="/Legal_Crypto_Exchange" component={Legal_Crypto_Exchange}></Route>
  <Route exact path="/Exchange_Marketing" component={Exchange_Marketing}></Route>
  <Route exact path="/Decentralized_Exchange" component={Decentralized_Exchange}></Route>
  <Route exact path="/Hybrid_crypto_Exchange" component={Hybrid_crypto_Exchange}></Route>


  <Route exact path="/About_US_MAin" component={About_US_MAin}></Route>
  <Route exact path="/Main_Privacy_Policy" component={Main_Privacy_Policy}></Route>
  <Route exact path="/Main_Terms_and_Conditions" component={Main_Terms_and_Conditions}></Route>
  <Route exact path="/Main_Contact_Us_here" component={Main_Contact_Us_here}></Route>



  <ContactUs></ContactUs>
  <Footer></Footer>
 
</Router>

<div class=" arrow_here elementor-element elementor-element-44dd243 elementor-widget__width-auto elementor-fixed elementor-widget elementor-widget-elementskit-back-to-top" data-id="44dd243" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;fixed&quot;}" data-widget_type="elementskit-back-to-top.default" onClick={()=>scrolltop()}  >
        <div class="elementor-widget-container">
          <div class="ekit-wid-con"> <div class="ekit-back-to-top-container ekit-btt icon_only" data-settings="{&quot;offset_top&quot;:0,&quot;show_after&quot;:null,&quot;show_scroll&quot;:&quot;&quot;,&quot;style&quot;:&quot;icon_only&quot;,&quot;fg&quot;:null,&quot;bg&quot;:null}">
            <span class="ekit-btt__button "> <FaArrowAltCircleUp className='icon_here' /></span> </div> </div> </div>
      </div>

    
     

    </div>
  );
}

export default App;
