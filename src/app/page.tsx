import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import TheSystem from '@/components/TheSystem';
import TheBeachhead from '@/components/TheBeachhead';
import Phases from '@/components/Phases';
import OpsHub from '@/components/OpsHub';
import ValueProps from '@/components/ValueProps';
import Partnership from '@/components/Partnership';
import Department from '@/components/Department';
import Proof from '@/components/Proof';
import Packages from '@/components/Packages';
import PricingComparison from '@/components/PricingComparison';
import Ownership from '@/components/Ownership';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main style={{ background: '#ffffff' }}>
      <Navbar />
      <Hero />
      <Problem />
      <TheSystem />
      <TheBeachhead />
      <Phases />
      <OpsHub />
      <ValueProps />
      <Partnership />
      <Department />
      <Proof />
      <Packages />
      <PricingComparison />
      <Ownership />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
