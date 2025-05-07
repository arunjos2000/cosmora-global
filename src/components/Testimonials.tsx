
import { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Cosmora made my dream of EU residency a seamless reality.",
      author: "Michael T.",
      position: "Business Executive, United States",
    },
    {
      quote: "Incredible service, transparent process, trusted every step.",
      author: "Sara K.",
      position: "Entrepreneur, Canada",
    },
    {
      quote: "Their expertise in global investment strategies is unparalleled.",
      author: "David L.",
      position: "Family Office Director, Singapore",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="section-padding bg-cosmora-navy text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-14 gold-underline inline-block">
            Client Testimonials
          </h2>

          <div className="min-h-[200px] flex flex-col items-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 absolute ${
                  activeIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 pointer-events-none"
                }`}
              >
                <p className="text-xl md:text-2xl italic mb-6">"{testimonial.quote}"</p>
                <div className="font-semibold text-cosmora-gold">{testimonial.author}</div>
                <div className="text-sm text-white/70">{testimonial.position}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeIndex === index ? "bg-cosmora-gold w-6" : "bg-white/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
