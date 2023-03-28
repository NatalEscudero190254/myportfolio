
import './App.css';
import HeaderSection from './components/HeaderSection/HeaderSection';
import AboutSection from './components/AboutSection/AboutSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import SkillsSection from './components/SkillsSection/SkillsSection';
import ContactSection from './components/ContactSection/ContactSection';
import {Parallax , ParallaxLayer, } from "@react-spring/parallax"
import { useEffect } from 'react';
import logo from "./assets/logo1.png"
import Footer from './components/Footer/Footer';






function App() {

  useEffect(() => {
    document.title= "Natal portfolio"
    document.favIcon = {logo}
  },[]);
 
  return (
    <div className="App">
      <Parallax  pages={3}>
        
        <ParallaxLayer
        speed={1}
        factor={1}
        style={{
            backgroundColor: "#000000" ,  
          }}
        >
          <HeaderSection />
        </ParallaxLayer>

        <ParallaxLayer offset={0.9}
        factor={1}
        speed={0.5}
        
        >
          <ProjectsSection />
        </ParallaxLayer>

        <ParallaxLayer offset={1.5}
        factor={1}
        speed={2}
        style={{
          backgroundColor:"black"
        }}
        >
          <AboutSection />
        </ParallaxLayer>
        
        <ParallaxLayer offset={1.9}
        factor={1}
        speed={1}
        
        >
          <SkillsSection />
        </ParallaxLayer>
       
        <ParallaxLayer offset={2.6}
        factor={0.7}
        style={{
          background:"black"
        }}
        >
            <Footer/>
          
        </ParallaxLayer>
        
      </Parallax>
      
      
      {/* <main >
        <section className='no-parrallax'>
          <HeaderSection/>
        </section>
        <section className='parrallax'>
          <AboutSection/>
          </section>
        <section className='no-parrallax'>
          <ProjectsSection/>
        </section>
        <section className='parrallax'>
          <SkillsSection/>
        </section>
        <section className='no-parrallax'>
          <ContactSection/>
        </section>

      </main> */}
    </div>
  );
}

export default App;
