import * as React from 'react';
import './css/Splash.css';
import Logo from './assets/pageLogo.png';

function Splash(){
  return (
    <React.Fragment>
      <div className='splash_container'>
        <img className='splash_image'
            src={Logo}
            alt="Logo"/>
      </div>
    </React.Fragment>
  );
}

export default Splash;