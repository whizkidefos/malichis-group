"use client";

import PageHeader from '@/components/PageHeader';
import ServiceFeature from '@/components/ServiceFeature';
import ServiceGallery from '@/components/ServiceGallery';
import { Heart, Users, GraduationCap, Sprout, HandHeart, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: Users,
    title: 'Community Support',
    description: 'Empowering local communities through various support programs and initiatives.',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Providing educational opportunities and scholarships to deserving students.',
  },
  {
    icon: Sprout,
    title: 'Sustainability',
    description: 'Promoting environmental awareness and sustainable practices in communities.',
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Supporting programs that improve community health and well-being.',
  },
  {
    icon: HandHeart,
    title: 'Volunteer Programs',
    description: 'Organizing volunteer opportunities for community engagement.',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Extending our reach to make a difference worldwide.',
  },
];

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800&h=600',
    alt: 'Community Event',
  },
  {
    src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800&h=600',
    alt: 'Education Program',
  },
  {
    src: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800&h=600',
    alt: 'Sustainability Initiative',
  },
  {
    src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=800&h=600',
    alt: 'Health Program',
  },
  {
    src: 'https://images.unsplash.com/photo-1559024922-9ade05850615?auto=format&fit=crop&q=80&w=800&h=600',
    alt: 'Volunteer Work',
  },
  {
    src: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=800&h=600',
    alt: 'Global Projects',
  },
];

export default function FoundationPage() {
  return (
    <main className="pb-20">
      <PageHeader
        title="Malichis Foundation"
        description="Making a positive impact in our communities"
        image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Initiatives</h2>
            <p className="mt-4 text-xl text-gray-600">
              Through various programs and initiatives, we're working to create lasting
              positive change in communities around the world.
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
              Get Involved
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}