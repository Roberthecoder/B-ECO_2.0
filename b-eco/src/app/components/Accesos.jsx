import Link from 'next/link';
import { INSTAGRAM_URL } from '../data/redes';
import '../styles/Accesos.css';

// Accesos rápidos justo debajo del carrusel
export default function Accesos() {
  return (
    <nav className="accesos" aria-label="Accesos rápidos">
      <Link href="/nosotros" className="acceso acceso-historia">
        <span className="acceso-icono" aria-hidden="true">📖</span>
        <span className="acceso-titulo">Nuestra historia</span>
        <span className="acceso-texto">Todas nuestras acciones, mesa por mesa</span>
      </Link>
      <a href="#minijuegos" className="acceso acceso-juegos">
        <span className="acceso-icono" aria-hidden="true">🎮</span>
        <span className="acceso-titulo">Minijuegos</span>
        <span className="acceso-texto">Aprende jugando y supera tu récord</span>
      </a>
      <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="acceso acceso-instagram">
        <span className="acceso-icono" aria-hidden="true">📸</span>
        <span className="acceso-titulo">Instagram</span>
        <span className="acceso-texto">Síguenos y entérate de todo</span>
      </a>
    </nav>
  );
}
