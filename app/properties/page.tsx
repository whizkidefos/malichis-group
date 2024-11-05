import PageHeader from '@/components/PageHeader';
import { Building, Home, Building2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: Home,
    title: 'Residential Properties',
    description: 'Luxurious homes and apartments designed for modern living.',
  },
  {
    icon: Building,
    title: 'Commercial Spaces',
    description: 'Prime office locations and retail spaces in strategic areas.',
  },
  {
    icon: Building2,
    title: 'Property Management',
    description: 'Comprehensive management services for property owners.',
  },
];

export default function PropertiesPage() {
  return (
    <main>
      <PageHeader
        title="Malichis Properties"
        description="Premium real estate solutions tailored to your needs"
        image="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <feature.icon className="h-12 w-12 text-brand mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-brand hover:bg-brand-700 transition"
            >
              Schedule a Viewing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}