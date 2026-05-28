export interface Talent {
  id: string;
  name: string;
  location: string;
  rate: string;
  rating: number;
  verified: boolean;
  premium: boolean;
  image: string;
  specialties: string[];
}

export const talents: Talent[] = [
  {
    id: "1",
    name: "Amara Okafor",
    location: "Lagos, Nigeria",
    rate: "₦150,000/hr",
    rating: 4.9,
    verified: true,
    premium: true,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=500&fit=crop",
    specialties: ["Dinner Dates", "Corporate Events"],
  },
  {
    id: "2",
    name: "Zara Mensah",
    location: "Abuja, Nigeria",
    rate: "₦200,000/hr",
    rating: 5.0,
    verified: true,
    premium: true,
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop",
    specialties: ["Travel Companion", "VIP Events"],
  },
  {
    id: "3",
    name: "Nia Adeyemi",
    location: "Lagos, Nigeria",
    rate: "₦120,000/hr",
    rating: 4.8,
    verified: true,
    premium: false,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop",
    specialties: ["Social Events", "Overnight"],
  },
  {
    id: "4",
    name: "Chioma Eze",
    location: "Port Harcourt",
    rate: "₦180,000/hr",
    rating: 4.9,
    verified: true,
    premium: true,
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=500&fit=crop",
    specialties: ["Business Functions", "Weekend Getaways"],
  },
  {
    id: "5",
    name: "Fatima Ibrahim",
    location: "Kano, Nigeria",
    rate: "₦100,000/hr",
    rating: 4.7,
    verified: true,
    premium: false,
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=500&fit=crop",
    specialties: ["Cultural Events", "Private Dining"],
  },
  {
    id: "6",
    name: "Aisha Bello",
    location: "Lagos, Nigeria",
    rate: "₦250,000/hr",
    rating: 5.0,
    verified: true,
    premium: true,
    image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&h=500&fit=crop",
    specialties: ["International Travel", "Luxury Lifestyle"],
  },
];

export const stats = [
  { label: "Verified Profiles", value: "500+", icon: "Shield" },
  { label: "Cities Covered", value: "12", icon: "MapPin" },
  { label: "Average Rating", value: "4.9★", icon: "Star" },
  { label: "Support Available", value: "24h", icon: "Clock" },
];

export const heroSlides = [
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&h=1080&fit=crop",
];
