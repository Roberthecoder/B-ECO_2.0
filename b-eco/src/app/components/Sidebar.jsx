"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { mesasDirectivas } from '../data/historia';
import { INSTAGRAM_URL } from '../data/redes';
import "../styles/Sidebar.css";

function Sidebar({ yearSlug = "current" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [historiaOpen, setHistoriaOpen] = useState(false);
  const isArchive = yearSlug !== "current";
  const basePath = isArchive ? `/historia/${yearSlug}` : "/";

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const toggleHistoria = () => {
    setHistoriaOpen(!historiaOpen);
  };

  return (
        <div className='container'>
            <div className="leftSide">
                <img
                src={
                    "https://firebasestorage.googleapis.com/v0/b/b-eco-18c09.appspot.com/o/Assets%2FWhatsApp%20Image%202023-11-18%20at%2016.37.27.jpeg?alt=media&token=8009eb0c-74b2-4bfe-a228-be41c6e2483f"
                }
                width={120}
                height={60}
                alt="b-eco logo"
                className="b-eco_logo"
                />
                <img
                src={
                    "https://firebasestorage.googleapis.com/v0/b/b-eco-18c09.appspot.com/o/Assets%2FScreenshot%202023-11-22%20at%208.12.46%E2%80%AFa.m..png?alt=media&token=27d2e82f-9fa6-4d69-890f-0dd3dbf341e1"
                }
                width={160}
                alt="b-eco ai logo"
                className="b-eco_ai"
                ></img>
            </div>
            <div id="mySidenav" className={`sidenav ${isOpen ? 'open' : ''}`}>
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                <div>
                    <a href={`${basePath}#inicio`} className='titleHover'>
                        Inicio
                    </a>
                    <a href={`${basePath}#quienes-somos`} className='titleHover'>
                        Nosotros
                    </a>
                    <a href={`${basePath}#proyectos`} className='titleHover'>
                        Proyectos
                    </a>
                    <a href={`${basePath}#minijuegos`} className='titleHover' onClick={closeNav}>
                        Minijuegos
                    </a>
                    <a href={`${basePath}#siguenos`} className='titleHover'>
                        Síguenos
                    </a>
                    <a href={`${basePath}#contacto`} className='titleHover'>
                        Contacto
                    </a>
                    <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className='titleHover'>
                        Instagram
                    </a>

                    <div className="sidebar-dropdown">
                        <a onClick={toggleHistoria} className='titleHover dropdown-toggle'>
                            Historia {historiaOpen ? '▲' : '▼'}
                        </a>
                        {historiaOpen && (
                            <div className="sidebar-dropdown-menu">
                                <Link href="/historia" className='titleHover dropdown-item' onClick={closeNav}>
                                    Línea del tiempo
                                </Link>
                                {mesasDirectivas.map((m) => (
                                    <Link key={m.id} href={`/historia#mesa-${m.id}`} className='titleHover dropdown-item' onClick={closeNav}>
                                        {m.periodo}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div id="main" className={isOpen ? 'open-main' : ''}>
                <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={openNav}>&#9776;</span>
            </div>
        </div>
  );
}

export default Sidebar;

