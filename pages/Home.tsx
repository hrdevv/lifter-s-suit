
import React from 'react';
import { Link } from 'react-router-dom';
import ApartmentCard from '../components/ApartmentCard';
import { APARTMENTS, BRAND_NAME } from '../constants';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08759df9a73?auto=format&fit=crop&q=80&w=1920"
            alt="Professional Workspace"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="text-[#f57c00] text-xs font-bold tracking-[0.4em] uppercase mb-4 block animate-fade-in">
            Institutional Quality Hospitality
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Professional Serviced Living for Corporate Excellence.
          </h1>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            {BRAND_NAME} provides high-standard, fully-furnished short-let solutions in Abuja, delivering reliability and comfort to professionals and organizations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/apartments"
              className="px-12 py-4 bg-[#1b5e20] text-white font-bold tracking-widest uppercase hover:bg-white hover:text-[#1b5e20] transition-all duration-300 w-full sm:w-auto text-center"
            >
              Check Availability
            </Link>
          </div>
        </div>
      </section>

      {/* About Lifter's Suites Intro */}
      <section className="py-24 bg-[#141414] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif text-white mb-6">Built on Trust and Credibility</h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                As a branch of the Lifter's brand (Touch Empowerment Foundation), our suites are managed with a commitment to integrity and high service standards, ensuring every guest experiences a seamless stay.
            </p>
        </div>
      </section>

      {/* Featured Residences */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Featured Residences</h2>
            <div className="h-1 w-20 bg-[#f57c00]"></div>
          </div>
          <Link to="/apartments" className="text-[#1b5e20] hover:text-white transition-colors text-[11px] font-bold tracking-widest uppercase border-b border-[#1b5e20] pb-1">
            View All Listings
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {APARTMENTS.slice(0, 3).map((apartment) => (
            <ApartmentCard key={apartment.id} apartment={apartment} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
