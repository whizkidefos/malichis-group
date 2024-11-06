"use client";

import Link from 'next/link';
import { ArrowRight, Building, Sparkles, Heart, ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('services');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-3" ref={parallaxRef}>
        <div className="relative h-full">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80"
            alt="Properties"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-brand/80" />
        </div>
        <div className="relative h-full">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80"
            alt="Cleaning"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-brand/80" />
        </div>
        <div className="relative h-full">
          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80"
            alt="Foundation"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-brand/80" />
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in">
            Building a Better Future Together
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-fade-in animation-delay-200">
            From property management to community development, we're committed to excellence
            in everything we do.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-400">
            <Link
              href="/contact"
              className="btn btn-primary bg-white text-brand hover:bg-gray-100"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="#services"
              className="btn btn-secondary bg-transparent text-white border-white hover:bg-white/10"
            >
              Our Services
            </Link>
          </div>
          
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in animation-delay-600">
            <div className="flex items-center space-x-3 text-white">
              <Building className="h-8 w-8" />
              <div>
                <p className="font-semibold">Properties</p>
                <p className="text-sm text-white/80">Premium real estate</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <Sparkles className="h-8 w-8" />
              <div>
                <p className="font-semibold">Cleaning</p>
                <p className="text-sm text-white/80">Professional services</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <Heart className="h-8 w-8" />
              <div>
                <p className="font-semibold">Foundation</p>
                <p className="text-sm text-white/80">Community impact</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </div>
  );
}