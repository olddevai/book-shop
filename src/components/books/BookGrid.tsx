import React from 'react';
import { BookCard } from './BookCard';
import { books } from '../../data/books';
import { Book } from '../../types';

export function BookGrid() {
  const handleAddToCart = (book: Book) => {
    console.log('Added to cart:', book.title);
  };

  const handleAddToWishlist = (book: Book) => {
    console.log('Added to wishlist:', book.title);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onAddToCart={handleAddToCart}
          onAddToWishlist={handleAddToWishlist}
        />
      ))}
    </div>
  );
}