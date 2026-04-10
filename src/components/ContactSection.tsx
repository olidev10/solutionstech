"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact">
      <div className="section-tag">Contact</div>
      <div className="contact-wrapper">
        <div className="contact-info">
          <h2 className="section-title">Parlons de votre projet</h2>
          <p className="section-desc" style={{ marginBottom: "2.5rem" }}>
            Premier échange gratuit et sans engagement. On vous répond sous 24h.
          </p>

          <div className="contact-item">
            <div className="contact-icon">✉</div>
            <div>
              <h4>Email</h4>
              <p>contact@solutionstech.fr</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <h4>Localisation</h4>
              <p>France · Intervention nationale &amp; internationale</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">⏱</div>
            <div>
              <h4>Disponibilité</h4>
              <p>Lun–Ven, 9h–18h · Réponse &lt; 24h</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Prénom</label>
              <input
                type="text"
                name="firstName"
                placeholder="Jean"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Nom</label>
              <input
                type="text"
                name="lastName"
                placeholder="Dupont"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Email professionnel</label>
            <input
              type="email"
              name="email"
              placeholder="jean@entreprise.fr"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Type de projet</label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
            >
              <option value="">Sélectionnez...</option>
              <option>Site vitrine</option>
              <option>E-commerce</option>
              <option>Application web / SaaS</option>
              <option>Application mobile</option>
              <option>Intégration IA</option>
              <option>Refonte de site existant</option>
              <option>Autre</option>
            </select>
          </div>

          <div className="form-group">
            <label>Budget estimé</label>
            <select name="budget" value={formData.budget} onChange={handleChange}>
              <option value="">Sélectionnez...</option>
              <option>Moins de 1 500 €</option>
              <option>1 500 € – 5 000 €</option>
              <option>5 000 € – 15 000 €</option>
              <option>Plus de 15 000 €</option>
              <option>À définir ensemble</option>
            </select>
          </div>

          <div className="form-group">
            <label>Décrivez votre projet</label>
            <textarea
              name="message"
              placeholder="Parlez-nous de votre activité, de vos objectifs et de votre calendrier idéal..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="form-submit">
            Envoyer ma demande →
          </button>
        </form>
      </div>
    </section>
  );
}
