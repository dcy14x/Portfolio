import React, { useEffect, useState } from 'react';

const imagesRow1 = [
  "/images/CCP GU6.png",
  "/images/CCP GUI.png",
  "/images/CCP GUI2.png",
  "/images/CCP GUI3.png",
  "/images/CCP GUI3png.png",
  "/images/CCP GUI4.png",
  "/images/CCP GUI5.png",
  "/images/CIP MIDTERM.png"
];

const imagesRow2 = [
  "/images/CIP MIDTERM2.png",
  "/images/CIP MIDTERM3.png",
  "/images/CIP MIDTERM4.png",
  "/images/CIP MIDTERM5.png",
  "/images/CIP MIDTERM6.png",
  "/images/Hentoki 2.png",
  "/images/Hentoki.png"
];

const MarqueeSection: React.FC = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const sectionRef = React.useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
        setScrollOffset(offset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const row1Images = [...imagesRow1, ...imagesRow1, ...imagesRow1];
  const row2Images = [...imagesRow2, ...imagesRow2, ...imagesRow2];

  return (
    <section ref={sectionRef} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-3">
      <div 
        className="flex gap-3 w-max"
        style={{ transform: `translateX(${scrollOffset - 200}px)`, willChange: 'transform' }}
      >
        {row1Images.map((src, idx) => (
          <img 
            key={`r1-${idx}`} 
            src={src} 
            loading="lazy" 
            alt="Marquee item" 
            className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0" 
          />
        ))}
      </div>
      
      <div 
        className="flex gap-3 w-max"
        style={{ transform: `translateX(${-(scrollOffset - 200)}px)`, willChange: 'transform' }}
      >
        {row2Images.map((src, idx) => (
          <img 
            key={`r2-${idx}`} 
            src={src} 
            loading="lazy" 
            alt="Marquee item" 
            className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0" 
          />
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
