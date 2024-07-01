
import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-container">
        <Link href="/"className="hero-logo" data-aos="zoom-in">
            <img
              src="/assets/img/hero-logo.jpg"
              alt="Ketan Brothers Logo"
           />
        </Link>
        <h1 data-aos="zoom-in">Welcome To Ketan Brothers</h1>
        <h2 data-aos="fade-up">
          Diamonds Beyond Imagination: Crafting Excellence Since 1969
        </h2>
        <Link
          href="#about"
          className="btn-get-started scrollto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
