import Cards from './Cards'
import { cardsContent } from '../utils/Cards'
import "../styles/FollowUs.css"
import { INSTAGRAM_URL, INSTAGRAM_USUARIO } from '../data/redes'
// Styles

const FollowUs = ({ cards }) => {
    // Use prop if provided, otherwise fallback to imported data
    const cardsList = cards || cardsContent;
    return (
        <section className="content-section" id="Siguenos">
          <section>
            <h2 style={{color: "#006733", fontSize: "2.5rem"}}>Sigue nuestras acciones</h2>
            <p className='textF'>En el corazón del cambio y la acción, te invitamos a ser parte de algo más grande que tú mismo. Bienvenido a B-eco, donde la pasión por la sostenibilidad se convierte en un catalizador para transformar ideas en acciones tangibles y crear un impacto duradero.
              La revolución sostenible está en marcha, y en B-eco, queremos que seas parte de ella. Únete a nosotros, donde la pasión se encuentra con la acción y donde cada pequeño paso nos acerca a un mañana más brillante. ¡Te invitamos a ser parte de la revolución B-eco!
              ¿Listo para unirte? ¡Nosotros estamos listos para transformar juntos! 🌿</p>
            <a className="boton-instagram" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              Síguenos en Instagram {INSTAGRAM_USUARIO}
            </a>
            <section className="cards">
              {cardsList.map((card, index) => (
                <div key = {index}>
                  <Cards image = {card.img} text={card.text} referencia={card.link}/>
                </div>
              ))}
            </section>
          </section>
      </section>
  );
}

export default FollowUs;
