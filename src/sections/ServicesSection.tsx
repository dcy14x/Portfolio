import React from 'react';
import FadeIn from '../components/FadeIn';

const services = [
  {
    num: "01",
    name: "Web Development",
    desc: "Building responsive, full-stack web applications using modern technologies and databases."
  },
  {
    num: "02",
    name: "IT Support & Troubleshooting",
    desc: "Diagnosing hardware and software issues to optimize system performance and stability."
  },
  {
    num: "03",
    name: "Cloud Deployment",
    desc: "Managing and deploying applications to live cloud servers like DigitalOcean and Heroku."
  },
  {
    num: "04",
    name: "UI/UX Design",
    desc: "Prototyping intuitive user interfaces and user experiences using tools like Figma."
  },
  {
    num: "05",
    name: "AI Prompt Engineering",
    desc: "Leveraging AI models like Gemini and Claude to accelerate coding tasks and improve digital efficiency."
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10">
      <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
        Services
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col">
        {services.map((svc, i) => (
          <FadeIn key={svc.num} delay={i * 0.1} y={30}>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 py-8 sm:py-10 md:py-12 border-b-[1px] border-[rgba(12,12,12,0.15)] items-start">
              <span className="font-black text-[#0C0C0C] text-[clamp(3rem,10vw,140px)] leading-none md:w-[200px] shrink-0">
                {svc.num}
              </span>
              <div className="flex flex-col gap-2 pt-2 md:pt-4">
                <h3 className="font-medium uppercase text-[#0C0C0C] text-[clamp(1rem,2.2vw,2.1rem)]">
                  {svc.name}
                </h3>
                <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] text-[#0C0C0C] opacity-60">
                  {svc.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
