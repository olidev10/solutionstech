"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Link href="/" className="footer-logo">
        Solutions<span>Tech</span>
      </Link>

      <div className="footer-links">
        <Link href="/#services">Services</Link>
        <Link href="/#realisations">Réalisations</Link>
        <Link href="/#contact">Contact</Link>
        <Link href="/mentions-legales">Mentions légales</Link>
      </div>

      <div className="footer-copy">
        © {new Date().getFullYear()} SolutionsTech · solutionstech.fr
      </div>
    </footer>
  );
}
