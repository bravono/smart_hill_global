import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <CTASection />
    </main>
  );
}
