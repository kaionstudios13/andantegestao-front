import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Actions from '../components/Actions';
import Articles from '../components/Articles';
import Highlights from '../components/Highlights';
import Universe from '../components/Universe';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Actions />
      <Articles />
      <Highlights />
      <Universe />
      <Contact />
    </>
  );
};

export default Home;