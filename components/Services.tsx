import Link from 'next/link';
import { Building, Sparkles, Heart, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Building,
      title: 'Malichis Properties',
      description: 'Premium real estate solutions with a focus on quality and customer satisfaction.',
      link: '/properties',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800&h=600'
    },
    {
      icon: Sparkles,
      title: 'Malichis Cleaning',
      description: 'Professional cleaning services for residential and commercial spaces.',
      link: '/cleaning',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800&h=600'
    },
    {
      icon: Heart,
      title: 'Malichis Foundation',
      description: 'Making a positive impact through community development and support.',
      link: '/foundation',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=800&h=600'
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">Comprehensive solutions for all your needs</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-gray-900/0" />
              </div>
              <div className="absolute bottom-0 p-6 text-white">
                <service.icon className="h-8 w-8 mb-3" />
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-2 text-gray-200">{service.description}</p>
                <Link
                  href={service.link}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-white hover:text-emerald-300 transition"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}