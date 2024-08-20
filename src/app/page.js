"use client";
import Script from "next/script";
import "@/../public/assets/vendor/bootstrap/css/bootstrap.min.css";
import "@/../public/assets/vendor/aos/aos.css";
import "@/../public/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "@/../public/assets/vendor/boxicons/css/boxicons.min.css";
import "./globals.css";


import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { useEffect } from "react";
import aos from "../../public/assets/vendor/aos/aos";
import AboutUs from "@/components/Aboutus";
import History from "@/components/History";
import Services from "@/components/Services";
import Featured from "@/components/Featured";
import Ethos from "@/components/Ethos";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Sustainability from "@/components/Sustainability";
import Footer from "@/components/Footer";
import Link from "next/link";
import Team from "@/components/Team";

export default function Home() {
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <>
      <Hero />
      <Header />
      <main id="main">
        <AboutUs />
        <History />
        <Ethos />
        <Services />
        <Featured />
        <Testimonials />
        {/* <Clients/> */}

        <Team />
        <Contact />
        <Sustainability />
      </main>
      <Footer />
      <Link
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </Link>
      <Script src="assets/vendor/aos/aos.js"></Script>
      <Script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>
      <Script src="assets/vendor/glightbox/js/glightbox.min.js"></Script>

      {/* <!-- Template Main JS File --> */}
      <Script src="assets/js/main.js"></Script>
    </>
  );
}
