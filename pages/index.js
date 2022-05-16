import Hero from "../components/hero/hero";
import Features from "../components/features/features";
import CTA from "../components/CTA/cta";
import TestimonialsPreview from "../components/testimonials/testimonialsPreview";
import Promo from "../components/promo/promo";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Promo />
      <TestimonialsPreview />
      <CTA />
      <Footer />
    </main>
  );
}
