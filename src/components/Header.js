import React from 'react';
import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Listing from './Listing.js';
import Aboutus from './Aboutus.js';
import Contactus from './Contactus.js'

function Header() {
  return (
    <div className="header">
      <img style={{ width: 252, height: 75, top:-24.75, left:-560, position:"absolute"}} src={logo} alt="Logo"  />
     
      <ul>
         <li className="listing"><a href="#listing-section">Listing</a></li>
         <li className='aboutus'><a href="#about-section">About</a></li>
         <li className='contactus'><a href="#contact-section">Contact</a></li>
      </ul>

      <section id="listing-section">
    <Listing />
  </section>

<section id="about-section">
  <Aboutus />
</section>

<section id="contact-section">
  <Contactus />
</section>

      
      <form>
        <input type="text" placeholder="Search" />
        <button className="search-btn">
        <FontAwesomeIcon icon={faSearch} />
      </button>
      </form>
    </div>
  );
}

export default Header;
