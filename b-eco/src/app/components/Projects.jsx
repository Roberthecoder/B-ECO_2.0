"use client";
// Core
import React, { useState, useRef, useEffect } from "react";

// Styles
import "../styles/Projects.css";

// Utils
import { projectsResources } from "../utils/Projects";

const Projects = ({ projects }) => {
  // Use prop if provided, otherwise fallback to imported data
  const projectsList = projects || projectsResources;

  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload all project images to prevent reloading on carousel navigation
  useEffect(() => {
    projectsList.forEach((project) => {
      const img = new Image();
      img.src = project.image;
    });
  }, [projectsList]);

  const sliderStyles = {
    position: "relative",
    overflow: "hidden",
    height: 480,
    flex: 2,
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(projectsList.length - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < projectsList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <div className="containerProject">
      <h2 className="title" style={{ marginBottom: 50 }}>
        Proyectos
      </h2>
      <div
        className="projectsContainer"
      >
        <p className="arrows" onClick={goToPrevious}>
          &#10092;
        </p>
        <div className="mainContainer">
              <div style={sliderStyles}>

                  <img
                    src={projectsList[currentIndex].image}
                    alt={projectsList[currentIndex].title}
                    className="projectImage"
                  />

          </div>
          <div className="textContainer">
            <h2 style={{ textAlign: "center", marginBottom: 16 }}>
              {projectsList[currentIndex].title}
            </h2>
            <p style={{ fontSize: "1.2rem" }}>
              {projectsList[currentIndex].description}
            </p>
          </div>
        </div>
        <p className="arrows" onClick={goToNext}>
          &#10093;
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
        {projectsList.map((project, index) => (
          <div
            key={index}
            className={index === currentIndex ? "circle-colored" : "circles"}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
