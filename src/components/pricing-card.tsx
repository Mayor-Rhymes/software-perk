import { Check } from 'lucide-react';
import Link from 'next/link';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`bg-white shadow-md rounded-lg p-6 flex flex-col ${
        highlighted ? 'border-2 border-lime-500 scale-105' : ''
      }`}
    >
      <h2 className="font-alegreya text-2xl mb-2">{title}</h2>
      <p className="font-alegreya text-4xl mb-4">
        {price}
        <span className="text-sm text-gray-500">/month</span>
      </p>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <Check className="text-lime-500 mr-2" size={16} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link href="/contact">
      <button
        className={`mt-6 px-6 py-2 rounded-full text-white ${
          highlighted
            ? 'bg-lime-500 hover:bg-lime-600'
            : 'bg-black hover:bg-gray-800'
        } transition-colors`}
        type="button"
      >
        Choose Plan
      </button>
      </Link>
    </div>
  );
}
