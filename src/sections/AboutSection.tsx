import React from 'react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen relative flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden">
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="Moon icon" className="w-full h-auto" />
      </FadeIn>
      
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="3D object" className="w-full h-auto" />
      </FadeIn>

      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="Lego icon" className="w-full h-auto" />
      </FadeIn>

      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="3D Group" className="w-full h-auto" />
      </FadeIn>

      <FadeIn delay={0} y={40} className="w-full z-10 flex flex-col items-center">
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]">
          About me
        </h2>
      </FadeIn>

      <div className="z-10 mt-10 sm:mt-14 md:mt-16 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <AnimatedText 
          text="More than just a developer, I am your dedicated technical partner. Whether it's managing cloud deployments, building intuitive interfaces in Figma, or providing hands-on IT support, I handle the tech so you can focus on growing your business."
          className="text-center font-medium leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)]"
        />
        
        <div className="flex flex-col sm:flex-row gap-4">
          <ContactButton />
          <a 
            href="/resume.pdf" 
            download
            className="inline-flex items-center justify-center rounded-full text-white font-medium uppercase tracking-widest outline-none px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base border border-white/20 hover:bg-white/10 transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
