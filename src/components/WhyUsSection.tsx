"use client";

export default function WhyUsSection() {
  const reasons = [
    {
      title: "Code propriétaire, jamais de template",
      description:
        "Chaque site est développé sur-mesure. Vous obtenez une performance et une flexibilité impossibles avec les solutions clés-en-main.",
    },
    {
      title: "Interlocuteur unique du début à la fin",
      description:
        "Pas de chef de projet intermédiaire : vous parlez directement au développeur qui construit votre projet.",
    },
    {
      title: "Délais tenus, budget respecté",
      description:
        "Planification rigoureuse et communication transparente à chaque étape. Les mauvaises surprises, c'est pas notre style.",
    },
    {
      title: "Technologies modernes &amp; pérennes",
      description:
        "Stack moderne et maintenu : Next.js, Supabase, Vercel. Votre site sera toujours rapide et facile à faire évoluer.",
    },
  ];

  return (
    <section id="pourquoi">
      <div className="section-tag">Pourquoi SolutionsTech</div>
      <div className="why-grid">
        <div>
          <h2 className="section-title">Ce qui nous rend différents</h2>
          <p className="section-desc">
            Pas de sous-traitance opaque, pas de templates génériques. Chaque projet est développé en interne, avec soin.
          </p>

          <div className="why-list">
            {reasons.map((reason, idx) => (
              <div key={idx} className="why-item">
                <div className="why-check">✓</div>
                <div>
                  <h4>{reason.title}</h4>
                  <p>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="why-visual">
          <div>
            <div style={{ fontSize: "0.75rem", color: "var(--muted)", marginBottom: "0.5rem" }}>
              Performance Lighthouse
            </div>
            <div className="score-badge">98</div>
            <div style={{ fontSize: "0.72rem", color: "var(--muted)", marginTop: "0.2rem" }}>
              Score moyen de nos sites
            </div>
          </div>
          <div className="perf-bars">
            {[
              { name: "Performance", value: 98, color: "var(--accent)" },
              { name: "Accessibilité", value: 96, color: "var(--accent2)" },
              { name: "Bonnes pratiques", value: 100, color: "var(--accent)" },
              { name: "SEO", value: 100, color: "var(--accent)" },
            ].map((metric, idx) => (
              <div key={idx} className="perf-row">
                <div className="perf-name">{metric.name}</div>
                <div className="perf-track">
                  <div className="perf-fill" style={{ width: `${metric.value}%`, background: metric.color }} />
                </div>
                <div className="perf-val">{metric.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
