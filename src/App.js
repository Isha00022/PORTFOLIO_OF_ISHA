import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Certification from './components/Certification';
import Contact from './components/Contact';
import Experience from './components/Experience';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      {/* <Header /> */}
      <Banner />
      <Nav />
      <About />
      <Experience/>
      <Projects />
      <Certification />
      <Contact />
      <div className='h-[4000px]'></div>
    </div>
  );
};

export default App;
