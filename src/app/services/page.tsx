import ServiceCard from "@/components/service-card";




export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col gap-10 px-4 sm:px-8 md:px-16 lg:px-20 py-16">
      <h1 className="text-center text-3xl sm:text-4xl lg:text-6xl font-alegreya">
        Our Services
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ServiceCard
          title="Web Development"
          description="Custom web applications tailored to your business needs."
        />
        <ServiceCard
          title="Mobile App Development"
          description="Native and cross-platform mobile apps for iOS and Android."
        />
        <ServiceCard
          title="UI/UX Design"
          description="User-centered design that enhances user experience and engagement."
        />
        <ServiceCard
          title="Cloud Solutions"
          description="Scalable and secure cloud infrastructure and migration services."
        />
        <ServiceCard
          title="AI & Machine Learning"
          description="Intelligent solutions to automate and optimize your business processes."
        />
        <ServiceCard
          title="Consulting"
          description="Expert advice on technology strategy and digital transformation."
        />
      </div>
    </div>
  );
}

