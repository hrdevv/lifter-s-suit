
import React from 'react';
import { BRAND_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <span className="text-[#f57c00] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Our Identity</span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 leading-tight">
          Providing high-standard serviced living in the heart of Abuja.
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 items-start">
        <div className="space-y-8">
          <p className="text-xl text-gray-300 leading-relaxed italic border-l-4 border-[#1b5e20] pl-8">
            {BRAND_NAME} is founded on the principle that temporary housing should be reliable, secure, and professional.
          </p>
          <div className="text-gray-400 space-y-6 leading-relaxed">
            <p>
              Operated under the Lifter's institutional brand, we specialize in curating serviced apartments that cater to professionals, diplomats, and corporate clients seeking quality short-let solutions.
            </p>
            <p>
              Our suites are strategically located to ensure proximity to Abuja’s key commercial and administrative districts, while maintaining a focus on privacy and high-level security.
            </p>
            <p>
              With a dedicated management team, we ensure that every apartment meets our strict factual standards for functionality, cleanliness, and comfort.
            </p>
          </div>
        </div>
        <div className="bg-[#141414] p-2 border border-white/10">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" alt="Professional Lounge" className="w-full grayscale opacity-80" />
        </div>
      </div>
    </div>
  );
};

export default About;
