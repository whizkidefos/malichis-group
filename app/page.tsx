import Hero from '@/components/Hero';
import Metrics from '@/components/Metrics';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <Metrics />
      <Services />
      <Testimonials />
    </main>
  );
}