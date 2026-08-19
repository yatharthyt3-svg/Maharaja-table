export type MenuCategory = 
  | 'all'
  | 'appetizers'
  | 'main'
  | 'tandoor'
  | 'biryani'
  | 'breads'
  | 'desserts'
  | 'beverages';

export type DietaryType = 
  | 'Vegetarian'
  | 'Vegan'
  | 'Gluten-Free'
  | 'Halal'
  | 'Chef Special'
  | 'Contains Dairy'
  | 'Contains Nuts';

export interface MenuItem {
  id: string;
  category: Exclude<MenuCategory, 'all'>;
  name: string;
  hindiName?: string;
  price: number;
  formattedPrice: string;
  desc: string;
  dietary: DietaryType[];
  image: string;
  spiceLevel: 1 | 2 | 3 | 4; // 1: Mild, 2: Medium, 3: Spicy, 4: Royal Fiery
  originRegion: string;
  pairingWine: string;
  chefNote?: string;
  ingredients: string[];
  isSignature?: boolean;
}

export interface SignatureDish {
  id: string;
  name: string;
  tagline: string;
  desc: string;
  image: string;
  price: string;
  origin: string;
  cookingTime: string;
  keySpices: string[];
  winePairing: string;
}

export interface ReservationRequest {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingZone: 'grand-hall' | 'courtyard' | 'saffron-salon' | 'emperors-vault';
  dietaryRestrictions: string;
  specialOccasion: string;
  notes: string;
}

export interface ReservationConfirmation extends ReservationRequest {
  bookingId: string;
  status: 'Confirmed' | 'Pending';
  tableNumber: string;
  createdTimestamp: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  publication: string;
  rating: number;
  avatar: string;
  dishLoved: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  years: string;
  iconName: string;
  desc: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'hall' | 'dishes' | 'bar' | 'private';
  image: string;
  caption: string;
}

export interface EventPackage {
  id: string;
  title: string;
  capacity: string;
  desc: string;
  icon: string;
  features: string[];
  priceStarting: string;
}
