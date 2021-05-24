import Header from '../components/Header'
import Meta from '../components/Meta'

const About = () => {
   // page content
   const pageTitle = 'About'
   const pageDescription = 'welcome to Flickit'

   return (
      <div>
         <Meta title={pageTitle} />
         <Header head={pageTitle} description={pageDescription} />
         <section class="about-banner">
   <div class="container">
      <div class="about-banner-row row d-flex align-items-center ">
         <div class="col-md-6">
            <div class="flickit-content">
               <div class="flickit-heading">Save<span> 50% </span>  on your life insurance policy. </div>
               <p>Real innovations and a positive customer experience are the heart of successful communication.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
               <button class="mt-60 btn-header btn btn-primary"> Contact us</button>
            </div>
         </div>
         <div class="col-md-6">
            <div class="flickit-image   ">
               <img alt="insurance" src={require('../static/img/abt-img.png').default} />
            </div>
         </div>
      </div>
   </div>
</section>
<section class="about-sec about-info-1 pt-120 pb-120   ">
   <div class="container container-xs ">
      <div class="flickit-row row g-0  d-flex align-items-center justify-content-center">
         <div class="col-lg-12 col-md-12">
            <div class="flickit-content text-center">
               <div class="flickit-heading">How We <span >Work </span> </div>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua
               </p>
            </div>
         </div>
         <div class="flickit-steps g-0 row mt-5">
            <div class="col-md-6 col-lg-6 col-xl-3">
               <div class="steps-info">
                  <img alt="insurance" src={require('../static/img/appoinment.png').default} />
                  <div class="flickit-content  ">
                     <h5>Make an Appointment</h5>
                     <p class="para mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                        tempus eleifend tortor, vel molestie orci feugiat sit amet.
                     </p>
                  </div>
               </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3">
               <div class="steps-info">
                  <img alt="insurance" src={require('../static/img/meeting.png').default} />
                  <div class="flickit-content  ">
                     <h5>Schedule Meeting</h5>
                     <p class="para mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                        tempus eleifend tortor, vel molestie orci feugiat sit amet.
                     </p>
                  </div>
               </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3">
               <div class="steps-info">
                  <img alt="insurance" src={require('../static/img/consulation.png').default} />
                  <div class="flickit-content ">
                     <h5>Meet With Agent</h5>
                     <p class="para mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                        tempus eleifend tortor, vel molestie orci feugiat sit amet.
                     </p>
                  </div>
               </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3">
               <div class="steps-info">
                  <img alt="insurance" src={require('../static/img/get-insurance.png').default} />
                  <div class="flickit-content ">
                     <h5>Get Your Insurance</h5>
                     <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                        tempus eleifend tortor, vel molestie orci feugiat sit amet.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
<section class="about-sec about-info-2  pb-200    ">
   <div class="container  ">
      <div class="flickit-row row g-0  align-items-center">
         <div class="col-lg-6 col-md-12">
            <div class="flickit-image"><img alt="insurance" src={require('../static/img/what-we-do.png').default} /></div>
         </div>
         <div class="col-lg-6 col-md-12">
            <div class="flickit-content">
               <div class="flickit-heading">Who    <span >We Are</span> </div>
               <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  tempus eleifend tortor, vel molestie orci feugiat sit amet.
               </p>
            </div>
            <ul class=" flickit-list  flickit-card-list list-unstyled">
               <li>Stay real. Always.</li>
               <li>Activate Listening</li>
               <li>We turn heads</li>
               <li>Better. Best. Wow!</li>
               <li>Brilliant minds</li>
            </ul>
         </div>
      </div>
   </div>
</section>
<section class="about-sec about-info-3  pb-120    ">
   <div class="container  ">
      <div class="flickit-row g-0 row  flex-row-reverse align-items-center">
         <div class="col-lg-6 col-md-12">
            <div class="flickit-image justify-content-end"><img alt="insurance" src={require('../static/img/vision-img.png').default} /></div>
         </div>
         <div class="col-lg-6 col-md-12">
            <div class="flickit-content">
               <div class="flickit-heading">We are Committed to Help Clients to   <span >Reach The Goals</span> </div>
            </div>
            <ul class=" flickit-list  flickit-card-list list-unstyled">
               <li>No Brokers, No Upselling</li>
               <li>Investment Planning</li>
               <li>Professional Advisor</li>
               <li>Fast Application</li>
               <li>Save Money</li>
               <li>Flexible Insurancer</li>
            </ul>
         </div>
      </div>
   </div>
</section>
<hr class="seperater">
</hr>
<section class="about-sec  flickit-insurance-services pt-120 pb-120     ">
   <div class="container  ">
      <div class="flickit-row row g-0  align-items-center">
         <div class="col-lg-12 col-md-12">
            <div class="flickit-content text-center">
               <div class="flickit-heading">Types of  <span >Services </span>We provided </div>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud
               </p>
            </div>
         </div>
         <div class="flickit-card row g-0  d-flex align-items-center justify-content-center ">
            <div class="col-md-12 col-sm-12 col-lg-4 col-xl-4 card custom-card" >
               <div class="card-icon">   <img alt="insurance" src={require('../static/img/abt-icon-1.png').default} /></div>
               <div class="card-body content ">
                  <h5>Aid insurance</h5>
                  <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                     tempus eleifend tortor, vel molestie orci feugiat sit amet.
                  </p>
               </div>
            </div>
            <div class="col-md-12 col-sm-12 col-lg-4 col-xl-4 card custom-card" >
               <div class="card-icon">   <img alt="insurance" src={require('../static/img/icon-2.png').default} /></div>
               <div class="card-body content ">
                  <h5>Private Health</h5>
                  <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                     tempus eleifend tortor, vel molestie orci feugiat sit amet.
                  </p>
               </div>
            </div>
            <div class="col-md-12 col-sm-12 col-lg-4 col-xl-4 card custom-card" >
               <div class="card-icon">   <img alt="insurance" src={require('../static/img/04.png').default} /></div>
               <div class="card-body content ">
                  <h5>Suplementary</h5>
                  <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                     tempus eleifend tortor, vel molestie orci feugiat sit amet.
                  </p>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
<section class="flickit-newsletter-sec about-sec pt-5 pb-5 full-width ">
   <div class="container">
      <div class="row  g-0 flickit-row text-center">
         <div class="col-md-12">
            <div class="flickit-find-agent">
               <div class="heading-sm">Find an insurance agent. <span>Call us any time</span></div>
               <h3>+ 1 212-121-9756</h3>
            </div>
         </div>
      </div>
   </div>
</section>
</div>
   )
}

export default About