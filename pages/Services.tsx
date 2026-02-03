
import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-20">
        <span className="text-[#f57c00] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Institutional Offerings</span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
        <p className="text-gray-400 max-w-2xl leading-relaxed">
          Lifter’s Suites provides structured hospitality solutions designed for corporate clients and discerning guests who value professional management.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="bg-[#141414] p-10 border border-white/5">
          <div className="w-12 h-12 bg-[#1b5e20]/10 flex items-center justify-center mb-8">
            <svg className="w-6 h-6 text-[#1b5e20]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-xl font-serif text-white mb-4 uppercase tracking-wider">Serviced Apartments</h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            Fully-equipped, move-in ready residences inspected to ensure high standards for modern, professional living and short-let convenience.
          </p>
        </div>

        <div className="bg-[#141414] p-10 border border-white/5">
          <div className="w-12 h-12 bg-[#1b5e20]/10 flex items-center justify-center mb-8">
            <svg className="w-6 h-6 text-[#1b5e20]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-serif text-white mb-4 uppercase tracking-wider">Lifter’s Banquet Hall</h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            A professional event space for corporate conferences, meetings, and high-standard social gatherings with utility support.
          </p>
        </div>

        <div className="bg-[#141414] p-10 border border-white/5">
          <div className="w-12 h-12 bg-[#1b5e20]/10 flex items-center justify-center mb-8">
            <svg className="w-6 h-6 text-[#1b5e20]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-serif text-white mb-4 uppercase tracking-wider">Security & Management</h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            Dedicated professional facility management and secure environments to ensure a stable, worry-free stay for all organizations and guests.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
