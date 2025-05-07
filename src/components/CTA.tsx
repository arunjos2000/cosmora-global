
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-cosmora-navy to-cosmora-navy/80 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Global Journey?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Speak to our immigration specialists today.
          </p>
          <Button className="btn-secondary text-lg px-8 py-6">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
