'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SubmitBtn from '@/components/submit-btn';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col gap-16 px-4 sm:px-8 md:px-16 lg:px-20 py-16">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-alegreya text-center mb-8">
        Get in Touch
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-alegreya font-semibold mb-6">
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
              ></textarea>
            </div>
            <SubmitBtn className="w-full" />
          </form>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-alegreya font-semibold mb-4">
              Contact Information
            </h2>
            <div className="space-y-4">
              <p className="flex items-center">
                <MapPin className="mr-2" /> 123 Tech Street, Silicon Valley,
                NG/PT
              </p>
              <p className="flex items-center">
                <Phone className="mr-2" /> +1 (555) 123-4567
              </p>
              <p className="flex items-center">
                <Mail className="mr-2" /> info@softwareperk.com
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-alegreya font-semibold mb-4">
              Office Hours
            </h2>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday - Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
