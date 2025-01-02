import { useState } from 'react'
import './assets/css/bootstrap.css';
import './assets/css/styles.css';
import './assets/css/responsive.css';
import './assets/css/font-awesome.min.css';
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



import './App.css'

function App() {

  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<><Home />
                                     <About />
                                     <Client />
                                     <Contact />
                                     <Feature />
                                     <Info />
                                     <Professional />
                                     <Service />
                                     <Slider />
                       
        </>} />
        <Route path="/about" element={ <><AboutUs/> <About/></>}/>
        <Route path="/services" element={ <><Services/> <Service/></>}/>
        <Route path="/contact" element={ <><ContactUs/> <Contact/></>}/>
      <Footer />
      </Routes>


    </Router>
    </>
  )
}

export default App
