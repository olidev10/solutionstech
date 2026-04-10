import { fetchServices } from "@/lib/sheets";

export default async function ServicesSection() {
  const services = await fetchServices();

  return (
    <section id="services">
      <div className="section-tag">Nos expertises</div>
      <h2 className="section-title">Des solutions digitales complètes et sur-mesure</h2>
      <p className="section-desc">
        De la stratégie à la mise en ligne, nous couvrons l&apos;intégralité de votre projet web avec des technologies modernes et éprouvées.
      </p>

      <div className="services-grid">
        {services.length > 0 ? (
          services.map((service, idx) => (
            <div key={idx} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-tech">
                {service.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1' }}>Chargement des services...</p>
        )}
      </div>
    </section>
  );
}
