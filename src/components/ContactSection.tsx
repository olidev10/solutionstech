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

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

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
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          firstname: formData.firstName,
          lastname: formData.lastName,
          email: formData.email,
          projecttype: formData.projectType,
          budget: formData.budget,
          message: formData.message,
          subject: `Nouvelle demande de contact - ${formData.firstName} ${formData.lastName}`,
          from_name: `${formData.firstName} ${formData.lastName}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          projectType: "",
          budget: "",
          message: "",
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(result.message || "Une erreur s'est produite. Veuillez réessayer.");
      }
    } catch (err) {
      setError("Erreur de connexion. Veuillez réessayer plus tard.");
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
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
          {submitted && (
            <div style={{
              padding: "12px 16px",
              backgroundColor: "rgba(110, 231, 183, 0.1)",
              border: "1px solid var(--accent)",
              borderRadius: "8px",
              color: "var(--accent)",
              fontSize: "0.875rem",
              marginBottom: "1rem"
            }}>
              ✓ Merci ! Votre message a été envoyé. Nous vous répondrons sous 24h.
            </div>
          )}

          {error && (
            <div style={{
              padding: "12px 16px",
              backgroundColor: "rgba(255, 100, 100, 0.1)",
              border: "1px solid rgba(255, 100, 100, 0.5)",
              borderRadius: "8px",
              color: "#ff6464",
              fontSize: "0.875rem",
              marginBottom: "1rem"
            }}>
              ⚠ {error}
            </div>
          )}

          <div className="form-row">
            <div className="form-group">
              <label>Prénom</label>
              <input
                type="text"
                name="firstName"
                placeholder="Jean"
                value={formData.firstName}
                onChange={handleChange}
                required
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
                required
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
              required
            />
          </div>

          <div className="form-group">
            <label>Type de projet</label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
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
            <select 
              name="budget" 
              value={formData.budget} 
              onChange={handleChange}
              required
            >
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
              required
            />
          </div>

          <button 
            type="submit" 
            className="form-submit"
            disabled={loading}
            style={{ opacity: loading ? 0.6 : 1, cursor: loading ? "not-allowed" : "pointer" }}
          >
            {loading ? "Envoi en cours..." : "Envoyer ma demande →"}
          </button>
        </form>
      </div>
    </section>
  );
}
