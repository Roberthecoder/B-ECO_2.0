"use client";
// Core
import React, { useState, useEffect } from "react";

// Utils
import HeaderCarouselImages from "../utils/HeaderCarouselImages";

import "../styles/HeaderCarousel.css";

const FADE_INTERVAL_MS = 12000;

export default function HeaderCarousel({ images }) {
  // Use prop if provided, otherwise fallback to imported data
  const carouselImages = images || HeaderCarouselImages.images;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeProp, setFadeProp] = useState({ fade: "fade-in" });

  // Preload all carousel images to prevent reloading
  useEffect(() => {
    carouselImages.forEach((image) => {
      const img = new Image();
      img.src = image.img;
    });
  }, [carouselImages]);

  useEffect(() => {
    const fadeTimeout = setTimeout(() => {
      setFadeProp({ fade: "fade-out" });
      const fadeTimeout2 = setTimeout(() => {
        setFadeProp({ fade: "fade-in" });
      }, 1000);
      return () => {
        clearTimeout(fadeTimeout2);
      };
    }, FADE_INTERVAL_MS - 1000);

    return () => {
      clearTimeout(fadeTimeout);
    };
  }, [currentIndex]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex === carouselImages.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, FADE_INTERVAL_MS);
    return () => clearTimeout(timeout);
  }, [currentIndex, carouselImages.length]);

  const currentImage = carouselImages[currentIndex];
  const fitMode = currentImage.fitMode || "cover";

  return (
    <>
      <img
        className={`carousel-img ${fadeProp.fade} carousel-img-${fitMode}`}
        src={currentImage.img}
        alt="b-eco header carousel"
      />
    </>
  );
}
