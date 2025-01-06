import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; 
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import About from './components/About';
import Client from './components/Client';
import Contact from './components/Contact';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Header from './components/Header';
import Info from './components/Info';
import Professional from './components/Professional';
import Service from './components/Service';
import Slider from './components/Slider';








function App() {

  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<>
        <Home />
        
        <Slider />
        <Feature />
        <About />      
                                     <Professional />
                                     <Service />
                                     <Client />
                                     <Contact />
                                     <Info />
                       
        </>} />
        <Route path="/about" element={ <><AboutUs/> <About/></>}/>
        <Route path="/services" element={ <><Services/> <Service/></>}/>
        <Route path="/contact" element={ <><ContactUs/> <Contact/></>}/>
      
      </Routes>
      <Footer />


    </Router>
    </>
  )
}

export default App
