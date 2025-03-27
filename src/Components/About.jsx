import React from 'react';
import varshaimg1 from '../assets/varshaimg1.png';

const About = () => {
  return (
    <section className="w-full h-[100%] bg-[#eafaf1] pt-5 md:pt-20" id="about">
      {/* Heading */}
      <div className="flex justify-center text-4xl md:text-5xl font-semibold pt-6 italic">
        <h2>About Me</h2>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Image - Now visible on mobile */}
        <div className="w-3/4 md:w-1/2 scale-75 aspect-square mt-4 md:mt-4 lg:-mt-16">
          <img src={varshaimg1} alt="Dietitian Varsha Patil" className="w-full h-auto" />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-2/4 mt-8 md:mt-16 px-4 md:px-0 text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-mono">Dietitian Varsha Patil</h3>
          <p className="text-gray-500 pb-3 md:pb-5 text-sm md:text-base">
            Registered Dietitian | MS CND | PCOD & PCOS Specialist
          </p>
          <p className="italic pb-6 md:pb-10 text-base md:text-lg">
            “Wellness isn’t a trend—it’s a way of life worth embracing.” - Varsha
          </p>
          <p className="font-mono text-sm md:text-base pb-5">
            I’m Dietitian Varsha, and I’m here to help you take charge of your health
            with confidence. With over 1000 clients transformed and a deep expertise
            in PCOD, PCOS, diabetes management, and gut health (IBS/IBD), I bring
            proven, personalized nutrition strategies to the table. No more sifting
            through confusing online advice or chasing quick fixes—my approach is
            all about real, sustainable results tailored to your unique needs. 
            Eating right isn’t just about weight; it’s about balancing your 
            hormones, preventing disease, and living your fullest life. Ready to
            rewrite your health story? Let’s make it happen together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;