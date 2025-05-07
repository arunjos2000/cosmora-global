
const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Personalized Strategies",
      description: "Custom solutions that align with your unique objectives and circumstances."
    },
    {
      title: "Global Expertise",
      description: "In-depth knowledge of immigration laws and investment opportunities worldwide."
    },
    {
      title: "End-to-End Support",
      description: "Comprehensive guidance from initial consultation to successful application."
    },
    {
      title: "Discreet & Private Client Handling",
      description: "Confidential service with the highest standards of privacy and discretion."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cosmora-navy mb-6 gold-underline inline-block">
            Why Cosmora?
          </h2>
          <p className="text-lg text-cosmora-charcoal">
            We deliver excellence through personalized service and unparalleled expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg p-8 hover:border-cosmora-gold transition-colors"
            >
              <h3 className="text-xl font-semibold text-cosmora-navy mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
