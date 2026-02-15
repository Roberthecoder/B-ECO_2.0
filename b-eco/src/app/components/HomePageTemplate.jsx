"use client";
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import HeaderCarousel from './HeaderCarousel';
import WhoAreWe from './WhoAreWe';
import Projects from './Projects';
import SnakeGam from './SnakeGam';
import FollowUs from './FollowUs';
import Contact from './Contact';
import Footer from './Footer';
import '../styles/Page.css';

export default function HomePageTemplate({ config, yearSlug = "current" }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 940);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return() => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main>
      {isMobile ? <Sidebar yearSlug={yearSlug} /> : <Navbar yearSlug={yearSlug} />}
      <div id="inicio"/>
      <HeaderCarousel images={config.headerCarouselImages}/>
      <div id="quienes-somos"/>
      <WhoAreWe content={config.whoAreWeContent}/>
      <div id="proyectos"/>
      <Projects projects={config.projectsData}/>
      <div id="ecoserpiente"/>
      {!isMobile && config.showSnakeGame && <SnakeGam/>}
      <div id="siguenos"/>
      <FollowUs cards={config.followUsCards}/>
      <div id="contacto"/>
      <Contact/>
      <div id="footer"/>
      <Footer/>
    </main>
  );
}
