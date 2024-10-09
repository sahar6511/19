import React from 'react';
import Contact from '../Contact/Contact';
import OtherLinks from '../OtherLinks/OtherLinks';
import Services from '../Services/Services';
import CopyRight from '../CopyRight/CopyRight';
import '../../styles/main.scss'

const Footer = () => {
  return (
    <div className='footer' > 
      <footer> 
<div className='footer-contact'>

<Contact></Contact>
</div>
<div className='footer-services'>

<Services></Services>
</div>
<div className='footer-otherlinks'>

<OtherLinks></OtherLinks>
</div>
        <div className='footer-info'>
          <h2>هتل آریا</h2>
          <p>Download Hotelier – Premium Version, build a professional website for your hotel business and grab the attention of new visitors upon your site’s launch.</p>
        </div>
      </footer>

      
      <div className='copyright'>
         <CopyRight ></CopyRight>
      </div>
      
</div>
  )


}

export default Footer
