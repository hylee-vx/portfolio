import React from 'react';
import IconLink from '../../atoms/iconlink';
import SocialMediaLinks from '../../molecules/socialmedialinks';
import useContactData from '../../../hooks/usecontactdata';
import '../../../utils/fontawesome';
import './styles.css';


const ContactDetails = () => {
  const { email, home } = useContactData();
  return (
    <div className="contact-details-container">
      <h2>and find me here</h2>
      <IconLink src={`mailto: ${email}`} icon={'envelope'} title={'Email Hyun using your default mail program'} size={'2x'} />
      <p className="email-address">{email}</p>
      <img src={home.fluid.src} alt="Map of Hyun's location" className="map" />
    </div>
  );
};

export default ContactDetails;