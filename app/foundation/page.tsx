import PageHeader from '@/components/PageHeader';
import { Users, GraduationCap, Sprout, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const initiatives = [
  {
    icon: Users,
    title: 'Community Support',
    description: 'Empowering local communities through various support programs.',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Providing educational opportunities and scholarships.',
  },
  {
    icon: Sprout,
    title: 'Sustainability',
    description: 'Promoting environmental awareness and sustainable practices.',
  },
];

export default function FoundationPage() {
  return (
    <main>
      <PageHeader
        title="Malichis Foundation"
        description="Making a positive impact in our communities"
        image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {initiatives.map((initiative) => (
              <div key={initiative.title} className="text-center">
                <initiative.icon className="h-12 w-12 text-brand mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">{initiative.title}</h3>
                <p className="text-gray-600">{initiative.description}</p>
              </div>
            ))}
          </div>

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