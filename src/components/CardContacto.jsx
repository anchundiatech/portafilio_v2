import React, { useState } from "react";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub, FaCopy, FaCheck } from "react-icons/fa";
import Cv from '@/assets/cv/CV_Alejandro_Anchundia_frontend.pdf';

export default function Contacto() {
  const [copiedItem, setCopiedItem] = useState(null);
  const [cvDownloading, setCvDownloading] = useState(false);

  const contactMethods = [
    {
      name: "Email",
      value: "armandoanchundiayela@gmail.com",
      href: "mailto:armandoanchundiayela@gmail.com?subject=Consulta%20sobre%20proyecto%20web&body=Hola%20Alejandro,%0D%0A%0D%0ATengo%20interés%20en%20discutir%20un%20proyecto%20contigo.",
      icon: FaEnvelope,
      primary: true,
      copyable: true,
      ariaLabel: "Enviar email a Alejandro Anchundia"
    },
    {
      name: "WhatsApp",
      value: "+593 99 175 3022",
      href: "https://wa.me/593991753022?text=Hola%20Alejandro,%20me%20interesa%20hablar%20sobre%20un%20proyecto%20web",
      icon: FaWhatsapp,
      copyable: true,
      ariaLabel: "Contactar por WhatsApp a Alejandro Anchundia"
    },
    {
      name: "LinkedIn",
      value: "alejandro-anchundia",
      href: "https://linkedin.com/in/alejandro-anchundia",
      icon: FaLinkedin,
      ariaLabel: "Ver perfil de LinkedIn de Alejandro Anchundia"
    },
    {
      name: "GitHub",
      value: "anchundiatech",
      href: "https://github.com/anchundiatech",
      icon: FaGithub,
      ariaLabel: "Ver repositorios de GitHub de Alejandro Anchundia"
    }
  ];

const copyToClipboard = async (text, itemName) => {
  try {
    // Intento con Clipboard API moderna
    await navigator.clipboard.writeText(text);
    setCopiedItem(itemName);
    setTimeout(() => setCopiedItem(null), 2000);
  } catch (err) {
    console.warn("Clipboard API no disponible:", err);

    // Fallback manual: selecciona el texto y pide que el usuario copie
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.readOnly = true;
    textArea.style.position = 'absolute';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);

    textArea.select();
    alert("Presiona Ctrl+C (o ⌘+C en Mac) para copiar el texto.");

    document.body.removeChild(textArea);
    setCopiedItem(itemName);
    setTimeout(() => setCopiedItem(null), 2000);
  }
};
  const handleCvDownload = () => {
    setCvDownloading(true);
    // Simular descarga (en realidad el navegador maneja esto)
    setTimeout(() => setCvDownloading(false), 1500);
  };

  return (
    <section id="contacto" className="container_contacto">
      <div className="contact-wrapper">
        <div className="contact_header">
          <h2>
            <span role="img" aria-label="buzón de correo">📬</span>
            ¡Trabajemos juntos!
          </h2>
          <p className="contact_description">
            ¿Tienes un proyecto web en mente? Me especializo en crear experiencias
            frontend modernas y funcionales. ¡Estaré encantado de responderte!
          </p>
        </div>

        <div className="contact-methods">
          <div className="primary_contact">
            <h3>Contacto preferido</h3>
            {contactMethods
              .filter(method => method.primary)
              .map(method => {
                const IconComponent = method.icon;
                return (
                  <div key={method.name} className="contact_item contact_item--primary">
                    <a
                      href={method.href}
                      aria-label={method.ariaLabel}
                      rel="noopener noreferrer"
                      target={method.name !== "Email" ? "_blank" : undefined}
                    >
                      <IconComponent aria-hidden="true" />
                      <span className="contact_text">
                        <span className="contact_name">{method.name}</span>
                        <span className="contact_value">{method.value}</span>
                      </span>
                    </a>
                    {method.copyable && (
                      <button
                        className="copy_button"
                        onClick={() => copyToClipboard(method.value, method.name)}
                        aria-label={`Copiar ${method.name}: ${method.value}`}
                        title={`Copiar ${method.value}`}
                      >
                        {copiedItem === method.name ? (
                          <FaCheck aria-hidden="true" />
                        ) : (
                          <FaCopy aria-hidden="true" />
                        )}
                      </button>
                    )}
                  </div>
                );
              })
            }
          </div>

          <div className="secondary_contacts">
            <h3>Otras formas de contacto</h3>
            <div className="contact-links">
              {contactMethods
                .filter(method => !method.primary)
                .map(method => {
                  const IconComponent = method.icon;
                  return (
                    <div key={method.name} className="contact_item">
                      <a
                        href={method.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={method.ariaLabel}
                      >
                        <IconComponent aria-hidden="true" />
                        <span className="contact_name">{method.name}</span>
                      </a>
                      {method.copyable && (
                        <button
                          className="copy_button copy_button--small"
                          onClick={() => copyToClipboard(method.value, method.name)}
                          aria-label={`Copiar ${method.name}: ${method.value}`}
                          title={`Copiar ${method.value}`}
                        >
                          {copiedItem === method.name ? (
                            <FaCheck aria-hidden="true" />
                          ) : (
                            <FaCopy aria-hidden="true" />
                          )}
                        </button>
                      )}
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>

        <div className="cv_section">
          <a
            className={`cv-button ${cvDownloading ? 'cv-button--downloading' : ''}`}
            href={Cv}
            download="CV_Alejandro_Anchundia_Frontend.pdf"
            onClick={handleCvDownload}
            aria-label="Descargar CV de Alejandro Anchundia en formato PDF"
          >
            <span role="img" aria-hidden="true">
              {cvDownloading ? "⏳" : "📄"}
            </span>
            {cvDownloading ? "Descargando..." : "Descargar CV"}
          </a>
          <p className="cv_info">
            <small>PDF • 250KB • Actualizado en Agosto 2025</small>
          </p>
        </div>

        {/* Mensaje de confirmación para copy */}
        {copiedItem && (
          <div
            className="copy_notification"
            role="status"
            aria-live="polite"
          >
            <FaCheck aria-hidden="true" />
            ¡{copiedItem} copiado al portapapeles!
          </div>
        )}
      </div>
    </section>
  );
}