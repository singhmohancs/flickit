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
    
      <section class="flickit-happy-sec">
            <div class="container container-xs">
               <div class="row flickit-row d-flex align-items-center justify-content-center">
                  <div class="col-md-12">
                     <div class="flickit-content">
                        <div class="flickit-heading">About Us</div>
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


    </div>
  )
}

export default About