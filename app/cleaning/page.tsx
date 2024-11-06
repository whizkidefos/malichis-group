"use client";

import PageHeader from '@/components/PageHeader';
import ServiceFeature from '@/components/ServiceFeature';
import ServiceGallery from '@/components/ServiceGallery';
import { Sparkles, Home, Building, Clock, Shield, Leaf, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: Home,
    title: 'Residential Cleaning',
    description: 'Comprehensive cleaning services for homes and apartments, tailored to your schedule and preferences.',
  },
  {
    icon: Building,
    title: 'Commercial Cleaning',
    description: 'Professional cleaning solutions for offices, retail spaces, and commercial properties.',
  },
  {
    icon: Sparkles,
    title: 'Deep Cleaning',
    description: 'Thorough deep cleaning services to restore and refresh your space.',
  },
  {
    icon: Shield,
    title: 'Sanitization',
    description: 'Advanced sanitization services using hospital-grade disinfectants.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Convenient scheduling options to fit your busy lifestyle.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Options',
    description: 'Environmentally conscious cleaning solutions for a healthier space.',
  },
];

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800&h=600',
    alt: 'Professional Cleaning',
  },
  {
    src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800&h=600',
    alt: 'Office Cleaning',
  },
  {
    src: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800&h=600',
    alt: 'Deep Cleaning',
  },
  {
    src: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=800&h=600',
    alt: 'Residential Cleaning',
  },
  {
    src: 'https://images.unsplash.com/photo-1596239911411-a386668649ad?auto=format&fit=crop&q=80&w=800&h=600',
    alt: 'Sanitization',
  },
  {
    src: 'https://images.unsplash.com/photo-1584622781867-1c5fe028804e?auto=format&fit=crop&q=80&w=800&h=600',
    alt: 'Green Cleaning',
  },
];

export default function CleaningPage() {
  return (
    <main className="pb-20">
      <PageHeader
        title="Malichis Cleaning Services"
        description="Professional cleaning solutions for every space"
        image="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Professional Cleaning Services</h2>
            <p className="mt-4 text-xl text-gray-600">
              We deliver exceptional cleaning services with attention to detail and
              commitment to quality.
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
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}