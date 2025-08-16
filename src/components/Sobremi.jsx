import React, { useState } from "react";
import "../App.css";
import Reactjs from "@/assets/tecnologias/react-svgrepo-com.svg";
import Javascript from "@/assets/tecnologias/javascript.svg";
import Css3 from "@/assets/tecnologias/css3.svg";
import Html from "@/assets/tecnologias/html5 .svg";

export default function Sobremi() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const skills = [Reactjs, Javascript, Css3, Html];

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section id="about-mi" className="container_sobremi">
      <div className="sobremi_content">
        <div className="sobremi_text">
          <h1 className="title_sobremi">
            Hola{" "}
            <span className="wave" role="img" aria-label="mano saludando">
              👋
            </span>
          </h1>
          <div className="description_container">
            <h2>Alejandro Anchundia</h2>
            <h3 className="subtitle_sobremi">Desarrollador Frontend</h3>
            <p className="text_sobremi">
              Soy desarrollador frontend con 1+ de un año de experiencia
              creando interfaces web que combinan funcionalidad, accesibilidad y
              diseño moderno. Me especializo en {" "}
              <strong>React, JavaScript y CSS</strong>, y disfruto transformar
              ideas en experiencias digitales atractivas.
            </p>
            <p className="text_sobremi">
              Siempre estoy explorando nuevas tecnologías, perfeccionando buenas
              prácticas y buscando formas de optimizar cada línea de código. Mi
              enfoque es construir productos que no solo funcionen, sino que
              generen impacto.
            </p>

            {/* Lista de habilidades */}
            <div className="skills_section">
              <h4 className="skills_title">Tecnologías principales:</h4>
              <ul className="skills_list" role="list">
                {skills.map((skill, index) => (
                  <li key={skill} style={{ animationDelay: `${index * 0.1}s` }}>
                    <img src={skill} alt="" />
                  </li>
                ))}
              </ul>
            </div>

            <div className="cta_container">
              <a
                href="#proyects"
                className="cta_button"
                aria-label="Explorar mis proyectos web">
                <span>🚀</span> Ver Proyectos
              </a>
              <a
                href="#contacto"
                className="cta_button cta_secondary"
                aria-label="Contactar para colaboraciones">
                <span>📧</span> Contactar
              </a>
            </div>

            {/* Información adicional */}
            <div className="additional_info">
              <p className="availability_status">
                <span className="status_indicator"></span>
                Disponible para nuevos proyectos
              </p>
              <p className="response_time">
                <small>⚡ Respuesta típica: menos de 24 horas</small>
              </p>
            </div>
          </div>
        </div>

        <div className="profile_image_container">
          {!imageLoaded && !imageError && (
            <div className="image_placeholder" aria-hidden="true">
              <div className="image_skeleton"></div>
            </div>
          )}

          {imageError ? (
            <div
              className="image_fallback"
              role="img"
              aria-label="Foto de perfil no disponible">
              <div className="fallback_content">
                <span className="fallback_icon">👨‍💻</span>
                <p>
                  Alejandro
                  <br />
                  Anchundia
                </p>
              </div>
            </div>
          ) : (
            <img
              src="/src/assets/me.jpg"
              alt="Alejandro Anchundia - Desarrollador Frontend especializado en React y JavaScript"
              className={`profile_image ${
                imageLoaded ? "profile_image--loaded" : ""
              }`}
              onLoad={handleImageLoad}
              onError={handleImageError}
              loading="lazy"
            />
          )}

          <div className="image_backdrop" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
}
