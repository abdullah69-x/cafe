export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'breakfast' | 'lunch' | 'drinks' | 'desserts';
  image: string;
  popular?: boolean;
  dietary?: ('Vegetarian' | 'Vegan' | 'Gluten-Free')[];
  tastingNotes?: string;
  origin?: string;
}

export interface DailySpecial {
  id: string;
  title: string;
  badge: string;
  price: string;
  description: string;
  baristaNote: string;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  notes?: string;
  selectedMilk?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  favoriteOrder: string;
  rating: number;
  avatar: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Reservation {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingArea?: string;
  notes?: string;
}
