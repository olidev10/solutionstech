"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Link href="#" className="footer-logo">
        Solutions<span>Tech</span>
      </Link>

      <div className="footer-links">
        <a href="#services">Services</a>
        <a href="#realisations">Réalisations</a>
        <a href="#contact">Contact</a>
        <a href="#">Mentions légales</a>
      </div>

      <div className="footer-copy">© 2025 SolutionsTech · solutionstech.fr</div>
    </footer>
  );
}
