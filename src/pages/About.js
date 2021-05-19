import Header from '../components/Header'
import Meta from '../components/Meta'

const About = () => {
  // page content
  const pageTitle = 'About'
  const pageDescription = 'welcome to Flickit'

  return (
    <div>
      <Meta title={pageTitle}/>
      <Header head={pageTitle} description={pageDescription} />
      <section class="about-banner">
       <div class="container">
      <div class="row d-flex align-items-center ">
         <div class="col-md-6">
         <div class="flickit-content">
               <div class="flickit-heading"><span>Our Company   </span>Has Been Working Very Faithfully </div>
               <p>Real innovations and a positive customer experience are the heart of successful communication.</p>
           
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

<section class="about-sec pb-200 pt-120   ">
   <div class="container container-xs ">
      <div class="flickit-row row  flex-row-reverse d-flex align-items-center ">
         <div class="col-lg-6 col-md-6">
         <div class="flickit-content">
                        <div class="flickit-heading">Why <span>Choose Us</span> 
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                        </p>
                        <ul class="flickit-list list-unstyled">
                           <li>Excellent Protection.</li>
                           <li>High Saving Potential</li>
                           <li>Maximum Time Savings</li>
                           <li>24/7 Support
</li>
                        
                        </ul>
                     </div>
            </div>
            <div class="col-lg-6 col-md-6">
           
                     <div class="flickit-image justify-content-start">
                        <img alt="illustration-2" src={require('../static/img/work.png').default} />
                        </div>     
            </div>
         </div>
         </div>
         </section>
         <section class="about-sec pb-200   ">
   <div class="container container-xs ">
      <div class="flickit-row row  d-flex align-items-center ">
         <div class="col-lg-6 col-md-6">
         <div class="flickit-content">
                        <div class="flickit-heading">Our  <span>History</span> 
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                        </p>
                        <ul class="flickit-list list-unstyled">
                           <li>Activate Listening.</li>
                           <li>Brilliant minds</li>
                           <li>Better. Best. Wow!</li>
                           <li>100% Satisfaction rate</li>
                        
                        </ul>
                     </div>
            </div>
            <div class="col-lg-6 col-md-6">
           
                     <div class="flickit-image justify-content-end">
                        <img alt="illustration-2" src={require('../static/img/our-vison.png').default} />
                        </div>     
            </div>
         </div>
         </div>
         </section>
         
         <hr class="seperater">
         </hr>

<section class="about-sec our-service pt-120 pb-200   ">
   <div class="container container-xs ">
      <div class="flickit-row row  d-flex align-items-center justify-content-center">
         <div class="col-lg-12 col-md-12">
            <div class="flickit-content text-center">
               <div class="flickit-heading">Our <span >Services  </span> </div>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..</p>
      <div class="flickit-list d-flex ">
               <div class="card custom-card" >
                            <div  class="card-icon">   <img alt="insurance" src={require('../static/img/abt-icon-1.png').default} /></div>
                            <div class="card-body content ml-3">
                                <h5>Aid insurance</h5>
                                <p class="para mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                                    tempus eleifend tortor, vel molestie orci feugiat sit amet.</p>
                            </div>
                        </div>
                        <div class="card custom-card" >
                            <div  class="card-icon">   <img alt="insurance" src={require('../static/img/icon-2.png').default} /></div>
                            <div class="card-body content ml-3">
                                <h5>Private Health</h5>
                                <p class="para mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                                    tempus eleifend tortor, vel molestie orci feugiat sit amet.</p>
                            </div>
                        </div>
                        <div class="card custom-card" >
                            <div  class="card-icon">   <img alt="insurance" src={require('../static/img/04.png').default} /></div>
                            <div class="card-body content ml-3">
                                <h5>Suplementary</h5>
                                <p class="para mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                                    tempus eleifend tortor, vel molestie orci feugiat sit amet.</p>
                            </div>
                        </div>
                        </div>
                      
            </div>
         </div>
       
      </div>
   </div>
</section>

<section class="about-sec testimonial full-width pt-120 pb-200   ">
   <div class="container-xs container  ">
      <div class="flickit-row row  d-flex align-items-center justify-content-center">
         <div class="col-md-12">
         <div class="flickit-content text-center">
         <div class="flickit-heading"> What <span>Our Members </span> Says  </div>
       
        </div>

         </div>
         <div class="col-md-12">
         <div class="testimonial-view">
         <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="testimonial-block">
                            <div class="row">
                            <div class="col-md-12">
                                    <div class="testimonial-block_user">
                                        <div class="testimonial_user_image">
                                        <img src={require('../static/img/user-img.jpg').default}  alt="User"/>
                                        </div>
                                       
                                            <h2 class="testimonial_user_name">Krishna</h2>
                                        
                                    </div>
                                    <div class="testimonial-block_content">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur eum, atque nemo sintatque nemo sintatque nemo sintatque nemo sint. Nostrum, reprehenderit, quod.</p>
                                    </div>
                                </div>
                             
                            </div>
                        </div>
                    </div>

        
                    <div class="carousel-item">
                        <div class="testimonial-block">
                            <div class="row">
                            <div class="col-md-12">
                                    <div class="testimonial-block_user">
                                        <div class="testimonial_user_image">
                                        <img src={require('../static/img/user-img.jpg').default}  alt="User"/>
                                        </div>
                                       
                                            <h2 class="testimonial_user_name">Krishna</h2>
                                        
                                    </div>
                                    <div class="testimonial-block_content">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur eum, atque nemo sintatque nemo sintatque nemo sintatque nemo sint. Nostrum, reprehenderit, quod.</p>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>

                    <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>  
       
                    </div>
      
    </div>
    
    </div>
    
    </div>
    </div>
    </div>
    </section>


    </div>
  )
}

export default About