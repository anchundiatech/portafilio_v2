import React, { useState } from "react";
import Css from "@/assets/tecnologias/css3.svg"
import Html from "@/assets/tecnologias/html5 .svg"
import Git from '@/assets/tecnologias/git.svg'
import Github from '@/assets/tecnologias/github.svg'
import Javascript from '@/assets/tecnologias/javascript.svg'
import Reactjs from '@/assets/tecnologias/react-svgrepo-com.svg'
import Tailwind from '@/assets/tecnologias/tailwind-svgrepo-com.svg'

export default function Tecnologias() {
  const [hoveredTech, setHoveredTech] = useState(null);

  const tecnologias = [
    {
      name: "CSS3",
      icon: Css,
      level: "Avanzado",
      category: "Frontend",
      experience: "2+ años",
      description: "Estilos modernos, Flexbox, Grid, animaciones"
    },
    {
      name: "HTML5",
      icon: Html,
      level: "Avanzado",
      category: "Frontend",
      experience: "2+ años",
      description: "Semántica web, accesibilidad, SEO"
    },
    {
      name: "Git",
      icon: Git,
      level: "Intermedio",
      category: "Herramientas",
      experience: "1+ año",
      description: "Control de versiones, ramas, colaboración"
    },
    {
      name: "GitHub",
      icon: Github,
      level: "Intermedio",
      category: "Herramientas",
      experience: "1+ año",
      description: "Repositorios, pull requests, GitHub Actions"
    },
    {
      name: "JavaScript",
      icon: Javascript,
      level: "Avanzado",
      category: "Frontend",
      experience: "1+ año",
      description: "ES6+, DOM, APIs, programación asíncrona"
    },
    {
      name: "React",
      icon: Reactjs,
      level: "Intermedio",
      category: "Frontend",
      experience: "1+ año",
      description: "Hooks, componentes, estado, Context API"
    },
    {
      name: "Tailwind CSS",
      icon: Tailwind,
      level: "Intermedio",
      category: "Frontend",
      experience: "6+ meses",
      description: "Utility-first, responsive design, componentes"
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case "Avanzado": return "#22c55e";
      case "Intermedio": return "#f59e0b";
      case "Principiante": return "#ef4444";
      default: return "#6b7280";
    }
  };

  const handleKeyDown = (event, tech) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setHoveredTech(hoveredTech === tech.name ? null : tech.name);
    }
  };

  return (
    <section id="tecnologias" className="container_tecnologias">
      <div className="tecnologias_container">
        <div className="title_tecnologias">
          <h2>
            <span role="img" aria-label="herramientas tecnológicas">⚡</span>
            Tecnologías que manejo
          </h2>
          <p className="tecnologias_subtitle">
            Herramientas y lenguajes que uso para crear experiencias web modernas
          </p>
        </div>

        <div className="tecnologia_items">
          <ul className="tecnologia_list" role="list">
            {tecnologias.map((tech, index) => (
              <li
                key={tech.name}
                className="img_list"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
                onFocus={() => setHoveredTech(tech.name)}
                onBlur={() => setHoveredTech(null)}
                onKeyDown={(e) => handleKeyDown(e, tech)}
                tabIndex="0"
                role="button"
                aria-label={`${tech.name} - ${tech.level}, ${tech.experience} de experiencia`}
                aria-expanded={hoveredTech === tech.name}
              >
                <div className="tech_content">
                  <img
                    src={tech.icon}
                    alt={`Logo de ${tech.name}`}
                    loading="lazy"
                  />
                  <span className="tech_name">{tech.name}</span>

                  {/* Indicador de nivel */}
                  <div
                    className="level_indicator"
                    style={{ backgroundColor: getLevelColor(tech.level) }}
                    aria-hidden="true"
                  ></div>

                  {/* Tooltip/Card expandida */}
                  {hoveredTech === tech.name && (
                    <div className="tech_tooltip" role="tooltip">
                      <div className="tooltip_header">
                        <h4>{tech.name}</h4>
                        <span
                          className="level_badge"
                          style={{ backgroundColor: getLevelColor(tech.level) }}
                        >
                          {tech.level}
                        </span>
                      </div>
                      <div className="tooltip_content">
                        <p className="tech_category">
                          <strong>Categoría:</strong> {tech.category}
                        </p>
                        <p className="tech_experience">
                          <strong>Experiencia:</strong> {tech.experience}
                        </p>
                        <p className="tech_description">
                          {tech.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {/* Leyenda de niveles */}
          <div className="levels_legend">
            <h4>Niveles de competencia:</h4>
            <div className="legend_items">
              <div className="legend_item">
                <div
                  className="legend_color"
                  style={{ backgroundColor: "#22c55e" }}
                  aria-hidden="true"
                ></div>
                <span>Avanzado</span>
              </div>
              <div className="legend_item">
                <div
                  className="legend_color"
                  style={{ backgroundColor: "#f59e0b" }}
                  aria-hidden="true"
                ></div>
                <span>Intermedio</span>
              </div>
              <div className="legend_item">
                <div
                  className="legend_color"
                  style={{ backgroundColor: "#ef4444" }}
                  aria-hidden="true"
                ></div>
                <span>Principiante</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}