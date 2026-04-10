"use client";

export default function TestimonialsSection() {
  const testimonials = [
    {
      rating: 5,
      quote:
        "Équipe réactive, à l'écoute et de très bon conseil. Notre nouveau site a doublé nos demandes de contact en 3 mois. Je recommande sans hésiter.",
      author: "Sophie Mercier",
      role: "Directrice, Cabinet RH Lyon",
      initials: "SM",
    },
    {
      rating: 5,
      quote:
        "Notre boutique e-commerce a été livrée dans les délais avec une qualité de code impressionnante. Le taux de conversion a progressé de 40 % depuis le lancement.",
      author: "Thomas Kühn",
      role: "Fondateur, Terroir du Sud",
      initials: "TK",
    },
    {
      rating: 5,
      quote:
        "Un accompagnement sérieux et humain. On sentait que l'équipe comprenait vraiment nos enjeux métier, pas juste les aspects techniques.",
      author: "Amara Lopes",
      role: "CEO, StartupX Montpellier",
      initials: "AL",
    },
  ];

  return (
    <section id="temoignages">
      <div className="section-tag">Avis clients</div>
      <h2 className="section-title">Ce que disent nos clients</h2>
      <p className="section-desc">
        La satisfaction de nos clients est notre meilleure récompense.
      </p>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="testimonial">
            <div className="stars">★★★★★</div>
            <q>{testimonial.quote}</q>

            <div className="testimonial-author">
              <div className="author-avatar">{testimonial.initials}</div>
              <div>
                <div className="author-name">{testimonial.author}</div>
                <div className="author-role">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
