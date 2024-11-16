import { Property, SearchFilters } from './types';

// Simulated API data
const MOCK_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Modern Downtown Apartment',
    price: 500000,
    type: 'sale',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    address: '123 Main St',
    city: 'New York',
    images: ['/placeholder.svg'],
    description: 'Beautiful modern apartment in the heart of downtown.'
  },
  {
    id: '2',
    title: 'Luxury Waterfront Condo',
    price: 3500,
    type: 'rent',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1500,
    address: '456 Ocean Ave',
    city: 'Miami',
    images: ['/placeholder.svg'],
    description: 'Stunning waterfront condo with amazing views.'
  },
];

export const getProperties = async (filters?: SearchFilters): Promise<Property[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  let filtered = [...MOCK_PROPERTIES];
  
  if (filters) {
    if (filters.type !== 'all') {
      filtered = filtered.filter(p => p.type === filters.type);
    }
    if (filters.minPrice) {
      filtered = filtered.filter(p => p.price >= filters.minPrice!);
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(p => p.price <= filters.maxPrice!);
    }
    if (filters.bedrooms) {
      filtered = filtered.filter(p => p.bedrooms >= filters.bedrooms!);
    }
    if (filters.city) {
      filtered = filtered.filter(p => p.city.toLowerCase().includes(filters.city!.toLowerCase()));
    }
  }
  
  return filtered;
};

export const getPropertyById = async (id: string): Promise<Property | null> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return MOCK_PROPERTIES.find(p => p.id === id) || null;
};