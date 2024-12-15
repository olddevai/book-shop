export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  coverImage: string;
  description: string;
  rating: number;
  reviews: number;
  genre: string[];
}

export interface CartItem {
  book: Book;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  wishlist: string[];
  cart: CartItem[];
}