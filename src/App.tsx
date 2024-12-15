import React from 'react';
import { Navbar } from './components/Navbar';
import { BookGrid } from './components/BookGrid';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto py-8">
        <h1 className="text-3xl font-bold text-gray-900 px-6">Featured Books</h1>
        <BookGrid />
      </main>
    </div>
  );
}

export default App;