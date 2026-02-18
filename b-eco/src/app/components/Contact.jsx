"use client";
import { React, useRef, useState } from "react";
import "../styles/Contact.css";
import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";

const Contact = () => {
  const form = useRef();

  const [alert, setAlert] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9yqogri", "template_scyvczr", form.current, {
        publicKey: "uTgNVas0TYVGHRs43",
      })
      .then(
        (result) => {
          console.log("SUCCES...", result.text);
          setAlert(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
        e.target.reset()
      );
  };
  return (
    <section className="contactUsContainer">
      <section>
        <h2 style={{ color: "#006733", fontSize: "2.5rem" }}>
          ¿Quieres colaborar con nosotros?
        </h2>
        <p className="textF">
          En el corazón del cambio y la acción, te invitamos a ser parte de algo
          más grande que tú mismo. Bienvenido a B-eco, donde la pasión por la
          sostenibilidad se convierte en un catalizador para transformar ideas
          en acciones tangibles y crear un impacto duradero. La revolución
          sostenible está en marcha, y en B-eco, queremos que seas parte de
          ella. Únete a nosotros, donde la pasión se encuentra con la acción y
          donde cada pequeño paso nos acerca a un mañana más brillante. ¡Te
          invitamos a ser parte de la revolución B-eco! ¿Listo para unirte?
          ¡Nosotros estamos listos para transformar juntos! 🌿
        </p>
      </section>
      <form ref={form} onSubmit={sendEmail}>
        <section className="contactInfo">
          <div className="names">
            <div className="fName">
              <label htmlFor="fname" style={{ fontWeight: "bold" }}>
                Nombre(s)
              </label>
              <input
                type="text"
                id="fname"
                name="fname"
                className="contactInput"
              />
            </div>
            <div className="fName">
              <label htmlFor="lname" style={{ fontWeight: "bold" }}>
                Apellido(s)
              </label>
              <input
                type="text"
                id="lname"
                name="lname"
                className="contactInput"
              />
            </div>
          </div>
          <div className="names">
            <div className="fName">
              <div style={{ fontWeight: "bold" }}>Correo</div>
              <input
                type="email"
                name="user_email"
                required
                className="contactInput"
              />
            </div>
            <div className="fName">
              <div style={{ fontWeight: "bold" }}>Teléfono</div>
              <input
                type="tel"
                name="cellphone"
                required
                className="contactInput"
              />
            </div>
          </div>
          <div
            className="subject"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <div style={{ fontWeight: "bold" }}>
              Motivo / Descripcion de colaboración con B-ECO
            </div>
            <textarea className="subjectInput" name="subject"></textarea>
          </div>
        </section>
        <section className="sendInfo">
          <button type="submit" className="buttonEnviar">
            <span style={{ fontSize: ".8rem", fontWeight: "bold" }}>
              Enviar
            </span>
          </button>
          {alert && <Alert style={{ marginTop: 16 }} severity="success">
            Correo enviado correctamente
          </Alert>}
        </section>
      </form>
    </section>
  );
};

export default Contact;
