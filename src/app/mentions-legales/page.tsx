import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales — SolutionsTech",
  description:
    "Informations légales et conditions d’utilisation du site SolutionsTech.",
};

function Placeholder({ children }: { children: string }) {
  return <span className="legal-placeholder">{children}</span>;
}

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="legal-row">
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

export default function MentionsLegalesPage() {
  return (
    <div className="legal-page">
      <nav className="legal-nav">
        <Link href="/" className="logo">
          Solutions<span>Tech</span>
        </Link>
        <div className="legal-nav-links">
          <Link href="/#services" className="legal-nav-link">
            Services
          </Link>
          <Link href="/#realisations" className="legal-nav-link">
            Réalisations
          </Link>
          <Link href="/#contact" className="nav-cta">
            Contact
          </Link>
        </div>
      </nav>

      <main className="legal-main">
        <header className="legal-hero">
          <div className="section-tag">Légal</div>
          <h1 className="section-title">Mentions légales</h1>
          <p className="legal-lead">
            Ces mentions légales précisent notamment l’identité de l’éditeur,
            l’hébergement, les conditions d’utilisation, et les informations
            relatives aux données personnelles.
          </p>
        </header>

        <div className="legal-grid">
          <section className="legal-card" aria-labelledby="legal-editeur">
            <h2 className="legal-card-title" id="legal-editeur">
              Éditeur du site
            </h2>
            <dl className="legal-dl">
              <Field label="Nom / Société" value={<span>Kouassi</span>} />
              <Field
                label="Responsable de publication"
                value={<Placeholder>Yao Adjoumani Olivier Kouassi</Placeholder>}
              />
              <Field label="Adresse" value={<Placeholder>151 COURS DU MEDOC 33300 BORDEAUX</Placeholder>} />
              <Field label="SIRET" value={<Placeholder>10303785900016</Placeholder>} />
              <Field
                label="Email"
                value={
                  <a href="mailto:contact@solutionstech.fr">
                    contact@solutionstech.fr
                  </a>
                }
              />
              <Field
                label="Site web"
                value={
                  <a
                    href="https://solutionstech.fr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://solutionstech.fr
                  </a>
                }
              />
            </dl>
            <p className="legal-note">
              Conformément à l’article 6 de la loi n°2004-575 du 21 juin 2004
              pour la confiance dans l’économie numérique (LCEN).
            </p>
          </section>

          <section className="legal-card" aria-labelledby="legal-hosting">
            <h2 className="legal-card-title" id="legal-hosting">
              Hébergement
            </h2>
            <dl className="legal-dl">
              <Field label="Hébergeur" value={<span>LWS (Ligne Web Services)</span>} />
              <Field label="Adresse" value={<Placeholder>12 rue des violettes 33700 Merignac</Placeholder>} />
              <Field
                label="Site web"
                value={
                  <a
                    href="https://www.lws.fr/hebergement_web.php"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://www.lws.fr/hebergement_web.php
                  </a>
                }
              />
            </dl>
          </section>

          <section className="legal-card legal-card--full" aria-labelledby="legal-usage">
            <h2 className="legal-card-title" id="legal-usage">
              Conditions d’utilisation
            </h2>
            <div className="legal-body">
              <p>
                Le site est accessible 24h/24, 7j/7, sauf interruption pour
                maintenance technique ou cas de force majeure. SolutionsTech
                s’efforce de fournir des informations aussi exactes que possible
                mais ne garantit pas l’exhaustivité ni l’absence d’erreurs.
              </p>
              <p>
                L’utilisateur est responsable de l’usage qu’il fait des
                informations et contenus disponibles sur le site.
              </p>
            </div>
          </section>

          <section className="legal-card legal-card--full" aria-labelledby="legal-ip">
            <h2 className="legal-card-title" id="legal-ip">
              Propriété intellectuelle
            </h2>
            <div className="legal-body">
              <p>
                Sauf mention contraire, l’ensemble des contenus présents sur le
                site (textes, visuels, logos, éléments graphiques, etc.) est
                protégé par le droit d’auteur et demeure la propriété exclusive
                de SolutionsTech ou de ses partenaires.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication ou
                adaptation — totale ou partielle — est interdite sans
                autorisation écrite préalable.
              </p>
            </div>
          </section>

          <section className="legal-card legal-card--full" aria-labelledby="legal-data">
            <h2 className="legal-card-title" id="legal-data">
              Données personnelles
            </h2>
            <div className="legal-body">
              <p>
                De manière générale, vous pouvez visiter le site sans fournir
                d’informations nominatives. Certaines fonctionnalités (par
                exemple, le formulaire de contact) peuvent nécessiter la
                communication de données (nom, email, informations de projet).
              </p>
              <p>
                Les données transmises via le formulaire de contact sont
                utilisées uniquement pour répondre à votre demande et assurer le
                suivi associé. Le formulaire peut être opéré par un prestataire
                tiers (Web3Forms) afin d’assurer l’acheminement des messages.
              </p>
              <p>
                Conformément au RGPD et à la loi Informatique et Libertés, vous
                disposez d’un droit d’accès, de rectification, d’opposition,
                d’effacement et de portabilité. Pour exercer vos droits, vous
                pouvez écrire à{" "}
                <a href="mailto:contact@solutionstech.fr">
                  contact@solutionstech.fr
                </a>
                .
              </p>
            </div>
          </section>

          <section className="legal-card legal-card--full" aria-labelledby="legal-cookies">
            <h2 className="legal-card-title" id="legal-cookies">
              Cookies
            </h2>
            <div className="legal-body">
              <p>
                Le site peut utiliser des cookies ou technologies similaires
                pour améliorer l’expérience utilisateur, mesurer l’audience ou
                sécuriser certains parcours. Vous pouvez configurer votre
                navigateur pour refuser tout ou partie des cookies.
              </p>
              <p className="legal-hint">
                Astuce : si vous n’utilisez aucun outil de mesure d’audience, de
                publicité ou d’authentification, vous pouvez supprimer cette
                section.
              </p>
            </div>
          </section>

          <section className="legal-card legal-card--full" aria-labelledby="legal-links">
            <h2 className="legal-card-title" id="legal-links">
              Liens hypertextes
            </h2>
            <div className="legal-body">
              <p>
                Le site peut contenir des liens vers des sites tiers. SolutionsTech
                n’exerce aucun contrôle sur ces sites et ne saurait être tenue
                responsable de leur contenu, disponibilité ou pratiques.
              </p>
            </div>
          </section>

          <section className="legal-card legal-card--full" aria-labelledby="legal-law">
            <h2 className="legal-card-title" id="legal-law">
              Droit applicable et litiges
            </h2>
            <div className="legal-body">
              <p>
                Les présentes mentions légales sont soumises au droit français.
                En cas de litige, et à défaut de résolution amiable, les
                tribunaux compétents seront ceux du ressort du siège de
                l’éditeur du site.
              </p>
            </div>
          </section>
        </div>

        <p className="legal-updated">Dernière mise à jour : <Placeholder>À compléter</Placeholder></p>
      </main>
    </div>
  );
}
