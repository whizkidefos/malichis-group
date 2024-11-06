"use client";

import { LucideIcon } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface ServiceFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceFeature({ icon: Icon, title, description, delay = 0 }: ServiceFeatureProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-brand/10 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300" />
        <div className="relative bg-white p-8 rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-300">
          <Icon className="h-12 w-12 text-brand mb-6" />
          <h3 className="text-xl font-semibold mb-4">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}