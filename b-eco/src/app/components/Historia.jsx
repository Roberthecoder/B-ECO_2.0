"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { mesasDirectivas } from '../data/historia';
import '../styles/Page.css';
import '../styles/Historia.css';

export default function Historia() {
  const [isMobile, setIsMobile] = useState(false);
  const [fotoAbierta, setFotoAbierta] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 940);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!fotoAbierta) return;
    const cerrar = (e) => e.key === 'Escape' && setFotoAbierta(null);
    window.addEventListener('keydown', cerrar);
    return () => window.removeEventListener('keydown', cerrar);
  }, [fotoAbierta]);

  return (
    <main>
      {isMobile ? <Sidebar /> : <Navbar />}

      <header className="historia-hero">
        <h1>Nuestra historia</h1>
        <p>
          El registro vivo de B-Eco: cada mesa directiva, lo que construyó y las personas que lo hicieron posible.
        </p>
        <nav className="historia-indice" aria-label="Mesas directivas">
          {mesasDirectivas.map((m) => (
            <a key={m.id} href={`#mesa-${m.id}`}>{m.periodo}</a>
          ))}
        </nav>
      </header>

      <ol className="linea-tiempo">
        {mesasDirectivas.map((m) => (
          <li key={m.id} id={`mesa-${m.id}`} className="mesa">
            <span className="mesa-punto" aria-hidden="true" />
            <article className="mesa-tarjeta">
              <div className="mesa-encabezado">
                <span className="mesa-periodo">{m.periodo}</span>
                {m.etiqueta && <span className="mesa-etiqueta">{m.etiqueta}</span>}
              </div>
              <h2>Presidencia: {m.presidencia}</h2>

              {m.mesa?.length > 0 && (
                <ul className="mesa-cargos">
                  {m.mesa.map((p) => (
                    <li key={p.cargo + p.nombre}><strong>{p.cargo}:</strong> {p.nombre}</li>
                  ))}
                </ul>
              )}

              {m.resumen?.map((parrafo, i) => (
                <p key={i} className="mesa-resumen">{parrafo}</p>
              ))}

              {m.fotos?.length > 0 && (
                <div className="mesa-fotos">
                  {m.fotos.map((foto, i) => (
                    <button
                      key={foto}
                      type="button"
                      className="mesa-foto"
                      onClick={() => setFotoAbierta(foto)}
                      aria-label={`Ver foto ${i + 1} de la mesa ${m.periodo}`}
                    >
                      <img src={foto} alt={`Foto ${i + 1} de B-Eco, ${m.periodo}`} loading="lazy" />
                    </button>
                  ))}
                </div>
              )}

              {m.proyectos?.length > 0 && (
                <>
                  <h3>Proyectos</h3>
                  <ul className="mesa-proyectos">
                    {m.proyectos.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </>
              )}

              {m.logros?.length > 0 && (
                <>
                  <h3>Logros y reconocimientos</h3>
                  <ul className="mesa-logros">
                    {m.logros.map((l) => (
                      <li key={l.texto}>
                        <a href={l.enlace} target="_blank" rel="noreferrer">
                          {l.imagen && <img src={l.imagen} alt="" loading="lazy" />}
                          <span>{l.texto}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {m.pagina && (
                <Link href={m.pagina} className="mesa-enlace">
                  Ver la página de esta mesa →
                </Link>
              )}
            </article>
          </li>
        ))}
      </ol>

      {fotoAbierta && (
        <div className="foto-visor" role="dialog" aria-modal="true" onClick={() => setFotoAbierta(null)}>
          <button type="button" className="foto-cerrar" aria-label="Cerrar">×</button>
          <img src={fotoAbierta} alt="Foto ampliada" />
        </div>
      )}

      <Footer />
    </main>
  );
}
