import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProperties } from '@/lib/api';
import { SearchFilters } from '@/lib/types';
import { Navbar } from '@/components/Navbar';
import { PropertyCard } from '@/components/PropertyCard';
import { SearchFiltersComponent } from '@/components/SearchFilters';

const Index = () => {
  const [filters, setFilters] = useState<SearchFilters>({ type: 'all' });
  
  const { data: properties, isLoading } = useQuery({
    queryKey: ['properties', filters],
    queryFn: () => getProperties(filters),
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Find Your Dream Home
          </h1>
          <p className="text-lg md:text-xl mb-8 animate-fade-in">
            Discover the perfect property for you
          </p>
        </div>
      </div>

      {/* Search Filters */}
      <div className="container mx-auto px-4 -mt-8 mb-12">
        <SearchFiltersComponent onFilter={setFilters} />
      </div>

      {/* Property Listings */}
      <div className="container mx-auto px-4 pb-16">
        {isLoading ? (
          <div className="text-center py-12">Loading properties...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties?.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;