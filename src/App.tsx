import { About } from '@/components/About';
import { Gallery } from '@/components/Gallery';
import { Hero } from '@/components/Hero';
import { MoodBoard } from '@/components/MoodBoard';
import { Nav } from '@/components/Nav';
import { Services } from '@/components/Services';
// import { Testimonials } from "@/components/Testimonials";
import { Contact } from '@/components/Contact';
import { Faq } from '@/components/Faq';
import { Footer } from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Services />
        <MoodBoard />
        <Gallery />
        <About />
        {/* <Testimonials /> */}
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
