"use client";

export default function ProjectsSection() {
  const projects = [
    {
      type: "Site vitrine · Cabinet d'avocats",
      title: "Cabinet Lefebvre &amp; Associés",
      description:
        "Refonte complète avec SEO local, espace client sécurisé et formulaire de prise de rendez-vous en ligne.",
      bgColor: "#0a0a0f",
      accentColor: "rgba(110,231,183,0.3)",
    },
    {
      type: "Application web · SaaS",
      typeColor: "var(--accent2)",
      title: "GestPro Dashboard",
      description:
        "Plateforme de gestion pour PME avec tableaux de bord temps réel, facturation automatisée et gestion des équipes.",
      bgColor: "#13131a",
      accentColor: "rgba(129,140,248,0.35)",
    },
    {
      type: "E-commerce · Artisanat local",
      title: "Terroir du Sud",
      description:
        "Boutique en ligne pour producteurs locaux du Languedoc, paiement sécurisé et gestion des livraisons intégrée.",
      bgColor: "#0f1a14",
      accentColor: "rgba(110,231,183,0.4)",
    },
  ];

  return (
    <section id="realisations">
      <div className="section-tag">Portfolio</div>
      <h2 className="section-title">Quelques projets récents</h2>
      <p className="section-desc">
        Des réalisations concrètes pour des clients de secteurs variés — chaque projet est unique et adapté aux besoins réels.
      </p>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <div
              className="project-thumb"
              style={{ backgroundColor: project.bgColor }}
            >
              <div className="mock-screen">
                <div className="mock-bar">
                  <div className="dot" style={{ background: "#ff5f57" }} />
                  <div className="dot" style={{ background: "#febc2e" }} />
                  <div className="dot" style={{ background: "#28c840" }} />
                </div>
                <div className="mock-content">
                  <div
                    className="mock-line accent"
                    style={{ background: project.accentColor, width: idx === 2 ? "65%" : idx === 1 ? "50%" : "40%" }}
                  />
                  <div className="mock-line" style={{ width: "90%" }} />
                  <div className="mock-line" style={{ width: idx === 2 ? "75%" : "60%" }} />
                  {idx === 1 && (
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px", marginTop: "4px" }}>
                      <div
                        style={{
                          height: "28px",
                          borderRadius: "4px",
                          background: "rgba(129,140,248,0.15)",
                        }}
                      />
                      <div
                        style={{
                          height: "28px",
                          borderRadius: "4px",
                          background: "rgba(255,255,255,0.05)",
                        }}
                      />
                    </div>
                  )}
                  {idx === 2 && (
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gap: "3px",
                        marginTop: "4px",
                      }}
                    >
                      <div
                        style={{
                          height: "20px",
                          borderRadius: "3px",
                          background: "rgba(110,231,183,0.1)",
                        }}
                      />
                      <div
                        style={{
                          height: "20px",
                          borderRadius: "3px",
                          background: "rgba(110,231,183,0.1)",
                        }}
                      />
                      <div
                        style={{
                          height: "20px",
                          borderRadius: "3px",
                          background: "rgba(110,231,183,0.1)",
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="project-info">
              <div
                className="project-type"
                style={
                  project.typeColor
                    ? { color: project.typeColor }
                    : {}
                }
              >
                {project.type}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
