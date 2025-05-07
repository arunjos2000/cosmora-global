
import { Users, Award, Briefcase } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: <Users className="w-6 h-6 text-cosmora-gold" />,
      title: "10+ Countries Served",
      description: "Global expertise across top immigration destinations",
    },
    {
      icon: <Award className="w-6 h-6 text-cosmora-gold" />,
      title: "98% Success Rate",
      description: "Proven track record of successful applications",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-cosmora-gold" />,
      title: "Tailored Private Client Approach",
      description: "Personalized solutions for discerning individuals",
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cosmora-navy mb-6 gold-underline inline-block">
            About Cosmora
          </h2>
          <p className="text-lg text-cosmora-charcoal">
            At Cosmora, we empower global citizens through expert immigration and investment solutions. 
            From golden visas to full citizenship, we open doors to a world of opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-cosmora-grey rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center bg-white rounded-full p-3 shadow-sm mb-4">
                {stat.icon}
              </div>
              <h3 className="text-xl font-semibold text-cosmora-navy mb-2">{stat.title}</h3>
              <p className="text-cosmora-charcoal">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
