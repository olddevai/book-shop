import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Book } from '../../types';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface BookCardProps {
  book: Book;
  onAddToCart: (book: Book) => void;
  onAddToWishlist: (book: Book) => void;
}

export function BookCard({ book, onAddToCart, onAddToWishlist }: BookCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-64 object-cover"
        />
        {book.discount && (
          <Badge variant="warning" className="absolute top-2 right-2">
            {book.discount}% OFF
          </Badge>
        )}
        {book.isNewRelease && (
          <Badge variant="success" className="absolute top-2 left-2">
            New Release
          </Badge>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{book.title}</h3>
            <p className="text-sm text-gray-600">{book.author}</p>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">
              {book.rating}
            </span>
          </div>
        </div>

        <div className="mt-2 space-y-1">
          {book.genre.map((g) => (
            <Badge key={g} variant="secondary" className="mr-1">
              {g}
            </Badge>
          ))}
        </div>

        <p className="mt-3 text-sm text-gray-500 line-clamp-2">{book.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-baseline">
            <span className="text-xl font-bold text-gray-900">${book.price}</span>
            {book.discount && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ${(book.price * (1 + book.discount / 100)).toFixed(2)}
              </span>
            )}
          </div>
        </div>

        <div className="mt-4 flex space-x-2">
          <Button
            variant="primary"
            onClick={() => onAddToCart(book)}
            className="flex-1"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
          <Button
            variant="outline"
            onClick={() => onAddToWishlist(book)}
          >
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}