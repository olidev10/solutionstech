"use client";

import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <Link href="#" className="logo">
        Solutions<span>Tech</span>
      </Link>
      <ul>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#process">Méthode</a>
        </li>
        <li>
          <a href="#realisations">Réalisations</a>
        </li>
        <li>
          <a href="#temoignages">Avis</a>
        </li>
        <li>
          <a href="#contact" className="nav-cta">
            Démarrer un projet
          </a>
        </li>
      </ul>
    </nav>
  );
}
