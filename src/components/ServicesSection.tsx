"use client";

export default function ServicesSection() {
  const services = [
    {
      icon: "🌐",
      title: "Création de site web",
      description:
        "Sites vitrine, institutionnels et landing pages performants, optimisés SEO et adaptés à tous les écrans. Design soigné, chargement rapide.",
      tags: ["Next.js", "React", "Tailwind", "Vercel"],
    },
    {
      icon: "🛒",
      title: "E-commerce",
      description:
        "Boutiques en ligne complètes avec gestion des stocks, paiements sécurisés et interface d'administration intuitive pour booster vos ventes.",
      tags: ["Shopify", "WooCommerce", "Stripe"],
    },
    {
      icon: "📱",
      title: "Applications mobiles",
      description:
        "Applications iOS et Android natives ou cross-platform, avec une expérience utilisateur fluide et intuitive pour vos clients.",
      tags: ["React Native", "Expo", "Firebase"],
    },
    {
      icon: "⚙️",
      title: "Applications web sur-mesure",
      description:
        "Plateformes métier, SaaS, dashboards et outils internes développés avec des architectures robustes et évolutives.",
      tags: ["Next.js", "Supabase", "Python", "API REST"],
    },
    {
      icon: "🤖",
      title: "Intégration IA &amp; Automatisation",
      description:
        "Intégration d'intelligence artificielle dans vos outils existants, chatbots, génération de contenu et automatisation de vos processus métier.",
      tags: ["OpenAI", "Claude API", "n8n", "Python"],
    },
    {
      icon: "📈",
      title: "SEO &amp; Marketing digital",
      description:
        "Référencement naturel, stratégie de contenu et optimisation des performances pour générer du trafic qualifié et convertir vos visiteurs.",
      tags: ["Google Search", "Analytics", "Core Web Vitals"],
    },
  ];

  return (
    <section id="services">
      <div className="section-tag">Nos expertises</div>
      <h2 className="section-title">Des solutions digitales complètes et sur-mesure</h2>
      <p className="section-desc">
        De la stratégie à la mise en ligne, nous couvrons l'intégralité de votre projet web avec des technologies modernes et éprouvées.
      </p>

      <div className="services-grid">
        {services.map((service, idx) => (
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
        ))}
      </div>
    </section>
  );
}
