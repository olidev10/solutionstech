"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-tag">Agence Web &amp; Digital · France</div>

      <h1>
        Votre présence digitale,
        <span className="accent-line">enfin à la hauteur.</span>
      </h1>

      <p className="hero-sub">
        SolutionsTech conçoit et développe des sites web, applications et stratégies digitales sur mesure — pour les entreprises qui veulent des résultats,
        pas des promesses.
      </p>

      <div className="hero-actions">
        <Link href="#contact" className="btn-primary">
          Démarrer un projet →
        </Link>
        <Link href="#realisations" className="btn-secondary">
          Voir nos réalisations
        </Link>
      </div>

      <div className="hero-stats">
        <div className="hero-stat">
          <div className="num">
            50<span>+</span>
          </div>
          <div className="label">Projets livrés</div>
        </div>
        <div className="hero-stat">
          <div className="num">
            98<span>%</span>
          </div>
          <div className="label">Clients satisfaits</div>
        </div>
        <div className="hero-stat">
          <div className="num">72h</div>
          <div className="label">Délai de réponse moyen</div>
        </div>
        <div className="hero-stat">
          <div className="num">
            100<span>%</span>
          </div>
          <div className="label">Sur-mesure</div>
        </div>
      </div>
    </section>
  );
}
