import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LiveProjectButton from '../components/LiveProjectButton';

const projects = [
  {
    id: "01",
    client: "UI/UX Design",
    name: "Enrollment System",
    buttonLabel: "View Designs",
    images: {
      c1i1: "/images/CCP GUI.png",
      c1i2: "/images/CCP GUI2.png",
      c2i: "/images/CCP GU6.png"
    }
  },
  {
    id: "02",
    client: "UI/UX Design",
    name: "Tech Services",
    buttonLabel: "View Case Study",
    images: {
      c1i1: "/images/CIP MIDTERM.png",
      c1i2: "/images/CIP MIDTERM2.png",
      c2i: "/images/CIP MIDTERM4.png"
    }
  },
  {
    id: "03",
    client: "UI/UX Design",
    name: "Food Delivery Website",
    buttonLabel: "View App",
    images: {
      c1i1: "/images/Hentoki.png",
      c1i2: "/images/Hentoki 2.png",
      c2i: "/images/Hentoki3.png"
    }
  }
];

const ProjectCard: React.FC<{ project: typeof projects[0], index: number, totalCards: number }> = ({ project, index, totalCards }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={containerRef} className="h-[85vh] flex justify-center items-start sticky top-24 md:top-32 w-full max-w-7xl mx-auto mb-10 md:mb-16">
      <motion.div 
        style={{ scale, top: `${index * 28}px` }}
        className="relative w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 w-full">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
            <span className="font-black text-[#D7E2EA] text-[clamp(2.5rem,6vw,80px)] leading-none">{project.id}</span>
            <div className="flex flex-col gap-1">
              <span className="uppercase text-[#D7E2EA]/60 tracking-wider text-xs sm:text-sm">{project.client}</span>
              <h3 className="font-medium text-[#D7E2EA] text-xl sm:text-2xl md:text-3xl uppercase tracking-wide">{project.name}</h3>
            </div>
          </div>
          <div className="self-start md:self-center">
            <LiveProjectButton label={project.buttonLabel} />
          </div>
        </div>

        <div className="flex flex-row gap-3 sm:gap-4 md:gap-6 w-full h-full min-h-0">
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 w-[40%]">
            <img 
              src={project.images.c1i1} 
              alt={`${project.name} detail 1`} 
              className="w-full h-[clamp(130px,16vw,230px)] object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px]" 
            />
            <img 
              src={project.images.c1i2} 
              alt={`${project.name} detail 2`} 
              className="w-full h-[clamp(160px,22vw,340px)] object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px]" 
            />
          </div>
          <div className="w-[60%]">
            <img 
              src={project.images.c2i} 
              alt={`${project.name} main`} 
              className="w-full h-full object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px]" 
              style={{ minHeight: '100%' }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
        Project
      </h2>
      <div className="relative w-full pb-[10vh]">
        {projects.map((proj, i) => (
          <ProjectCard key={proj.id} project={proj} index={i} totalCards={projects.length} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
