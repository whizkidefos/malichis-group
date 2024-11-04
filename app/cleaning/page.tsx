import PageHeader from '@/components/PageHeader';
import { Sparkles, Home, Building, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Home,
    title: 'Residential Cleaning',
    description: 'Comprehensive cleaning services for homes and apartments.',
  },
  {
    icon: Building,
    title: 'Commercial Cleaning',
    description: 'Professional cleaning solutions for offices and retail spaces.',
  },
  {
    icon: Sparkles,
    title: 'Specialized Services',
    description: 'Deep cleaning, sanitization, and post-construction cleanup.',
  },
];

export default function CleaningPage() {
  return (
    <main>
      <PageHeader
        title="Malichis Cleaning Services"
        description="Professional cleaning solutions for every space"
        image="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service) => (
              <div key={service.title} className="text-center">
                <service.icon className="h-12 w-12 text-emerald-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-emerald-600 hover:bg-emerald-700 transition"
            >
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}