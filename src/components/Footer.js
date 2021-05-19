import { LinkContainer } from 'react-router-bootstrap'
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
        <footer class="footer-section">
         <div class="container container-xs">
            <div class="row">
               <div class="footer-cols">

                  <div class="footer-widget">
                     <div class="footer-logo">
                        <a class=" m-0" href="#"><img alt ="logo"src={require('../static/img/Logo.png').default} /></a>
                     </div>
                     <div class="footer-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                        </p>
                     </div>
                     <div class="footer-email-info">
                        <span>Email Us :</span>
                        <p> info@loremipsum.com</p>
                     </div>
                  </div>


                  <div class="footer-widget">
                     <div class="footer-heading">
                        <h3>General Links</h3>
                     </div>
                     <ul class="list-unstyled">
                        <li><a href="#">Insurance </a></li>
                        <li><a href="#">Company </a></li>
                        <li><a href="#">Help</a></li>
                        <li><LinkContainer to='/about'><a href="#"> About Us</a></LinkContainer></li>
                     </ul>
                  </div>


                  <div class="footer-widget">
                     <div class="footer-heading">
                        <h3>Social Links</h3>
                     </div>
                     <ul class="list-unstyled">
                        <li><a href="#">Facebook </a></li>
                        <li><a href="#">Twitter </a></li>
                     </ul>
                  </div>


                  <div class="footer-widget">
                     <div class="app-buttons d-flex mt-0">
                        <button type="button" class="btn p-0"><img alt="google-play-store" src= {require('../static/img/playstore.png').default} /></button>
                        <button type="button" class="btn p-0"><img alt="app-store" src={require('../static/img/app-store.png').default} /></button>
                     </div>
                     <div class="footer-text copyright-content">
                        <p>Copyright © FlickIt {year}. All rights reserved.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
    </>
  )
}

export default Footer
