
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { APARTMENTS } from '../constants';
import { InquiryFormData } from '../types';

const Inquiry: React.FC = () => {
  const location = useLocation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    apartmentOfInterest: '',
    checkInDate: '',
    checkOutDate: '',
    guests: '1',
    additionalNotes: '',
  });

  useEffect(() => {
    const state = location.state as { apartmentName?: string };
    if (state?.apartmentName) {
      setFormData(prev => ({ ...prev, apartmentOfInterest: state.apartmentName! }));
    }
  }, [location]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    const checkIn = new Date(formData.checkInDate);
    const checkOut = new Date(formData.checkOutDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (checkIn < today) {
      newErrors.checkInDate = 'Check-in cannot be in the past.';
    }
    if (checkOut <= checkIn) {
      newErrors.checkOutDate = 'Check-out must be after check-in.';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="bg-[#141414] border border-white/10 p-12 text-center max-w-xl w-full animate-slide-up">
          <div className="w-16 h-16 bg-[#1b5e20]/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-8 h-8 text-[#1b5e20]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-serif text-white mb-4">Inquiry Received</h2>
          <p className="text-gray-400 mb-10 leading-relaxed">
            Thank you. Your inquiry for <strong>{formData.apartmentOfInterest}</strong> ({formData.checkInDate} to {formData.checkOutDate}) has been logged. Our management team will contact you shortly.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="text-[#f57c00] font-bold tracking-widest uppercase border-b border-[#f57c00] pb-1 hover:text-white transition-colors"
          >
            New Inquiry
          </button>
        </div>
      </div>
    );
  }

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <span className="text-[#f57c00] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Inquiry Entry Point</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Check Availability</h1>
          <p className="text-gray-400 mb-12 leading-relaxed max-w-md">
            Provide your details below to express interest in our serviced apartments. Our team will review your request and contact you with availability details and formal quotes.
          </p>
          <div className="p-8 bg-[#141414] border border-white/5 border-l-4 border-l-[#1b5e20]">
            <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-sm">Professional Management</h4>
            <p className="text-gray-400 text-sm">We provide institutional-grade support for corporate travelers and organizations, ensuring seamless arrival and stay.</p>
          </div>
        </div>

        <div className="bg-[#141414] border border-white/10 p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-2">Residence of Interest</label>
                <select
                  name="apartmentOfInterest"
                  value={formData.apartmentOfInterest}
                  onChange={handleChange}
                  required
                  className="form-input"
                >
                  <option value="" disabled>Select a residence...</option>
                  {APARTMENTS.map(apt => (
                    <option key={apt.id} value={apt.name} className="bg-[#141414]">{apt.name}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-2">Check-in Date</label>
                  <input 
                    type="date" 
                    name="checkInDate" 
                    min={todayStr}
                    value={formData.checkInDate} 
                    onChange={handleChange} 
                    required 
                    className={`form-input ${errors.checkInDate ? 'border-red-500' : ''}`} 
                  />
                  {errors.checkInDate && <p className="text-red-500 text-[10px] mt-1 uppercase font-bold tracking-widest">{errors.checkInDate}</p>}
                </div>
                <div>
                  <label className="block text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-2">Check-out Date</label>
                  <input 
                    type="date" 
                    name="checkOutDate" 
                    min={formData.checkInDate || todayStr}
                    value={formData.checkOutDate} 
                    onChange={handleChange} 
                    required 
                    className={`form-input ${errors.checkOutDate ? 'border-red-500' : ''}`} 
                  />
                  {errors.checkOutDate && <p className="text-red-500 text-[10px] mt-1 uppercase font-bold tracking-widest">{errors.checkOutDate}</p>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-2">Number of Guests</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="form-input"
                  >
                    {[1, 2, 3, 4, 5, 6].map(n => (
                      <option key={n} value={n} className="bg-[#141414]">{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-2">Full Name</label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="form-input" placeholder="Name" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-2">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="form-input" placeholder="Email Address" />
                </div>
                <div>
                  <label className="block text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-2">Phone Number</label>
                  <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className="form-input" placeholder="+234..." />
                </div>
              </div>

              <div>
                <label className="block text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-2">Additional Notes</label>
                <textarea name="additionalNotes" value={formData.additionalNotes} onChange={handleChange} className="form-input h-24" placeholder="Any specific requirements..."></textarea>
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-[#1b5e20] text-white font-bold tracking-[0.2em] uppercase py-5 hover:bg-[#2e7d32] transition-all"
              >
                Send Inquiry
              </button>
              <p className="mt-6 text-[9px] text-gray-500 text-center uppercase tracking-[0.1em]">
                Submitting this form does not constitute a booking.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
