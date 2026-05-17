import React from 'react';
import FadeIn from '../components/FadeIn';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20 border-t border-white/10">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <FadeIn y={30} className="w-full">
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(2.5rem,8vw,100px)] mb-6 text-white leading-none">
            Let's Talk
          </h2>
          <p className="text-[#D7E2EA]/70 text-center text-lg sm:text-xl mb-12 max-w-2xl mx-auto">
            Whether you need a custom website built with AI, technical support, or cloud deployment—I'm ready to help.
          </p>
        </FadeIn>

        <FadeIn y={40} delay={0.2} className="w-full">
          <form className="flex flex-col gap-6 w-full" onSubmit={(e) => { e.preventDefault(); alert('Form submitted! (Add your backend like Formspree here)'); }}>
            <div className="flex flex-col sm:flex-row gap-6">
              <input 
                type="text" 
                placeholder="Name" 
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white w-full outline-none focus:border-[#B600A8] transition-colors"
                required
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white w-full outline-none focus:border-[#B600A8] transition-colors"
                required
              />
            </div>
            <textarea 
              placeholder="Your Message" 
              rows={5}
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white w-full outline-none focus:border-[#B600A8] transition-colors resize-none"
              required
            ></textarea>
            <button 
              type="submit"
              className="rounded-full text-white font-medium uppercase tracking-widest px-10 py-4 mt-4 self-center sm:self-start w-full sm:w-auto hover:opacity-90 transition-opacity"
              style={{
                background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
              }}
            >
              Send Message
            </button>
          </form>
        </FadeIn>

        <FadeIn y={20} delay={0.4} className="mt-20 w-full flex flex-col sm:flex-row justify-between items-center border-t border-white/10 pt-8 gap-4">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} Daniel Baldo. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/70 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">GitHub</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">Twitter</a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ContactSection;
