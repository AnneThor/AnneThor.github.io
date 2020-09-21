import React from 'react';
import '../App.css';
import '../style/Contact.css';


function Contact(props) {
  return(

    <div className="contact-tile">
      <a href={props.link}
         target={ props.isLink ? "_blank" : "_top"}
         rel={props.rel ? "noopener noreferrer" : ""}>
        <img src={props.imageLocation}
             alt={props.imageDescription} />
      </a>
    </div>
  );
}

export default Contact;
