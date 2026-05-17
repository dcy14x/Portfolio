import React from 'react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

const BG_VIDEO = "/video/Animation.mp4";

const HeroSection: React.FC = () => {
  return (
    <section className="h-screen flex flex-col overflow-x-clip relative bg-black">
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          src={BG_VIDEO}
          autoPlay
          loop
          muted
          defaultMuted
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0C0C0C]" />
      </div>

      <FadeIn delay={0} y={-20} duration={0.8} as="nav" className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 w-full z-20">
        {['About', 'Services', 'Projects', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
            {item}
          </a>
        ))}
      </FadeIn>

      <div className="flex-1 flex flex-col justify-center w-full z-20 overflow-hidden relative">
        <FadeIn delay={0.15} y={40} className="w-full">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[9vw] sm:text-[10vw] md:text-[11vw] lg:text-[12vw] mt-6 sm:mt-4 md:-mt-5">
            Hi, I&apos;m Daniel
          </h1>
        </FadeIn>
      </div>

      <div className="flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 w-full z-20">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
            Bridging the gap between IT support, web development, and seamless digital operations.
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
