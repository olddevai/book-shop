import React, { useState } from 'react';
import { ShoppingCart, Heart, User, Search, BookOpen, Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold">BookVerse</span>
          </div>
          
          <div className="hidden md:block flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search books, authors, or genres..."
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Heart className="w-5 h-5" />
              <span className="ml-1">Wishlist</span>
            </Button>
            <Button variant="outline" size="sm">
              <ShoppingCart className="w-5 h-5" />
              <span className="ml-1">Cart (0)</span>
            </Button>
            <Button variant="primary" size="sm">
              <User className="w-5 h-5" />
              <span className="ml-1">Sign In</span>
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search books..."
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-center">
                <Heart className="w-5 h-5 mr-2" />
                Wishlist
              </Button>
              <Button variant="outline" className="w-full justify-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Cart (0)
              </Button>
              <Button variant="primary" className="w-full justify-center">
                <User className="w-5 h-5 mr-2" />
                Sign In
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}