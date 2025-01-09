'use client';

import { MapPin, Phone, Mail } from 'lucide-react';
import SubmitBtn from '@/components/submit-btn';
import { sendEmail } from '@/actions/sendEmail';
import { toast } from 'sonner';
import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Contact NexGenesis - Get in Touch</title>
        <meta
          name="description"
          content="Contact NexGenesis for software solutions and inquiries. Reach out to us via email, phone, or visit our office in Lisbon, Portugal."
        />
        <meta name="keywords" content="Contact NexGenesis, software solutions, Lisbon, email, phone" />
        <meta name="author" content="NexGenesis Team" />

        {/* Open Graph Metadata */}
        <meta property="og:title" content="Contact NexGenesis - Get in Touch" />
        <meta
          property="og:description"
          content="Contact NexGenesis for innovative software solutions. Reach out via email, phone, or visit our Lisbon office."
        />
        <meta property="og:url" content="https://nexgenesis.dev/contact" />
        <meta property="og:type" content="website" />

        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "ContactPage",
            name: "NexGenesis Contact Page",
            address: {
              "@type": "PostalAddress",
              streetAddress: "61 Avenida Street",
              addressLocality: "Lisbon",
              addressCountry: "Portugal",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+351910161304",
              email: "info@softwareperk.com",
              contactType: "Customer Support",
              areaServed: "Global",
            },
          })}
        </script>
      </Head>

      <div className="min-h-screen bg-background flex flex-col gap-16 px-4 sm:px-8 md:px-16 lg:px-20 py-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-alegreya text-center mb-8">
          Get in Touch
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-background shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-alegreya font-semibold mb-6">
              Send us a Message
            </h2>
            <form
              className="space-y-6"
              action={async (formData) => {
                const { data, error } = await sendEmail(formData);

                if (error) {
                  toast.error(error);
                  return;
                }

                toast.success('Email sent successfully!');

                const form = document.querySelector('form') as HTMLFormElement;
                form.reset();
              }}
            >
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
                  required
                  maxLength={500}
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
                  name="senderEmail"
                  maxLength={500}
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
                  maxLength={5000}
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
                  <MapPin className="mr-2" aria-hidden="true" />{' '}
                  <span>61 Avenida Street, Lisbon, Portugal</span>
                </p>
                <p className="flex items-center">
                  <Phone className="mr-2" aria-hidden="true" />{' '}
                  <span>+351 (910) 161-304</span>
                </p>
                <p className="flex items-center">
                  <Mail className="mr-2" aria-hidden="true" />{' '}
                  <span>info@softwareperk.com</span>
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
    </>
  );
}
