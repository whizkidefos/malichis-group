"use client";

import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['Happy Land Estate', 'Lekki', 'Lagos', 'Nigeria'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+234 806 461 0905', 'Mon-Fri: 9am-6pm'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['malichisgroup@gmail.com', 'malichisproperties@gmail.com'],
  },
];

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        title="Contact Us"
        description="Get in touch with our team"
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-12">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start">
                    <item.icon className="h-6 w-6 text-brand mt-1" />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      {item.details.map((detail) => (
                        <p key={detail} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}