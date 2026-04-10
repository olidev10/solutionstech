import { fetchProjects } from "@/lib/sheets";

export default async function ProjectsSection() {
  const projects = await fetchProjects();

  return (
    <section id="realisations">
      <div className="section-tag">Portfolio</div>
      <h2 className="section-title">Quelques projets récents</h2>
      <p className="section-desc">
        Des réalisations concrètes pour des clients de secteurs variés — chaque projet est unique et adapté aux besoins réels.
      </p>

      <div className="projects-grid">
        {projects.length > 0 ? (
          projects.map((project, idx) => (
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
                <div className="project-type">{project.type}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.url && (
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      display: 'inline-block',
                      marginTop: '12px',
                      color: 'rgba(110,231,183,0.9)',
                      textDecoration: 'none',
                      fontSize: '14px',
                      borderBottom: '1px solid rgba(110,231,183,0.5)',
                      transition: 'color 0.2s'
                    }}
                  >
                    Voir le projet →
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1' }}>Chargement des projets...</p>
        )}
      </div>
    </section>
  );
}
