import React from 'react';
import '../App.css';
import '../style/Footer.css';
import Contact from './Contact.js';

function Footer() {
  return(
    <footer id="footer">
    <div id="footer-left">
      <p className="footer-list">Programmed and Designed by Anne Thorsteinson</p>
      <p><span>Copyright 2020</span></p>
    </div>
    <ul id="footer-grid">
      <Contact type="email-link"
               link="mailto: anne.thor@gmail.com?Subject=Let's Connect"
               isLink={false}
               rel={false}
               imageLocation="./images/contacts/email.png"
               imageDescription="email logo" />
      <Contact type="linkedin"
               link="https://www.linkedin.com/in/annethor/"
               isLink={true}
               rel={true}
               imageLocation="./images/contacts/LI-In-Bug.png"
               imageDescription="linkedin-logo"/>
      <Contact type="twitter-link"
               link="https://twitter.com/thor_anne"
               isLink={true}
               rel={true}
               imageLocation="./images/contacts/twitter.png"
               imageDescription="twitter logo" />
      <Contact type="profile=link"
               link="https://github.com/annethor"
               isLink={true}
               rel={true}
               imageLocation="./images/contacts/github.png"
               imageDescription="github-logo"/>
      <Contact type="fcc-link"
               link="https://www.freecodecamp.org/annethor"
               isLink={true}
               rel={true}
               imageLocation="./images/contacts/fcc.png"
               imageDescription="fcc-logo"/>
    </ul>
    </footer>
  );
}

export default Footer;
