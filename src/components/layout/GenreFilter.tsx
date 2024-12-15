import React from 'react';
import { genres } from '../../data/books';
import { Badge } from '../ui/Badge';

interface GenreFilterProps {
  selectedGenre: string | null;
  onGenreSelect: (genre: string | null) => void;
}

export function GenreFilter({ selectedGenre, onGenreSelect }: GenreFilterProps) {
  return (
    <div className="overflow-x-auto py-4">
      <div className="flex space-x-2 min-w-max">
        <button
          onClick={() => onGenreSelect(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedGenre === null
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All Books
        </button>
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => onGenreSelect(genre)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedGenre === genre
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}