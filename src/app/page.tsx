/* SmartICE Homepage */
/* v1.0.0 - Main landing page with all sections */

import Hero from "@/components/Hero";
import ProductMatrix from "@/components/ProductMatrix";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductMatrix />
      <Features />
      <Testimonials />
      <CTA />
    </>
  );
}
