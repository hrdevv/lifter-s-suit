
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Apartment } from '../types';

interface ApartmentCardProps {
  apartment: Apartment;
}

const ApartmentCard: React.FC<ApartmentCardProps> = ({ apartment }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const nextImg = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImgIndex((prev) => (prev + 1) % apartment.images.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImgIndex((prev) => (prev - 1 + apartment.images.length) % apartment.images.length);
  };

  return (
    <article className="apt-card group">
      <div className="apt-card__img-wrapper relative h-64 overflow-hidden">
        <img
          src={apartment.images[currentImgIndex]}
          alt={`${apartment.name} - image ${currentImgIndex + 1}`}
          className="apt-card__img w-full h-full object-cover transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Carousel Controls */}
        <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={prevImg}
            className="w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-[#1b5e20] transition-colors"
          >
            ‹
          </button>
          <button 
            onClick={nextImg}
            className="w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-[#1b5e20] transition-colors"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {apartment.images.map((_, idx) => (
            <div 
              key={idx} 
              className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentImgIndex ? 'bg-[#f57c00] w-3' : 'bg-white/50'}`}
            />
          ))}
        </div>

        <div className="absolute top-4 left-4 bg-[#1b5e20] px-3 py-1 rounded text-[9px] uppercase tracking-widest text-white font-bold">
          Verified
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-bold text-white mb-1">
          {apartment.name}
        </h3>
        <p className="text-[#f57c00] text-[10px] font-bold tracking-widest uppercase mb-4">
          {apartment.location}
        </p>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-2">
          {apartment.description}
        </p>
        
        <div className="mt-auto">
          <div className="apt-card__price-tag">
            {apartment.priceRange}
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <Link
              to={`/apartments/${apartment.id}`}
              className="apt-card__btn flex items-center justify-center"
            >
              Details
            </Link>
            <Link
              to="/inquiry"
              state={{ apartmentName: apartment.name }}
              className="bg-[#1b5e20] text-white text-center py-2.5 font-bold uppercase tracking-widest text-[10px] hover:bg-[#2e7d32] transition-colors flex items-center justify-center"
            >
              Make Inquiry
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ApartmentCard;
