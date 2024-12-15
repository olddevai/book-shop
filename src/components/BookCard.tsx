import React from 'react';
import { Star } from 'lucide-react';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
  onAddToCart: (book: Book) => void;
  onAddToWishlist: (book: Book) => void;
}

export function BookCard({ book, onAddToCart, onAddToWishlist }: BookCardProps) {
  return (
    <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-w-3 aspect-h-4">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{book.title}</h3>
        <p className="text-sm text-gray-600">{book.author}</p>
        <div className="flex items-center mt-2">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm text-gray-600">
            {book.rating} ({book.reviews})
          </span>
        </div>
        <p className="mt-2 text-lg font-bold text-gray-900">${book.price}</p>
        <div className="mt-4 space-x-2">
          <button
            onClick={() => onAddToCart(book)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>
          <button
            onClick={() => onAddToWishlist(book)}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}