import Header from '../components/Header'
import Meta from '../components/Meta'
import ComingSoon from '../components/ComingSoon'
import phoneMockup from '../static/img/phone-mockup.png';
import phoneTablet from '../static/img/phone-mockup-tablet.png';
import phoneMobScreen from '../static/img/phone-mob-screen.png';


const Home = () => {
  // page content
  const pageTitle = 'Home'
  const pageDescription = 'Flickit'

  return (
    <>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />

   
         <section class="banner">
            <div class="container">
               <div class="row banner-row d-flex align-items-center">
                  <div class="col-md-6">
                     <div class="banner-text">
                        <h1 class="m-0"><span>We’re Making Insurance</span> Surprisingly
                           Painless
                        </h1>
                        <p class="mb-0">Modern Insurance with Smart technology</p>
                        <ComingSoon styleClass="mt-60 btn-header btn btn-primary" />   
                     </div>
                  </div>
                  <div class="col-md-6 banner-col-right">
                     <div class="banner-right-image">
                        {/* <img alt="phone" class="phone-img" src={frame} /> */}
                         <img  alt="icon" class="phone-img" src={require('../static/img/phone-mockup.png').default} />
                        <img alt="phone-img-tablet" class="phone-img-tablet" src={phoneTablet} />
                        <img alt="phone-img-mob" class="phone-img-mob" src={phoneMobScreen} />

                         <div  class="banner-service-card top-left">
                           <img  alt="icon" src={require('../static/img/icon-smartphone.png').default} />
                           <h5>Smart Insurance</h5>
                        </div>
                        <div class="banner-service-card bottom-left">
                           <img  alt="money-icon" src={require('../static/img/icon-fast-money.png').default} />
                           <h5>Fast Claims</h5>
                        </div>
                        <div class="banner-service-card center-right">
                           <img alt="cash-icon" src={require('../static/img/icon-cash.png').default} />
                           <h5>Instant Quote</h5>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section class="flickit-services service-1  pb-200">
            <div class=" container-xs container">
               <div class="row g-0 flickit-row d-flex align-items-center">
               <div class="col-md-6">
                     <div class="flickit-image">
                        <img alt="illustration-1" src={require('../static/img/illustration-1.png').default} />
                     </div>
                  </div>
                  <div class="col-md-6">
                     <div class="flickit-content">
                        <div class="flickit-heading"><span>Paperless </span>Experience</div>
                        <p>Seriously fast, Hassle free and flexible insurance with just a few
                           clicks
                        </p>
                        <ul class="flickit-list list-unstyled">
                           <li>100% Paperless experience</li>
                           <li>Quote in Few Seconds</li>
                           <li>No more lengthy applications and paperwork</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section class="flickit-services service-2   pb-200">
            <div class="container container-xs">
               <div class="flickit-row g-0 row flex-row-reverse d-flex align-items-center">
                  <div class="col-md-6 col-lg-5 col-xl-5">
                     <div class="flickit-image">
                        <img alt="illustration-2" src={require('../static/img/illustration-2.png').default} />
                     </div>
                  </div>
                  <div class="col-md-6 col-lg-7 col-xl-7">
                     <div class="flickit-content">
                        <div class="flickit-heading"><span>Purchase a cover </span> with a few
                           clicks, flexible
                           payments, <span>Manage your policies</span> seamlessly
                        </div>
                        <p>Purchasing an insurance policy was never this easy. Get your policy
                           in your inbox
                           within a few minutes and manage your policies seamlessly
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section class="flickit-services service-3  pb-220">
            <div class="container  container-xs">
               <div class="flickit-row g-0 row d-flex align-items-center">
                  <div class="col-md-6">
                     <div class="flickit-image">
                        <img  alt="illustration-3" src={require('../static/img/illustration-3.png').default} />
                     </div>
                  </div>
                  <div class="col-md-6">
                     <div class="flickit-content">
                        <div class="flickit-heading">File Claims <span>Instantly</span>, Fast
                           claims experience
                        </div>
                        <p>Lightning fast claims process. Our AI algorithms are always ready to
                           process claims
                           speedily and promptly
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section class="flickit-services service-4  pb-135">
            <div class="container  container-xs">
               <div class="flickit-row g-0 row flex-row-reverse d-flex align-items-center">
                  <div class="col-md-6 col-lg-6 col-xl-6">
                     <div class="flickit-image">
                        <img alt="illustration-4"  src={require('../static/img/illustration-4.png').default} />
                     </div>
                  </div>
                  <div class="col-md-6 col-lg-6 col-xl-6">
                     <div class="flickit-content">
                        <div class="flickit-heading"><span>Pay bills easily.</span> View proof
                           of insurance
                           anywhere
                        </div>
                        <p>With our automated channels, you can make secure payments effortlessly and view your POI anywhere and at any time.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <hr class="seperater">
         </hr>
         <section class="flickit-total-trans-sec">
            <div class="container  container-xs">
               <div class=" row d-flex align-items-center
                  justify-content-center">
                  <div class="col-md-12">
                     <div class="flickit-content centered">
                        <div class="flickit-heading"><span>Total transparency,</span> know
                           exactly what you’re
                           paying for
                        </div>
                        <p>We are building trust through complete transparency across board. Insurance that is
                           customer-centric. Honest, fair, timely and transparent policies
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section class="flickit-list-sec full-width">
            <div class="container-fluid  container-xs">
               <div class="row g-0 flickit-row">
                  <div class="trans-list-col-left col-md-6">
                     <div class="flickit-service-list  left-area">
                        <div class="heading-sm">With <span>Traditional Insurers</span>, you get</div>
                        <ul class="flickit-list list-unstyled">
                           <li>Lengthy applications</li>
                           <li>Long and Lengthy claims Processing</li>
                           <li>Opaque</li>
                           <li>Ut enim sit amet consequat</li>

                        </ul>
                     </div>
                  </div>
                  <div class="trans-list-col-right col-md-6 d-flex ">
                     <div class="flickit-service-list   right-area">
                        <div class="heading-sm">With Flickit, you get</div>
                        <ul class="flickit-list list-unstyled">
                           <li>100% Digital</li>
                           <li>Get insured in minutes</li>
                           <li>Simple and transparent</li>
                           <li>Super-Fast Claim Experience</li>
                           <li>24/7 Support</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section class="flickit-happy-sec">
            <div class="container container-xs">
               <div class="row g-0 flickit-row d-flex align-items-center justify-content-center">
                  <div class="col-md-12">
                     <div class="flickit-image">
                        <img alt="illustration-5" src={require('../static/img/illustration-5.png').default} />
                     </div>
                  </div>
                  <div class="col-md-12">
                     <div class="flickit-content">
                        <div class="flickit-heading">We’re <span>Happy</span> when you’re <span>Happy</span>
                        </div>
                        <p>Our core focus is on delivering a delightful user experience. We
                           guarantee quality
                           customer service on all our products and ensure seamless user
                           experience every step
                           of your customer journey
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section class="flickit-newsletter-sec full-width">
            <div class="container-fluid container-xs">
               <div class="row  flickit-row">
                  <div class="col-md-12">
                     <div class="heading-sm">Insurance Designed for <span>Today’s Ecosystems</span>.
                        We’re
                        Building Insurance fit for the future
                     </div>
                     <form class="">
                        <div class="custom-input-group input-group mb-3">
                           <input type="text" class="form-control" placeholder="Your email address"
                              aria-label="Your email address" aria-describedby="basic-addon2" />
                           <div class="input-group-append">
                              <button class="btn btn-primary" type="button">Join us</button>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </section>
         <section class="flickit-download-app-sec ">
            <div class="container container-xs">
               <div class="row g-0 flickit-row d-flex align-items-center justify-content-center">
               <div class="col-md-6 col-lg-5 col-xl-6">
                     <div class="flickit-app-img">
                        <img alt="phone" class="flickit-img" src={require('../static/img/phone-mockup.png').default } />
                        <img alt="phone-tablet"  class="phone-img-tablet" src={require('../static/img/phone-mockup-tablet.png').default } />
                        <img alt="phone-mob"  class="phone-img-mob" src={require('../static/img/phone-mob-screen.png').default } />

                     </div>
                  </div>
                  <div class="col-md-6 col-lg-7 col-xl-6">
                     <div class="flickit-content">
                        <div class="heading-sm">Download our Latest App Now for <span>New Experience</span></div>
                        <p class="mb-0">Lorem ipsum dolor sit amet, consect</p>
                        <div class="app-buttons">
                           <button type="button" class="btn p-0"><img alt="google-play-store" src={require('../static/img/playstore.png').default} /></button>
                           <button type="button" class="btn p-0"><img alt="app-store" src={require('../static/img/app-store.png').default} /></button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    </>
  )
}

export default Home