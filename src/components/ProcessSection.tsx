"use client";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Découverte &amp; cadrage",
      description:
        "Un premier échange gratuit pour comprendre vos objectifs, votre marché et vos contraintes. On définit ensemble le périmètre exact du projet.",
    },
    {
      number: "02",
      title: "Conception &amp; maquettes",
      description:
        "Wireframes et maquettes graphiques pour valider l'architecture, l'UX et le design avant tout développement. Aucune mauvaise surprise.",
    },
    {
      number: "03",
      title: "Développement agile",
      description:
        "Livraisons itératives avec points réguliers. Vous suivez l'avancement en temps réel et validez chaque étape avant de passer à la suivante.",
    },
    {
      number: "04",
      title: "Mise en ligne &amp; suivi",
      description:
        "Déploiement soigné, tests complets, et accompagnement post-lancement. Nous restons disponibles pour faire évoluer votre projet.",
    },
  ];

  return (
    <section id="process">
      <div className="section-tag">Notre méthode</div>
      <h2 className="section-title">Un projet web clair, de A à Z</h2>
      <p className="section-desc">
        Nous avons structuré notre processus pour que vous sachiez toujours où en est votre projet et ce qu’il se passe ensuite.
      </p>

      <div className="process-steps">
        {steps.map((step, idx) => (
          <div key={idx} className="process-step">
            <div className="step-num">{step.number}</div>
            <div className="step-divider"></div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
