import { useState } from 'react';
import { SearchFilters } from '@/lib/types';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface SearchFiltersProps {
  onFilter: (filters: SearchFilters) => void;
}

export const SearchFiltersComponent = ({ onFilter }: SearchFiltersProps) => {
  const [filters, setFilters] = useState<SearchFilters>({
    type: 'all',
    city: '',
  });

  const handleFilter = () => {
    onFilter(filters);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Select
          value={filters.type}
          onValueChange={(value: 'sale' | 'rent' | 'all') => 
            setFilters(prev => ({ ...prev, type: value }))}
        >
          <SelectTrigger>
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Properties</SelectItem>
            <SelectItem value="sale">For Sale</SelectItem>
            <SelectItem value="rent">For Rent</SelectItem>
          </SelectContent>
        </Select>

        <Input
          placeholder="City"
          value={filters.city}
          onChange={(e) => setFilters(prev => ({ ...prev, city: e.target.value }))}
        />

        <Input
          type="number"
          placeholder="Min Bedrooms"
          onChange={(e) => setFilters(prev => ({ ...prev, bedrooms: parseInt(e.target.value) || undefined }))}
        />

        <Button 
          className="w-full"
          onClick={handleFilter}
        >
          Search
        </Button>
      </div>
    </div>
  );
};