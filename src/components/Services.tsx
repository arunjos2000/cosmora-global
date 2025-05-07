
import { 
  Globe, 
  Home, 
  FileText, 
  Briefcase, 
  Users, 
  Building 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-cosmora-gold" />,
      title: "Golden Visa Programs",
      description: "Investment-based residence permits with minimal stay requirements.",
    },
    {
      icon: <Home className="w-8 h-8 text-cosmora-gold" />,
      title: "Residency by Investment",
      description: "Secure legal residency through strategic investments.",
    },
    {
      icon: <FileText className="w-8 h-8 text-cosmora-gold" />,
      title: "Citizenship Solutions",
      description: "Pathways to acquiring second citizenship and passport privileges.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-cosmora-gold" />,
      title: "Business Immigration",
      description: "Entrepreneur and investor visa programs for business expansion.",
    },
    {
      icon: <Users className="w-8 h-8 text-cosmora-gold" />,
      title: "Family Office Services",
      description: "Comprehensive solutions for wealth preservation and succession planning.",
    },
    {
      icon: <Building className="w-8 h-8 text-cosmora-gold" />,
      title: "International Real Estate",
      description: "Premium property acquisition aligned with immigration strategies.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-cosmora-navy text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gold-underline inline-block">
            Our Services
          </h2>
          <p className="text-lg opacity-90">
            Comprehensive immigration and investment solutions tailored to your global ambitions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-cosmora-gold">{service.title}</h3>
              <p className="text-white/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
