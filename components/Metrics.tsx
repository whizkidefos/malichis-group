import { Users, Building, Award, Sparkles } from 'lucide-react';

const metrics = [
  {
    icon: Building,
    value: '500+',
    label: 'Properties Managed',
    description: 'Across residential and commercial sectors'
  },
  {
    icon: Users,
    value: '10,000+',
    label: 'Happy Clients',
    description: 'Trusted by thousands nationwide'
  },
  {
    icon: Sparkles,
    value: '25,000+',
    label: 'Cleaning Projects',
    description: 'Professional cleaning services delivered'
  },
  {
    icon: Award,
    value: '15+',
    label: 'Years Experience',
    description: 'Of excellence and dedication'
  }
];

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
              className="relative group bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand to-emerald-500 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-300" />
              <div className="relative">
                <metric.icon className="h-10 w-10 text-brand mb-4" />
                <div className="flex flex-col items-start">
                  <span className="text-4xl font-bold text-gray-900">{metric.value}</span>
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