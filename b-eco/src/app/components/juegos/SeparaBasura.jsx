"use client";
import { useEffect, useRef, useState } from 'react';

// Contenedores según la separación de residuos de Jalisco
const BOTES = [
  { id: 'organico', nombre: 'Orgánico', color: '#2e7d32', icono: '🌱' },
  { id: 'reciclable', nombre: 'Reciclable', color: '#1565c0', icono: '♻️' },
  { id: 'no-reciclable', nombre: 'No reciclable', color: '#616161', icono: '🗑️' },
  { id: 'especial', nombre: 'Manejo especial', color: '#e65100', icono: '⚠️' },
];

const RESIDUOS = [
  { icono: '🍌', nombre: 'Cáscara de plátano', bote: 'organico' },
  { icono: '🍎', nombre: 'Corazón de manzana', bote: 'organico' },
  { icono: '🥚', nombre: 'Cascarón de huevo', bote: 'organico' },
  { icono: '🍂', nombre: 'Hojas secas', bote: 'organico' },
  { icono: '🥬', nombre: 'Restos de verdura', bote: 'organico' },
  { icono: '☕', nombre: 'Posos de café', bote: 'organico' },
  { icono: '🥫', nombre: 'Lata de aluminio', bote: 'reciclable' },
  { icono: '🧴', nombre: 'Botella de plástico (PET)', bote: 'reciclable' },
  { icono: '📰', nombre: 'Periódico', bote: 'reciclable' },
  { icono: '📦', nombre: 'Caja de cartón', bote: 'reciclable' },
  { icono: '🍾', nombre: 'Botella de vidrio', bote: 'reciclable' },
  { icono: '🔵', nombre: 'Tapita de plástico', bote: 'reciclable' },
  { icono: '😷', nombre: 'Cubrebocas usado', bote: 'no-reciclable' },
  { icono: '🩹', nombre: 'Curita usada', bote: 'no-reciclable' },
  { icono: '🧻', nombre: 'Servilleta sucia', bote: 'no-reciclable' },
  { icono: '🥡', nombre: 'Envase de unicel sucio', bote: 'no-reciclable' },
  { icono: '🚬', nombre: 'Colilla de cigarro', bote: 'no-reciclable' },
  { icono: '🔋', nombre: 'Pila', bote: 'especial' },
  { icono: '💡', nombre: 'Foco ahorrador', bote: 'especial' },
  { icono: '📱', nombre: 'Celular viejo', bote: 'especial' },
  { icono: '💊', nombre: 'Medicina caducada', bote: 'especial' },
  { icono: '🛢️', nombre: 'Aceite de cocina usado', bote: 'especial' },
];

const DURACION = 30;
const CLAVE_RECORD = 'beco-separa-record';

function leerRecord() {
  try { return Number(localStorage.getItem(CLAVE_RECORD)) || 0; } catch { return 0; }
}
function guardarRecord(valor) {
  try { localStorage.setItem(CLAVE_RECORD, String(valor)); } catch {}
}
function residuoAlAzar(anterior) {
  let r;
  do { r = RESIDUOS[Math.floor(Math.random() * RESIDUOS.length)]; } while (r === anterior);
  return r;
}

