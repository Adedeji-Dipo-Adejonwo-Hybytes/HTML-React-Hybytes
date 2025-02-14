import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes,Navigate, useLocation } from 'react-router-dom';
import '@/utils/i18n'; 
import { useTranslation } from 'react-i18next';
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
import { initGA, logPageView } from "./analytics";

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    logPageView(location.pathname); // Log when route changes
  }, [location]);

  return null; // No UI component needed
}



function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n.language]);

  useEffect(() => {
    initGA();
  }, []);

  return (
    <Router>
      <AnalyticsTracker />
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={`/${i18n.language}`} replace />} />
        <Route path={`/${i18n.language}`} element={
          <>
            <Home />
            <Slider />
            <Feature />
            <About />      
            <Professional />
            <Service />
            <Client />
            <Contact />
            <Info />
          </>
        } />
        <Route path={`/About/${i18n.language}`} element={
          <>
            <AboutUs/> 
            <About/>
          </>
        }/>
        <Route path={`/Services/${i18n.language}`} element={
          <>
            <Services/> 
            <Service/>
          </>
        }/>
        <Route path={`/Contact/${i18n.language}`} element={
          <>
            <ContactUs/> 
            <Contact/>
          </>
        }/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
