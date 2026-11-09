"use client";
import { useState, useEffect } from 'react';
import Menu from './Menu';
import Accesos from './Accesos';
import { mesasDirectivas } from '../data/historia';
import HeaderCarousel from './HeaderCarousel';
import WhoAreWe from './WhoAreWe';
import Projects from './Projects';
import Minijuegos from './Minijuegos';
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
      <Menu yearSlug={yearSlug} />
      <div id="inicio"/>
      <HeaderCarousel images={config.headerCarouselImages}/>
      {yearSlug === "current" && <Accesos/>}
      <div id="quienes-somos"/>
      <WhoAreWe content={config.whoAreWeContent} mesas={yearSlug === "current" ? mesasDirectivas.filter((m) => m.fotoMesa) : null}/>
      <div id="proyectos"/>
      <Projects projects={config.projectsData}/>
      <div id="ecoserpiente"/>
      <div id="minijuegos"/>
      <Minijuegos isMobile={isMobile} mostrarSerpiente={config.showSnakeGame}/>
      <div id="siguenos"/>
      <FollowUs cards={config.followUsCards}/>
      <div id="contacto"/>
      <Contact/>
      <div id="footer"/>
      <Footer/>
    </main>
  );
}
