import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Project from '@/components/Project/Project';
import Footer from '@/components/Footer/Footer';

const App = () => {
  return (
    <>
      <title>ss.</title>
      <Navbar></Navbar>
      <div className="flex flex-col items-center">
        <div className="w-[90%] flex flex-col items-center gap-24">
          <Hero></Hero>
          <About></About>
          <Project></Project>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
