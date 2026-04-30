import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import TheSystem from '@/components/TheSystem';
import Phases from '@/components/Phases';
import Department from '@/components/Department';
import Proof from '@/components/Proof';
import Packages from '@/components/Packages';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main style={{ background: 'white' }}>
      <Navbar />
      <Hero />
      <Problem />
      <TheSystem />
      <Phases />
      <Department />
      <Proof />
      <Packages />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
