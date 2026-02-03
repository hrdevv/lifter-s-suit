
import React from 'react';
import { CONTACT_INFO, BRAND_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#141414] border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-[#1b5e20] font-serif text-xl font-bold tracking-widest mb-6 uppercase">{BRAND_NAME}</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Professional serviced apartment solutions provided under the Lifter's brand (Touch Empowerment Foundation).
            </p>
          </div>
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Contact</h4>
            <ul className="text-gray-400 text-sm space-y-4">
              <li>{CONTACT_INFO.email}</li>
              <li>{CONTACT_INFO.phone}</li>
              <li>{CONTACT_INFO.location}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Institutional Context</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              We focus on building long-term credibility through service excellence and reliability in Nigeria's capital.
            </p>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-[10px] uppercase tracking-widest">
          <p>© {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
