import React from 'react';

import Layout from '../components/organisms/layout';
import AboutHyun from '../components/organisms/abouthyun';
import '../styles/global.css';

const About = () => {
  return (
    <Layout>
      <h1>Hello, I'm Hyun</h1>
      <AboutHyun />
    </Layout>
  );
};

export default About;