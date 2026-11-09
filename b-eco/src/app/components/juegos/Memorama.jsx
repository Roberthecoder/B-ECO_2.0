"use client";
import { useEffect, useState } from 'react';

const POLINIZADORES = [
  { icono: '🐝', nombre: 'Abeja', dato: 'Para hacer un solo kilo de miel, las abejas visitan millones de flores.' },
  { icono: '🦋', nombre: 'Mariposa', dato: 'Las mariposas prueban el sabor de las flores con sus patas.' },
  { icono: '🐦', nombre: 'Colibrí', dato: 'El colibrí aletea decenas de veces por segundo y poliniza flores en forma de tubo.' },
  { icono: '🦇', nombre: 'Murciélago', dato: 'Los murciélagos polinizan el agave: sin ellos no habría tequila.' },
  { icono: '🐞', nombre: 'Catarina', dato: 'Las catarinas cuidan el jardín comiéndose a los pulgones.' },
  { icono: '🪲', nombre: 'Escarabajo', dato: 'Los escarabajos fueron de los primeros polinizadores de la Tierra.' },
  { icono: '🌻', nombre: 'Girasol', dato: 'Un girasol es en realidad cientos de flores pequeñitas juntas.' },
  { icono: '🌸', nombre: 'Flor nativa', dato: 'Las plantas nativas son el mejor alimento para los polinizadores locales.' },
];

const CLAVE_RECORD = 'beco-memorama-record';

function barajar(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function nuevoTablero() {
  return barajar(
    POLINIZADORES.flatMap((p, i) => [
      { id: `${i}a`, par: i, ...p },
      { id: `${i}b`, par: i, ...p },
    ])
  );
}

function leerRecord() {
  try { return Number(localStorage.getItem(CLAVE_RECORD)) || 0; } catch { return 0; }
}

export default function Memorama() {
  const [cartas, setCartas] = useState([]);
  const [volteadas, setVolteadas] = useState([]);
  const [encontradas, setEncontradas] = useState([]);
  const [movimientos, setMovimientos] = useState(0);
  const [dato, setDato] = useState(null);
  const [jugando, setJugando] = useState(false);
  const [record, setRecord] = useState(0);

  useEffect(() => setRecord(leerRecord()), []);

  const terminado = jugando && encontradas.length === POLINIZADORES.length;

  useEffect(() => {
    if (!terminado) return;
    if (!record || movimientos < record) {
      try { localStorage.setItem(CLAVE_RECORD, String(movimientos)); } catch {}
      setRecord(movimientos);
    }
    // Solo al terminar la partida
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [terminado]);

  function iniciar() {
    setCartas(nuevoTablero());
    setVolteadas([]);
    setEncontradas([]);
    setMovimientos(0);
    setDato(null);
    setJugando(true);
  }

  function voltear(carta) {
    if (volteadas.length === 2 || volteadas.includes(carta.id) || encontradas.includes(carta.par)) return;
    const nuevas = [...volteadas, carta.id];
    setVolteadas(nuevas);
    if (nuevas.length === 2) {
      setMovimientos((m) => m + 1);
      const [a, b] = nuevas.map((id) => cartas.find((c) => c.id === id));
      if (a.par === b.par) {
        setEncontradas((e) => [...e, a.par]);
        setDato(a);
        setVolteadas([]);
      } else {
        setTimeout(() => setVolteadas([]), 800);
      }
    }
  }

  if (!jugando) {
    return (
      <div className="juego-pantalla">
        <div className="juego-icono-grande">🐝</div>
        <h3>Memorama polinizador</h3>
        <p>Encuentra los 8 pares. Cada par trae un dato curioso sobre los polinizadores que cuidamos en el jardín.</p>
        {record > 0 && <p className="juego-record">Tu récord: {record} movimientos</p>}
        <button type="button" className="juego-boton" onClick={iniciar}>Jugar</button>
      </div>
    );
  }

  return (
    <div className="memorama">
      <div className="juego-marcador">
        <span>🔁 {movimientos} movimientos</span>
        <span>✅ {encontradas.length}/{POLINIZADORES.length}</span>
      </div>
      <div className="memorama-tablero">
        {cartas.map((c) => {
          const visible = volteadas.includes(c.id) || encontradas.includes(c.par);
          return (
            <button
              key={c.id}
              type="button"
              className={`memorama-carta ${visible ? 'visible' : ''} ${encontradas.includes(c.par) ? 'encontrada' : ''}`}
              onClick={() => voltear(c)}
              aria-label={visible ? c.nombre : 'Carta boca abajo'}
            >
              <span>{visible ? c.icono : '🌿'}</span>
            </button>
          );
        })}
      </div>
      <p className="memorama-dato" aria-live="polite">
        {terminado
          ? `¡Lo lograste en ${movimientos} movimientos! Récord: ${record}.`
          : dato
            ? `${dato.icono} ${dato.nombre}: ${dato.dato}`
            : 'Toca dos cartas para encontrar un par.'}
      </p>
      {terminado && (
        <button type="button" className="juego-boton" onClick={iniciar}>Jugar otra vez</button>
      )}
    </div>
  );
}
