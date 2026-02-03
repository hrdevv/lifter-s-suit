
import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { APARTMENTS } from '../constants';

const ApartmentDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const apartment = APARTMENTS.find(a => a.id === id);
  const [activeImage, setActiveImage] = useState(apartment?.images[0] || '');

  if (!apartment) {
    return <Navigate to="/apartments" replace />;
  }

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Link 
        to="/apartments" 
        className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-[#f57c00] hover:text-white mb-12 transition-colors"
      >
        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Listings
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Gallery */}
        <div>
          <div className="aspect-[4/3] bg-[#141414] mb-4 overflow-hidden border border-white/10">
            <img 
              src={activeImage} 
              alt={apartment.name} 
              className="w-full h-full object-cover animate-fade-in"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {apartment.images.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveImage(img)}
                className={`aspect-square overflow-hidden border-2 transition-all ${activeImage === img ? 'border-[#f57c00]' : 'border-transparent opacity-60 hover:opacity-100'}`}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col">
          <span className="text-[#f57c00] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
            {apartment.location}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            {apartment.name}
          </h1>
          <div className="h-1 w-20 bg-[#1b5e20] mb-8"></div>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            {apartment.description}
          </p>

          <div className="grid grid-cols-2 gap-8 mb-12 py-8 border-y border-white/5">
            <div>
              <span className="block text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-2">Max Occupancy</span>
              <span className="text-white font-medium">{apartment.capacity} Guests</span>
            </div>
            <div>
              <span className="block text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-2">Internal Area</span>
              <span className="text-white font-medium">{apartment.size}</span>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Institutional Amenities</h3>
            <div className="grid grid-cols-2 gap-y-3">
              {apartment.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-[#1b5e20]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {amenity}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto bg-[#141414] p-8 border border-white/5">
            <div className="flex justify-between items-center mb-8">
              <div>
                <span className="block text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-1">Pricing Range</span>
                <span className="text-xl text-[#f57c00] font-bold">{apartment.priceRange}</span>
              </div>
            </div>
            <Link 
              to="/inquiry" 
              state={{ apartmentName: apartment.name }}
              className="block w-full bg-[#1b5e20] text-white text-center py-5 font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#2e7d32] transition-all"
            >
              Make Inquiry for this Suite
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetails;
