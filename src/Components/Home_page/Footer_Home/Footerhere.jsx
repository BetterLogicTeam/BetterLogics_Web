import React from 'react';
import './Footerstyle.css'
import ReactWhatsapp from 'react-whatsapp';


export default function Footerhere() {
  return <div>


    <footer>
      <div className="container">
        <div className="footer-top row">
          <div className="col-md-6 maindivffoterhere" >
            {/* <ul className="inline-list ">

              <li><a rel="nofollow" target="_blank" href="https://www.copyscape.com/"><img alt="logo" data-src="copyscape-banner-white-110x36.png" className="foot-logo" src="copyscape-banner-white-110x36.png" /></a></li>
              <li><a rel="nofollow" target="_blank" href="//www.dmca.com/Protection/Status.aspx?ID=8910988c-beec-40ac-b5ea-31846dd474e1" title="DMCA.com Protection Status" className="dmca-badge"> <img data-src="https://images.dmca.com/Badges/_dmca_premi_badge_1.png?ID=8910988c-beec-40ac-b5ea-31846dd474e1" className="" alt="DMCA.com Protection Status" src="_dmca_premi_badge_1.png" /></a></li>
              <li><a rel="nofollow" target="_blank" href="https://ssl.comodo.com/"><img alt="logo" data-src="img/footer/comodo_secure_seal_76x26_transp.png" className="foot-logo" src="comodo_secure_seal_76x26_transp.png" /></a></li>
            </ul> */}
            
          </div>

          <div className="col-lg-6">
            <ul className="new_links">
              <ReactWhatsapp number="+923330689368" message="Hi! I'm interested in one of your products at  Better Logics" className="bgherefooter" >
                <li>
                  <i className="fab fa-whatsapp"></i></li>
              </ReactWhatsapp>
            <li><a href="https://www.linkedin.com/in/better-logics-team-94354b237/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
              <li><a href="https://www.facebook.com/betterlogics" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
            

            </ul>
            </div>
          
        </div>
        <div className="footer-bar text-center">
          <p><span className="primary-color"><a href="#" className='footer_link_name'> Better Logics</a></span> © 2022. All Rights Reserved.</p>

        </div>
      </div>
    </footer>


  </div>;
}
