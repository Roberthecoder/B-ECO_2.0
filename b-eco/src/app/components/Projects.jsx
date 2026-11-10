"use client";
import React, { useState, useEffect } from "react";
import "../styles/Projects.css";
import { projectsResources } from "../utils/Projects";

// Cada proyecto puede traer:
// - image: foto principal (obligatoria)
// - fotos: más fotos (opcional); se ven como miniaturas para cambiar la principal
// - periodo: etiqueta con la fecha o la mesa (opcional)
const Projects = ({ projects }) => {
  const projectsList = projects || projectsResources;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fotoIndex, setFotoIndex] = useState(0);

  const proyecto = projectsList[currentIndex];
  const fotos = [proyecto.image, ...(proyecto.fotos || [])];

  // Precarga las fotos principales para que el cambio sea rápido
  useEffect(() => {
    projectsList.forEach((p) => {
      const img = new Image();
      img.src = p.image;
    });
  }, [projectsList]);

  const ir = (indice) => {
    const total = projectsList.length;
    setCurrentIndex((indice + total) % total);
    setFotoIndex(0);
  };

  return (
    <div className="containerProject">
      <h2 className="title" style={{ marginBottom: 32 }}>
        Proyectos
      </h2>
      <p className="proyectos-contador">
        Proyecto {currentIndex + 1} de {projectsList.length}
      </p>
      <div className="projectsContainer">
        <button type="button" className="arrows" onClick={() => ir(currentIndex - 1)} aria-label="Proyecto anterior">
          &#10092;
        </button>
        <div className="mainContainer">
          <div className="projectSlider">
            <img src={fotos[fotoIndex]} alt={proyecto.title} className="projectImage" />
            {fotos.length > 1 && (
              <div className="proyecto-miniaturas">
                {fotos.map((f, i) => (
                  <button
                    key={f}
                    type="button"
                    className={`proyecto-miniatura ${i === fotoIndex ? "activa" : ""}`}
                    onClick={() => setFotoIndex(i)}
                    aria-label={`Ver foto ${i + 1} de ${proyecto.title}`}
                  >
                    <img src={f} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="textContainer">
            {proyecto.periodo && <span className="proyecto-periodo">{proyecto.periodo}</span>}
            <h2 style={{ textAlign: "center", marginBottom: 16 }}>{proyecto.title}</h2>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.5 }}>{proyecto.description}</p>
          </div>
        </div>
        <button type="button" className="arrows" onClick={() => ir(currentIndex + 1)} aria-label="Proyecto siguiente">
          &#10093;
        </button>
      </div>

      <div className="proyectos-botones-celular">
        <button type="button" onClick={() => ir(currentIndex - 1)}>‹ Anterior</button>
        <button type="button" onClick={() => ir(currentIndex + 1)}>Siguiente ›</button>
      </div>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 4, marginTop: 20 }}>
        {projectsList.map((p, index) => (
          <button
            key={p.title}
            type="button"
            className={index === currentIndex ? "circle-colored" : "circles"}
            onClick={() => ir(index)}
            aria-label={p.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
