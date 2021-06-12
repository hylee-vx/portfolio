import React from 'react';
import Layout from '../components/organisms/layout';
import Typewriter from '../components/molecules/typewriter';
// import useTypewriter from '../hooks/usetypewriter';
import '../styles/global.css';
import './index.css';

export default function Home() {
  return (
    <Layout>
      <h1 className="name">Hyun Young Lee</h1>
      <h1 className="typed-text">
        <Typewriter />
      </h1>
    </Layout>
  );
};
