import React from 'react';
import Navbarhere from './Home_page/Navbarhere/Navbarhere';
import { Homepage } from '../Components/Home_page/HomePage/Homepage';
import Service from '../Components/Home_page/OurService/Service';
import Workhere from './Home_page/Home_HowToWork/Workhere';
import Blockchain from './Home_page/Blockchain_Home/Blockchain';
import SliderWork from './Home_page/Sliderwork_Home/SliderWork';
import ContactUs from './Home_page/ContactUs_Home/ContactUs';
import Footerhere from './Home_page/Footer_Home/Footerhere';

export default function Home() {
  return <div>
     
    <Homepage/>
    <Service/>
    <Workhere/>
    <Blockchain/>
    <SliderWork/>
    {/* <ContactUs/> */}
  </div>;
}
