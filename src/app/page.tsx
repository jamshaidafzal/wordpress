
import Header from "@/components/header/page";
import Hero from "@/components/hero/page";
import Partners from "@/components/partners/page";
import Services from "@/components/services/page";
import Testimonials from "@/components/testimonials/page";
import Hiring from "@/components/hiring/page";
import Faqsdisplay from "@/components/faqsdisplay/faqsdisplay";
import BOOKUS from "@/components/bookus/page";
import Footer from "@/components/footer/page";





export default function Home() {
  return (
    <div >
      <Header />
      <Hero />
      <Partners />
      <Services />
      <Testimonials />
      <Hiring />
      <Faqsdisplay />
      <BOOKUS />
      <Footer />
    </div>
  );
}
