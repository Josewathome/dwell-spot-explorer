import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getPropertyById } from '@/lib/api';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Bed, Bath, Square, MapPin } from 'lucide-react';

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  
  const { data: property, isLoading } = useQuery({
    queryKey: ['property', id],
    queryFn: () => getPropertyById(id!),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Image */}
          <div className="aspect-video relative">
            <img 
              src={property.images[0]} 
              alt={property.title}
              className="object-cover w-full h-full"
            />
          </div>
          
          {/* Content */}
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                <p className="text-muted-foreground flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {property.address}, {property.city}
                </p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary">
                  ${property.type === 'sale' ? 
                    property.price.toLocaleString() : 
                    `${property.price.toLocaleString()}/mo`}
                </div>
                <div className="text-muted-foreground">
                  {property.type === 'sale' ? 'For Sale' : 'For Rent'}
                </div>
              </div>
            </div>

            {/* Property Features */}
            <div className="flex items-center space-x-6 mt-6 pb-6 border-b">
              <div className="flex items-center space-x-2">
                <Bed className="h-5 w-5 text-muted-foreground" />
                <span>{property.bedrooms} Bedrooms</span>
              </div>
              <div className="flex items-center space-x-2">
                <Bath className="h-5 w-5 text-muted-foreground" />
                <span>{property.bathrooms} Bathrooms</span>
              </div>
              <div className="flex items-center space-x-2">
                <Square className="h-5 w-5 text-muted-foreground" />
                <span>{property.sqft} sqft</span>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">About This Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Contact Button */}
            <div className="mt-8">
              <Button size="lg" className="w-full md:w-auto">
                Contact Agent
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;