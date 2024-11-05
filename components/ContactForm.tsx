"use client";

import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  service: '',
  message: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setStatus('success');
      setFormData(initialFormData);
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
          value={formData.name}
          onChange={handleChange}
          disabled={status === 'submitting'}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
          value={formData.email}
          onChange={handleChange}
          disabled={status === 'submitting'}
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700">
          Service Interest
        </label>
        <select
          name="service"
          id="service"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
          value={formData.service}
          onChange={handleChange}
          disabled={status === 'submitting'}
        >
          <option value="">Select a service</option>
          <option value="properties">Properties</option>
          <option value="cleaning">Cleaning Services</option>
          <option value="foundation">Foundation</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
          value={formData.message}
          onChange={handleChange}
          disabled={status === 'submitting'}
        />
      </div>

      {status === "error" && (
        <div className="text-red-600 text-sm">{errorMessage}</div>
      )}

      {status === 'success' && (
        <div className="text-brand text-sm">Message sent successfully! We'll get back to you soon.</div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-brand hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <>
            Sending...
            <Loader2 className="ml-2 h-5 w-5 animate-spin" />
          </>
        ) : (
          <>
            Send Message
            <Send className="ml-2 h-5 w-5" />
          </>
        )}
      </button>
    </form>
  );
}