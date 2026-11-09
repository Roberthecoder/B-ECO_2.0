"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Menu from './Menu';
import Footer from './Footer';
import { mesasDirectivas, cifrasGenerales } from '../data/historia';
import { whoAreWeContent } from '../data/years/current/who-are-we';
import { INSTAGRAM_URL } from '../data/redes';
import '../styles/Page.css';
import '../styles/Historia.css';

const ETIQUETA_TIPO = { logro: '🏆 Logro', proximo: '🗓️ Próximo', accion: '🌱 Acción' };

function Galeria({ fotos, etiqueta, onAbrir }) {
  if (!fotos?.length) return null;
  return (
    <div className="mesa-fotos">
      {fotos.map((foto, i) => (
        <button
          key={foto}
          type="button"
          className="mesa-foto"
          onClick={() => onAbrir(foto)}
          aria-label={`Ver foto ${i + 1}: ${etiqueta}`}
        >
          <img src={foto} alt={`Foto ${i + 1} de B-Eco, ${etiqueta}`} loading="lazy" />
        </button>
      ))}
    </div>
  );
}

function Accion({ accion, onAbrir }) {
  const tipo = accion.tipo || 'accion';
  return (
    <li className={`accion accion-${tipo}`}>
      {accion.foto && (
        <button type="button" className="accion-foto" onClick={() => onAbrir(accion.foto)} aria-label="Ampliar foto">
          <img src={accion.foto} alt="" loading="lazy" />
        </button>
      )}
      <div className="accion-cuerpo">
        <div className="accion-meta">
          <span className="accion-fecha">{accion.fecha}</span>
          <span className={`accion-tipo tipo-${tipo}`}>{ETIQUETA_TIPO[tipo]}</span>
        </div>
        <h4>{accion.titulo}</h4>
        {accion.texto && <p>{accion.texto}</p>}
        {accion.enlace && (
          <a href={accion.enlace} target="_blank" rel="noreferrer" className="accion-enlace">
            Ver en Instagram →
          </a>
        )}
      </div>
    </li>
  );
}

export default function Nosotros() {
  const [fotoAbierta, setFotoAbierta] = useState(null);

  useEffect(() => {
    if (!fotoAbierta) return;
    const cerrar = (e) => e.key === 'Escape' && setFotoAbierta(null);
    window.addEventListener('keydown', cerrar);
    return () => window.removeEventListener('keydown', cerrar);
  }, [fotoAbierta]);

  const totalAcciones = mesasDirectivas.reduce(
    (n, m) => n + (m.semestres || []).reduce((k, s) => k + (s.acciones?.length || 0), 0),
    0
  );

  return (
    <main>
      <Menu />

      <header className="historia-hero">
        <h1>Nosotros</h1>
        <p>Quiénes somos y todo lo que hemos hecho, mesa por mesa y semestre por semestre.</p>
        <nav className="historia-indice" aria-label="Ir a">
          <a href="#quienes-somos">Quiénes somos</a>
          <a href="#numeros">En números</a>
          {mesasDirectivas.map((m) => (
            <a key={m.id} href={`#mesa-${m.id}`}>Mesa {m.periodo}</a>
          ))}
        </nav>
      </header>

      <section id="quienes-somos" className="nosotros-quienes">
        <div className="nosotros-quienes-texto">
          <h2>¿Quiénes somos?</h2>
          {whoAreWeContent.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="boton-instagram">
            Síguenos en Instagram
          </a>
        </div>
        <button type="button" className="nosotros-quienes-foto" onClick={() => setFotoAbierta(whoAreWeContent.image)} aria-label="Ampliar foto">
          <img src={whoAreWeContent.image} alt="Voluntarios de B-Eco" />
        </button>
      </section>

      <section id="numeros" className="nosotros-numeros">
        <h2>B-Eco en números</h2>
        <ul>
          {cifrasGenerales.map((c) => (
            <li key={c.texto}>
              <strong>{c.valor}</strong>
              <span>{c.texto}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="nosotros-linea">
        <h2>Nuestra historia</h2>
        <p className="nosotros-linea-intro">
          {totalAcciones} acciones y logros registrados. Toca cualquier foto para verla en grande.
        </p>
      </section>

      <ol className="linea-tiempo">
        {mesasDirectivas.map((m) => (
          <li key={m.id} id={`mesa-${m.id}`} className="mesa">
            <span className="mesa-punto" aria-hidden="true" />
            <article className="mesa-tarjeta">
              <div className="mesa-encabezado">
                <span className="mesa-periodo">Mesa {m.periodo}</span>
                {m.etiqueta && <span className="mesa-etiqueta">{m.etiqueta}</span>}
              </div>
              <h3 className="mesa-presidencia">Presidencia: {m.presidencia}</h3>

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

              {m.semestres?.length > 0 && (
                <div className="semestres">
                  {m.semestres.map((sem) => (
                    <section key={sem.id} id={`semestre-${sem.id}`} className="semestre">
                      <div className="semestre-encabezado">
                        <h3>{sem.nombre}</h3>
                        <span className="semestre-fechas">{sem.fechas}</span>
                        {sem.estado && <span className="semestre-estado">{sem.estado}</span>}
                      </div>

                      {sem.portada && (
                        <figure className="semestre-portada">
                          <button type="button" onClick={() => setFotoAbierta(sem.portada.src)} aria-label="Ampliar foto">
                            <img src={sem.portada.src} alt={sem.portada.pie} loading="lazy" />
                          </button>
                          <figcaption>{sem.portada.pie}</figcaption>
                        </figure>
                      )}

                      {sem.resumen?.map((parrafo, i) => (
                        <p key={i} className="mesa-resumen">{parrafo}</p>
                      ))}

                      {sem.acciones?.length > 0 && (
                        <ul className="acciones">
                          {sem.acciones.map((a) => (
                            <Accion key={a.titulo} accion={a} onAbrir={setFotoAbierta} />
                          ))}
                        </ul>
                      )}

                      <Galeria fotos={sem.fotos} etiqueta={`${sem.nombre}, ${sem.fechas}`} onAbrir={setFotoAbierta} />
                    </section>
                  ))}
                </div>
              )}

              {m.fotos?.length > 0 && (
                <>
                  {m.tituloFotos && <h3 className="mesa-subtitulo">{m.tituloFotos}</h3>}
                  <Galeria fotos={m.fotos} etiqueta={`mesa ${m.periodo}`} onAbrir={setFotoAbierta} />
                </>
              )}

              {m.pagina && (
                <Link href={m.pagina} className="mesa-enlace">
                  Ver la página web de esta mesa →
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
