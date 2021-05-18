import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import companyLogo from '../static/img/Logo.png';
import iconMenu from '../static/img/icon-menu.png';

const Menu = () => {
  return (
    <nav class="flickit-navbar navbar navbar-expand-lg">
    <div class="container">
          <LinkContainer to='/'>
                <a className="navbar-brand m-0" href="#"><img src={companyLogo} /></a>
              </LinkContainer>
       <button class="navbar-toggler p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          <img src={iconMenu} />
       </button>
       <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="navbar-nav mr-0 me-auto mb-2 mb-lg-0">
             <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Insurance</a>
             </li>
             <li class="nav-item">
                <a class="nav-link" href="#"> Company</a>
             </li>
             <li class="nav-item">
                <a class="nav-link" href="#"> Help</a>
             </li>
             <li class="nav-item">
                <a class="nav-link" href="#"> About Us</a>
             </li>
          </ul>

          <ul class="mb-0 pl-0 d-flex nav-right">
             <button type="button" class="p-0 btn btn-link">Sign in</button>
             <button type="button" class="btn-header btn btn-primary">Get a quote</button>
          </ul>
       </div>
    </div>
 </nav>
  )
}

export default Menu
