
import { Apartment } from './types';

export const BRAND_NAME = "LIFTER'S SUITES";

export const APARTMENTS: Apartment[] = [
  {
    id: '1',
    name: '2-Bedroom Apartment — Wuse',
    location: 'Wuse, Abuja, Nigeria',
    description: 'Fully furnished residence featuring modern interior design, high-speed internet, and a dedicated workspace. Ideal for corporate travelers.',
    priceRange: '₦80,000 – ₦100,000 per night',
    imageUrl: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200',
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200'
    ],
    amenities: ['High-speed Wi-Fi', '24/7 Power', 'Dedicated Workspace', 'Smart TV', 'Fully Equipped Kitchen', 'Laundry'],
    capacity: 4,
    size: '120 sqm'
  },
  {
    id: '2',
    name: '1-Bedroom Studio — Maitama',
    location: 'Maitama, Abuja, Nigeria',
    description: 'A compact and functional living space equipped with modern amenities, secure environment, and reliable utilities for single professionals.',
    priceRange: '₦55,000 – ₦75,000 per night',
    imageUrl: 'https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80&w=1200',
    images: [
      'https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1512918766674-ed62b90daa95?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200'
    ],
    amenities: ['AC', 'Compact Kitchen', 'Daily Cleaning', 'Security Desk', 'Parking'],
    capacity: 2,
    size: '45 sqm'
  },
  {
    id: '3',
    name: '3-Bedroom Suite — Garki',
    location: 'Garki, Abuja, Nigeria',
    description: 'Spacious short-let accommodation suitable for families or business groups, featuring air-conditioned spaces and dedicated parking.',
    priceRange: '₦130,000 – ₦160,000 per night',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200',
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=1200'
    ],
    amenities: ['Dining Hall', 'Large Balcony', '3 En-suite Bathrooms', 'Premium Cable TV', 'In-unit Laundry'],
    capacity: 6,
    size: '180 sqm'
  },
  {
    id: '4',
    name: 'The Lifter’s Banquet Hall',
    location: 'Wuse II, Abuja',
    description: 'Professional event space designed for corporate meetings, conferences, and social celebrations with integrated utility support.',
    priceRange: '₦250,000 – ₦500,000 per event',
    imageUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200',
    images: [
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=1200'
    ],
    amenities: ['PA System', 'Projector Ready', 'Catering Kitchen', 'Secure Entrance', 'Guest Washrooms'],
    capacity: 150,
    size: '300 sqm'
  }
];

export const BRAND_COLORS = {
  primary: '#1b5e20', // Lifter's Green
  accent: '#f57c00',  // Lifter's Orange
  bgDark: '#0a0a0a',
  bgCard: '#141414',
};

export const CONTACT_INFO = {
  phone: '+234 800 000 0000',
  email: 'inquiries@lifterssuites.com',
  location: 'Abuja, Nigeria',
  whatsapp: '2348000000000',
  socials: {
    instagram: 'https://instagram.com/lifterssuites',
    facebook: 'https://facebook.com/lifterssuites',
    linkedin: 'https://linkedin.com/company/lifterssuites'
  }
};
