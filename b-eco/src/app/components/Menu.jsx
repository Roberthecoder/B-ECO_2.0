"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { INSTAGRAM_URL } from '../data/redes';
import '../styles/Menu.css';

const LOGO =
  'https://firebasestorage.googleapis.com/v0/b/b-eco-18c09.appspot.com/o/Assets%2FWhatsApp%20Image%202023-11-18%20at%2016.37.27.jpeg?alt=media&token=8009eb0c-74b2-4bfe-a228-be41c6e2483f';
const LOGO_TEXTO =
  'https://firebasestorage.googleapis.com/v0/b/b-eco-18c09.appspot.com/o/Assets%2FScreenshot%202023-11-22%20at%208.12.46%E2%80%AFa.m..png?alt=media&token=27d2e82f-9fa6-4d69-890f-0dd3dbf341e1';

// Menú siempre visible: en compu va a la derecha del logo;
// en celular es una fila de botones que se desliza de lado.
export default function Menu({ yearSlug = 'current' }) {
  const pathname = usePathname() || '/';
  const base = yearSlug !== 'current' ? `/historia/${yearSlug}` : '/';

  const enlaces = [
    { texto: 'Inicio', href: `${base}#inicio`, activo: pathname === '/' },
    { texto: 'Nosotros', href: '/nosotros', activo: pathname.startsWith('/nosotros') },
    { texto: 'Proyectos', href: `${base}#proyectos` },
    { texto: 'Minijuegos', href: '/#minijuegos', destacado: true },
    { texto: 'Contacto', href: `${base}#contacto` },
  ];

  return (
    <>
      <header className="menu">
        <div className="menu-fila">
          <Link href="/" className="menu-logos" aria-label="B-Eco, inicio">
            <img src={LOGO} alt="" className="menu-logo" />
            <img src={LOGO_TEXTO} alt="B-ECO" className="menu-logo-texto" />
          </Link>
          <nav className="menu-enlaces" aria-label="Secciones">
            {enlaces.map((e) => (
              <a
                key={e.texto}
                href={e.href}
                className={`menu-enlace ${e.activo ? 'activo' : ''} ${e.destacado ? 'destacado' : ''}`}
              >
                {e.texto}
              </a>
            ))}
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="menu-enlace menu-instagram">
              Instagram
            </a>
          </nav>
        </div>
      </header>
      <div className="menu-espacio" aria-hidden="true" />
    </>
  );
}
