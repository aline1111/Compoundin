import React from 'react';
import box from './box.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileAlt, faArrowsTurnRight } from '@fortawesome/free-solid-svg-icons';


function Box() {
  return (
    
    <div className="box">
      <img src={box} alt="box"  />
     <h1 className='title'> Homes Across KSA </h1>
     <button className='signup'>Sign Up</button>
     <button className='login'>Log in</button>
     <p className='name'> <FontAwesomeIcon icon={ faArrowsTurnRight } /> {' '}ALL IN FZ LLCMobile PO Box: 416654</p>
     <a className='phone' href='tel:+966546832320'> <FontAwesomeIcon icon={faMobileAlt} /> {' '} +966 54 683 2320
    </a>
     <a className="email" href="mailto:compoundin@gmail.com">
  <FontAwesomeIcon icon={faEnvelope} />{' '} compoundin@gmail.com
    </a>
    </div>
  );
}

export default Box;
