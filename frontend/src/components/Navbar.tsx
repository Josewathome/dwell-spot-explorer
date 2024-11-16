import { Link } from 'react-router-dom';
import { Home, User } from 'lucide-react';
import { Button } from './ui/button';

export const Navbar = () => {
  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Home className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold">RealEstate</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <Link to="/auth">
            <Button variant="ghost" className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span>Sign In</span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};