export default function SeparaBasura() {
  const [estado, setEstado] = useState('inicio'); // inicio | jugando | fin
  const [residuo, setResiduo] = useState(null);
  const [puntos, setPuntos] = useState(0);
  const [racha, setRacha] = useState(0);
  const [tiempo, setTiempo] = useState(DURACION);
  const [aviso, setAviso] = useState(null);
  const [record, setRecord] = useState(0);
  const [errores, setErrores] = useState([]);
  const puntosRef = useRef(0);

  useEffect(() => setRecord(leerRecord()), []);

  useEffect(() => {
    if (estado !== 'jugando') return;
    if (tiempo <= 0) {
      setEstado('fin');
      if (puntosRef.current > leerRecord()) {
        guardarRecord(puntosRef.current);
        setRecord(puntosRef.current);
      }
      return;
    }
    const t = setTimeout(() => setTiempo((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [estado, tiempo]);

  useEffect(() => {
    if (estado !== 'jugando') return;
    const teclas = (e) => {
      const n = Number(e.key);
      if (n >= 1 && n <= BOTES.length) elegir(BOTES[n - 1].id);
    };
    window.addEventListener('keydown', teclas);
    return () => window.removeEventListener('keydown', teclas);
  });

  function iniciar() {
    puntosRef.current = 0;
    setPuntos(0);
    setRacha(0);
    setTiempo(DURACION);
    setErrores([]);
    setAviso(null);
    setResiduo(residuoAlAzar());
    setEstado('jugando');
  }

  function elegir(boteId) {
    if (estado !== 'jugando' || !residuo) return;
    if (boteId === residuo.bote) {
      const extra = racha >= 4 ? 2 : 1; // a partir de 5 aciertos seguidos vale doble
      puntosRef.current += extra;
      setPuntos(puntosRef.current);
      setRacha((r) => r + 1);
      setAviso({ ok: true, texto: extra > 1 ? '¡Racha! +2' : '¡Bien! +1' });
    } else {
      const correcto = BOTES.find((b) => b.id === residuo.bote);
      setRacha(0);
      setAviso({ ok: false, texto: `${residuo.nombre} va en: ${correcto.nombre}` });
      setErrores((lista) => (lista.some((x) => x.nombre === residuo.nombre) ? lista : [...lista, residuo]));
    }
    setResiduo((r) => residuoAlAzar(r));
  }

  if (estado === 'inicio') {
    return (
      <div className="juego-pantalla">
        <div className="juego-icono-grande">♻️</div>
        <h3>Separa la basura</h3>
        <p>Tienes {DURACION} segundos. Toca el bote correcto para cada residuo. En compu también puedes usar las teclas 1 a 4.</p>
        {record > 0 && <p className="juego-record">Tu récord: {record}</p>}
        <button type="button" className="juego-boton" onClick={iniciar}>Jugar</button>
      </div>
    );
  }

  if (estado === 'fin') {
    return (
      <div className="juego-pantalla">
        <div className="juego-icono-grande">🏁</div>
        <h3>¡Se acabó el tiempo!</h3>
        <p className="juego-puntaje">{puntos} puntos</p>
        <p className="juego-record">Tu récord: {Math.max(record, puntos)}</p>
        {errores.length > 0 && (
          <div className="juego-repaso">
            <p><strong>Para la próxima:</strong></p>
            <ul>
              {errores.map((r) => (
                <li key={r.nombre}>
                  {r.icono} {r.nombre} → {BOTES.find((b) => b.id === r.bote).nombre}
                </li>
              ))}
            </ul>
          </div>
        )}
        <button type="button" className="juego-boton" onClick={iniciar}>Jugar otra vez</button>
      </div>
    );
  }

  return (
    <div className="separa">
      <div className="juego-marcador">
        <span>⏱️ {tiempo}s</span>
        <span>⭐ {puntos}</span>
        <span>🔥 {racha}</span>
      </div>
      <div className="separa-residuo" aria-live="polite">
        <span className="separa-icono">{residuo.icono}</span>
        <span className="separa-nombre">{residuo.nombre}</span>
      </div>
      <p className={`separa-aviso ${aviso ? (aviso.ok ? 'ok' : 'error') : ''}`}>
        {aviso ? aviso.texto : '¿En qué bote va?'}
      </p>
      <div className="separa-botes">
        {BOTES.map((b, i) => (
          <button
            key={b.id}
            type="button"
            className="separa-bote"
            style={{ background: b.color }}
            onClick={() => elegir(b.id)}
          >
            <span className="separa-bote-icono">{b.icono}</span>
            <span>{b.nombre}</span>
            <span className="separa-tecla">{i + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
