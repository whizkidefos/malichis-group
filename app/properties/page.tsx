"use client";

import PageHeader from '@/components/PageHeader';
import ServiceFeature from '@/components/ServiceFeature';
import ServiceGallery from '@/components/ServiceGallery';
import { Building, Home, Building2, Key, Map, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: Home,
    title: 'Residential Properties',
    description: 'Luxurious homes and apartments designed for modern living, featuring premium amenities and thoughtful layouts.',
  },
  {
    icon: Building,
    title: 'Commercial Spaces',
    description: 'Prime office locations and retail spaces in strategic areas, perfect for businesses of all sizes.',
  },
  {
    icon: Building2,
    title: 'Property Management',
    description: 'Comprehensive management services for property owners, ensuring maximum value and tenant satisfaction.',
  },
  {
    icon: Key,
    title: 'Leasing Services',
    description: 'Professional leasing assistance with thorough tenant screening and efficient property showings.',
  },
  {
    icon: Map,
    title: 'Strategic Locations',
    description: 'Properties in prime locations with excellent accessibility and growth potential.',
  },
  {
    icon: Shield,
    title: 'Property Security',
    description: 'Advanced security systems and regular maintenance to protect your investment.',
  },
];

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800&h=600',
    alt: 'Modern Home',
    title: 'Luxury Residences',
    description: 'Contemporary homes with premium finishes and amenities',
  },
  {
    src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800&h=600',
    alt: 'Interior Design',
    title: 'Designer Interiors',
    description: 'Thoughtfully crafted spaces for modern living',
  },
  {
    src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800&h=600',
    alt: 'Office Space',
    title: 'Premium Office Spaces',
    description: 'Professional environments designed for productivity',
  },
  {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800&h=600',
    alt: 'Commercial Building',
    title: 'Commercial Properties',
    description: 'Strategic locations for business success',
  },
  {
    src: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&q=80&w=800&h=600',
    alt: 'Luxury Kitchen',
    title: 'Modern Amenities',
    description: 'State-of-the-art features in every property',
  },
  {
    src: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=800&h=600',
    alt: 'Building Exterior',
    title: 'Architectural Excellence',
    description: 'Distinctive designs that stand out',
  },
];

export default function PropertiesPage() {
  return (
    <main className="pb-20">
      <PageHeader
        title="Malichis Properties"
        description="Premium real estate solutions tailored to your needs"
        image="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Comprehensive Property Solutions</h2>
            <p className="mt-4 text-xl text-gray-600">
              From luxury residential properties to prime commercial spaces, we offer
              complete real estate solutions tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ServiceFeature
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
              />
            ))}
          </div>

          <ServiceGallery images={galleryImages} />

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