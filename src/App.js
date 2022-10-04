import React from 'react'
import './index.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Brand from './components/Brand'
import Timeline from './components/Timeline'
import Expertise from './components/Expertise'
import ContactUs from './components/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Brand />
      <Timeline />
      <Expertise />
      <ContactUs />
    </div>
    );
  }
  
  export default App;
  