import React from "react";
import Link from "next/link";

// Styles
import "../styles/Navbar.css";

const Navbar = ({ yearSlug = "current" }) => {
  const isArchive = yearSlug !== "current";
  const basePath = isArchive ? `/historia/${yearSlug}` : "";

  return (
    <div className="container">
      <div className="leftSide">
        <Link href="/">
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/b-eco-18c09.appspot.com/o/Assets%2FWhatsApp%20Image%202023-11-18%20at%2016.37.27.jpeg?alt=media&token=8009eb0c-74b2-4bfe-a228-be41c6e2483f"
            }
            alt="b-eco_logo"
            className="b-eco_logo"
          />
        </Link>
        <Link href="/">
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/b-eco-18c09.appspot.com/o/Assets%2FScreenshot%202023-11-22%20at%208.12.46%E2%80%AFa.m..png?alt=media&token=27d2e82f-9fa6-4d69-890f-0dd3dbf341e1"
            }
            alt="b-eco ai logo"
            className="b-eco_ai"
          />
        </Link>
      </div>
      <div className="rightSide">
          <a href={`${basePath}#inicio`} className="block">
            Inicio
          </a>
          <a href={`${basePath}#quienes-somos`} className="block">
            Nosotros
          </a>
          <a href={`${basePath}#proyectos`} className="block">
            Proyectos
          </a>
          <a href={`${basePath}#ecoserpiente`} className="block">
            EcoSerpiente
          </a>
          <a href={`${basePath}#siguenos`} className="block">
            Síguenos
          </a>
          <a href={`${basePath}#contacto`} className="block">
            Contacto
          </a>

          <div className="dropdown">
            <span className="block dropdown-toggle">
              Historia ▾
            </span>
            <div className="dropdown-menu">
              <Link href="/historia/2023-2025" className="dropdown-item">
                2023-2025
              </Link>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
