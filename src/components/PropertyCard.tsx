import { Link } from 'react-router-dom';
import { Property } from '@/lib/types';
import { Card } from './ui/card';
import { Bed, Bath, Square } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Link to={`/property/${property.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in">
        <div className="aspect-video relative overflow-hidden">
          <img 
            src={property.images[0]} 
            alt={property.title}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded">
            {property.type === 'sale' ? 'For Sale' : 'For Rent'}
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold truncate">{property.title}</h3>
          <p className="text-2xl font-bold text-primary mt-1">
            ${property.type === 'sale' ? 
              property.price.toLocaleString() : 
              `${property.price.toLocaleString()}/mo`}
          </p>
          
          <div className="flex items-center space-x-4 mt-4 text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Bed className="h-4 w-4" />
              <span>{property.bedrooms} beds</span>
            </div>
            <div className="flex items-center space-x-1">
              <Bath className="h-4 w-4" />
              <span>{property.bathrooms} baths</span>
            </div>
            <div className="flex items-center space-x-1">
              <Square className="h-4 w-4" />
              <span>{property.sqft} sqft</span>
            </div>
          </div>
          
          <p className="text-muted-foreground mt-2 truncate">
            {property.address}, {property.city}
          </p>
        </div>
      </Card>
    </Link>
  );
};