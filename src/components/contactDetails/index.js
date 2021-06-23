import React from 'react';
import IconLink from '../iconLink';
import useContactData from '../../hooks/usecontactdata';
import '../../utils/fontawesome';
import './styles.css';


const ContactDetails = () => {
  const { email, home } = useContactData();

  // const updateTime = () => {
  //   const currentTime = new Date().toLocaleTimeString(['en-UK'], { hour: '2-digit', minute: '2-digit' });

  //   // setInterval(updateTime, 1000);

  //   return `It is ${currentTime} here`;
  // };
  // // const updateTime = () => {
  // //   setInterval(currentDateTime, 1000);
  // // };
  // setInterval(updateTime, 1000);

  return (
    <div className="contact-details-container">
      <h2 className="contact-details-heading">and find me here</h2>
      {/* <IconLink src={`mailto: ${email}`} icon={'envelope'} title={'Email Hyun using your default mail program'} size={'2x'} />
      <p className="email-address">{email}</p> */}
      <img src={home.fluid.src} alt="Map of Hyun's location" className="map" />
      {/* <p>{updateTime()}</p> */}
    </div>
  );
};

export default ContactDetails;