import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Showcase3D from "@/components/Showcase3D";
import Services from "@/components/Services";
import ZoomMoment from "@/components/ZoomMoment";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-canvas">
      <ScrollProgress />
      <Nav />
      <Hero />
      <Marquee />
      <Showcase3D />
      <Services />
      <ZoomMoment />
      <Work />
      <Testimonials />
      <Process />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
