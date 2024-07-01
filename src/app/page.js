"use client";
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

        <Team/>
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
    </>
  );
}
