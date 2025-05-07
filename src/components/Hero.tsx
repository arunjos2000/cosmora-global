
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1920')" }}>
        <div className="absolute inset-0 bg-cosmora-navy bg-opacity-50"></div>
      </div>

      <div className="container-custom relative z-10 text-white">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            Golden Visas. Global Freedom.
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Explore your path to a borderless life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-secondary">Explore Programs</Button>
            <Button className="btn-primary bg-white text-cosmora-navy border border-white hover:bg-transparent hover:text-white transition-colors">
              Book Consultation
            </Button>
          </div>
        </div>
      </div>
      
      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <span className="text-white text-sm mb-2">Scroll</span>
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
