"use client";
import { useState } from 'react';
import SnakeGame from './SnakeGame';
import SeparaBasura from './juegos/SeparaBasura';
import Memorama from './juegos/Memorama';
import '../styles/SnakeGame.css';
import '../styles/Minijuegos.css';

const JUEGOS = [
  { id: 'separa', nombre: 'Separa la basura', icono: '♻️', soloCompu: false },
  { id: 'memorama', nombre: 'Memorama polinizador', icono: '🐝', soloCompu: false },
  { id: 'serpiente', nombre: 'ECO-Serpiente', icono: '🐍', soloCompu: true },
];

export default function Minijuegos({ isMobile = false, mostrarSerpiente = true }) {
  const disponibles = JUEGOS.filter((j) => j.id !== 'serpiente' || mostrarSerpiente);
  const [activo, setActivo] = useState(disponibles[0].id);

  return (
    <section className="content-section minijuegos" id="Minijuegos">
      <h2 style={{ color: '#006733', fontSize: '2.5rem' }}>Minijuegos</h2>
      <p className="minijuegos-intro">Aprende a cuidar el planeta jugando. ¡Supera tu récord!</p>

      <div className="minijuegos-pestanas" role="tablist">
        {disponibles.map((j) => (
          <button
            key={j.id}
            type="button"
            role="tab"
            aria-selected={activo === j.id}
            className={`minijuegos-pestana ${activo === j.id ? 'activa' : ''}`}
            onClick={() => setActivo(j.id)}
          >
            <span aria-hidden="true">{j.icono}</span> {j.nombre}
          </button>
        ))}
      </div>

      <div className="minijuegos-zona" role="tabpanel">
        {activo === 'separa' && <SeparaBasura />}
        {activo === 'memorama' && <Memorama />}
        {activo === 'serpiente' && (
          isMobile ? (
            <div className="juego-pantalla">
              <div className="juego-icono-grande">🐍</div>
              <h3>ECO-Serpiente</h3>
              <p>Este juego se controla con las flechas del teclado. Ábrelo desde una computadora para jugar.</p>
            </div>
          ) : (
            <div>
              <p className="textSnake">¡Ayúdanos a recolectar desechos!</p>
              <SnakeGame />
            </div>
          )
        )}
      </div>
    </section>
  );
}
