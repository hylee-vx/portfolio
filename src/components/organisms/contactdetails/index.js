import React from 'react';

import Email from '../../atoms/email';
import Map from '../../atoms/map';
import SocialMediaLinks from '../../molecules/socialmedialinks';

const ContactDetails = () => {
  return (
    <div>
      <h2>You can find me here</h2>
      <Email />
      <SocialMediaLinks />
      <Map />
    </div>
  );
}

export default ContactDetails;