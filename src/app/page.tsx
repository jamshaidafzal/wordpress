"use client";

import { motion } from "framer-motion";
import Header from "@/components/header/page";
import Hero from "@/components/hero/page";
import Partners from "@/components/partners/page";
import Services from "@/components/services/page";
import Testimonials from "@/components/testimonials/page";
import Hiring from "@/components/hiring/page";
import Faqsdisplay from "@/components/faqsdisplay/faqsdisplay";
import BOOKUS from "@/components/bookus/page";
import Footer from "@/components/footer/page";
import { AnimatedSection } from "@/components/animatedSection/Page";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <div>
      <AnimatedSection>
        <Header />
      </AnimatedSection>

      <AnimatedSection>
        <Hero />
      </AnimatedSection>

      <AnimatedSection>
        <Partners />
      </AnimatedSection>

      <AnimatedSection>
        <Services />
      </AnimatedSection>

      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>

      <AnimatedSection>
        <Hiring />
      </AnimatedSection>

      <AnimatedSection>
        <Faqsdisplay />
      </AnimatedSection>

      <AnimatedSection>
        <BOOKUS />
      </AnimatedSection>
      
      <AnimatedSection>
        <Footer />
      </AnimatedSection>

    </div>
  );
}
