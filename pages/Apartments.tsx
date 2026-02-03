
import React from 'react';
import ApartmentCard from '../components/ApartmentCard';
import { APARTMENTS } from '../constants';

const Apartments: React.FC = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <span className="text-[#f57c00] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Factual Listings</span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Available Residences</h1>
        <p className="text-gray-400 leading-relaxed">
          Explore our range of professional serviced apartments. Each unit is managed to institutional standards for reliability and security.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {APARTMENTS.map((apartment) => (
          <ApartmentCard key={apartment.id} apartment={apartment} />
        ))}
      </div>

      <div className="mt-24 bg-[#141414] p-10 border border-white/5 text-center">
        <h3 className="text-lg font-serif text-white mb-6 uppercase tracking-widest">Standard Amenities</h3>
        <div className="flex flex-wrap justify-center gap-8 text-[11px] text-gray-400 uppercase tracking-wider font-bold">
          <span className="flex items-center gap-2">Fully furnished</span>
          <span className="flex items-center gap-2">Reliable power</span>
          <span className="flex items-center gap-2">Secure environment</span>
          <span className="flex items-center gap-2">High-speed internet</span>
          <span className="flex items-center gap-2">Dedicated parking</span>
        </div>
      </div>
    </div>
  );
};

export default Apartments;
