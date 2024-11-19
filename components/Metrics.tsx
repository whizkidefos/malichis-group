"use client";

import { Users, Building, Award, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const metrics = [
  {
    icon: Building,
    value: 500,
    suffix: '+',
    label: 'Properties Managed',
    description: 'Across residential and commercial sectors'
  },
  {
    icon: Users,
    value: 10000,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Trusted by thousands nationwide'
  },
  {
    icon: Sparkles,
    value: 25000,
    suffix: '+',
    label: 'Cleaning Projects',
    description: 'Professional cleaning services delivered'
  },
  {
    icon: Award,
    value: 15,
    suffix: '+',
    label: 'Years Experience',
    description: 'Of excellence and dedication'
  }
];

function CountUp({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      const startTime = Date.now();
      const startValue = countRef.current;
      
      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease-out
        
        const currentValue = Math.floor(startValue + (end - startValue) * easeProgress);
        setCount(currentValue);
        countRef.current = currentValue;

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Metrics() {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Impact in Numbers</h2>
          <p className="mt-4 text-xl text-gray-600">Building trust through consistent excellence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-brand/10 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="relative">
                <metric.icon className="h-10 w-10 text-brand mb-4" />
                <div className="flex flex-col items-start">
                  <span className="text-4xl font-bold text-gray-900">
                    <CountUp end={metric.value} suffix={metric.suffix} />
                  </span>
                  <span className="text-lg font-semibold text-gray-900 mt-2">{metric.label}</span>
                  <span className="text-gray-600 mt-2">{metric.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}