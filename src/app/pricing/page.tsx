import PricingCard from '@/components/pricing-card';

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col gap-10 px-4 sm:px-8 md:px-16 lg:px-20 py-16">
      <h1 className="text-center text-3xl sm:text-4xl lg:text-6xl font-alegreya">
        Our Pricing Plans
      </h1>

      <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto">
        Choose the perfect plan for your business needs. All plans come with our
        award-winning customer support.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PricingCard
          title="Starter"
          price="$99"
          description="Perfect for small businesses and startups"
          features={[
            'Up to 5 users',
            'Basic support',
            '1 project',
            '5GB storage',
          ]}
        />
        <PricingCard
          title="Professional"
          price="$199"
          description="Ideal for growing businesses"
          features={[
            'Up to 20 users',
            'Priority support',
            '5 projects',
            '20GB storage',
            'Advanced analytics',
          ]}
          highlighted={true}
        />
        <PricingCard
          title="Enterprise"
          price="Custom"
          description="For large-scale operations"
          features={[
            'Unlimited users',
            '24/7 dedicated support',
            'Unlimited projects',
            'Unlimited storage',
            'Custom integrations',
            'On-premise deployment option',
          ]}
        />
      </div>
    </div>
  );
}
