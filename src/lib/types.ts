export interface Property {
  id: string;
  title: string;
  price: number;
  type: 'sale' | 'rent';
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  address: string;
  city: string;
  images: string[];
  description: string;
}

export interface SearchFilters {
  type: 'sale' | 'rent' | 'all';
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  city?: string;
}