"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import AccredianEdge from "@/components/AccredianEdge";
import DomainExpertise from "@/components/DomainExpertise";
import ProgramSegmentation from "@/components/ProgramSegmentation";
import CATFramework from "@/components/CATFramework";
import HowItWorks from "@/components/HowItWorks";
import FAQs from "@/components/FAQs";
import Testimonials from "@/components/Testimonials";
import EnquireModal from "@/components/EnquireModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar onEnquireClick={() => setModalOpen(true)} />

      <main>
        <Hero onEnquireClick={() => setModalOpen(true)} />
        <Stats />
        <Clients />
        <AccredianEdge />
        <DomainExpertise />
        <ProgramSegmentation />
        <CATFramework />
        <HowItWorks />
        <Testimonials />
        <FAQs />
      </main>

      <Footer onEnquireClick={() => setModalOpen(true)} />

      <EnquireModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
