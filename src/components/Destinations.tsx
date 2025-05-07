
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Destinations = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const destinations = [
    {
      country: "Portugal",
      program: "Golden Visa",
      description: "Invest from €280,000 and secure EU residency.",
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=800",
    },
    {
      country: "Greece",
      program: "Golden Visa",
      description: "Property investment starting from €250,000.",
      image: "https://images.unsplash.com/photo-1503152394-c571994fd383?q=80&w=800",
    },
    {
      country: "Spain",
      program: "Golden Visa",
      description: "Invest €500,000 in real estate for residency.",
      image: "https://images.unsplash.com/photo-1511527661048-7fe73d85e9b4?q=80&w=800",
    },
    {
      country: "UAE",
      program: "Investor Visa",
      description: "Multiple pathways to residency through investment.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === destinations.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? destinations.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="destinations" className="section-padding bg-cosmora-grey">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cosmora-navy mb-6 gold-underline inline-block">
            Featured Destinations
          </h2>
          <p className="text-lg text-cosmora-charcoal">
            Explore premium investment opportunities in sought-after global destinations.
          </p>
        </div>

        <div className="relative">
          {/* Desktop View - Cards */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div 
                  className="h-48 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${destination.image})` }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-cosmora-navy">{destination.country}</h3>
                  <p className="text-cosmora-gold font-medium mb-2">{destination.program}</p>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <Button variant="outline" className="w-full border-cosmora-navy text-cosmora-navy hover:bg-cosmora-navy hover:text-white">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View - Carousel */}
          <div className="md:hidden">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url(${destinations[activeIndex].image})` }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cosmora-navy">{destinations[activeIndex].country}</h3>
                <p className="text-cosmora-gold font-medium mb-2">{destinations[activeIndex].program}</p>
                <p className="text-gray-600 mb-4">{destinations[activeIndex].description}</p>
                <Button variant="outline" className="w-full border-cosmora-navy text-cosmora-navy hover:bg-cosmora-navy hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="flex justify-center space-x-4 mt-6">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={prevSlide} 
                className="border border-cosmora-navy text-cosmora-navy hover:bg-cosmora-navy hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={nextSlide} 
                className="border border-cosmora-navy text-cosmora-navy hover:bg-cosmora-navy hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex justify-center mt-4">
              {destinations.map((_, index) => (
                <span 
                  key={index} 
                  className={`w-2 h-2 mx-1 rounded-full ${activeIndex === index ? 'bg-cosmora-navy' : 'bg-gray-300'}`}
                  onClick={() => setActiveIndex(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
