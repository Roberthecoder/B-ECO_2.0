"use client";
import React, { useEffect, useState } from "react";
import HeaderCarouselImages from "../utils/HeaderCarouselImages";
import "../styles/HeaderCarousel.css";

const INTERVALO_MS = 7000;

// Todas las fotos están encimadas; solo la activa es visible.
// Al cambiar, la nueva aparece y la anterior se desvanece al mismo tiempo,
// así nunca hay saltos ni parpadeos.
export default function HeaderCarousel({ images }) {
  const fotos = images || HeaderCarouselImages.images;
  const [activa, setActiva] = useState(0);

  useEffect(() => {
    if (fotos.length < 2) return;
    const t = setTimeout(() => setActiva((i) => (i + 1) % fotos.length), INTERVALO_MS);
    return () => clearTimeout(t);
  }, [activa, fotos.length]);

  return (
    <div className="carousel">
      {fotos.map((foto, i) => (
        <img
          key={foto.img}
          src={foto.img}
          alt={`Foto ${i + 1} de B-Eco`}
          className={`carousel-img carousel-img-${foto.fitMode === "contain" ? "contain" : "cover"} ${i === activa ? "activa" : ""}`}
          loading={i === 0 ? "eager" : "lazy"}
          aria-hidden={i !== activa}
        />
      ))}
      {fotos.length > 1 && (
        <div className="carousel-puntos">
          {fotos.map((foto, i) => (
            <button
              key={foto.img}
              type="button"
              className={`carousel-punto ${i === activa ? "activo" : ""}`}
              onClick={() => setActiva(i)}
              aria-label={`Ver foto ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
