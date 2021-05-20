import { LinkContainer } from 'react-router-bootstrap'

import companyLogo from '../static/img/Flickit.png';
import iconMenu from '../static/img/icon-menu.png';
import ComingSoon from './ComingSoon';

const Menu = () => {
  return (
    <nav class="flickit-navbar navbar navbar-expand-lg">
    <div class="container">
          <LinkContainer to='/'>
                <a className="navbar-brand m-0" href="#"><img src={companyLogo} /></a>
              </LinkContainer>
       <button class="navbar-toggler p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon">  <img alt="icon-toogle" src={iconMenu} /></span>
        
       </button>
       <div class="navbar-collapse collapse " id="navbarNavAltMarkup">
          <ul class="navbar-nav mr-0 me-auto mb-2 mb-lg-0">
             <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Insurance</a>
             </li>
             <li class="nav-item">
                <a class="nav-link" href="#"> Company</a>
             </li>
             <li class="nav-item">
                <a class="nav-link" href="#"> Help</a>
             </li>
             <li class="nav-item">
             <LinkContainer to='/about' className="nav-link"><a class="nav-link" href="#"> About Us</a></LinkContainer>
             </li>
          </ul>

          <ul class="mb-0 ps-0 d-flex nav-right">
             <button type="button" class="p-0 btn btn-link">Sign in</button>
             <ComingSoon styleClass="btn-header btn btn-primary" />
          </ul>
       </div>
    </div>
 </nav>
  )
}

export default Menu
