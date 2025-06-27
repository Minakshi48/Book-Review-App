import React, { useEffect, useState } from 'react';
import booksData from '../data/books.json';
import BookCard from '../components/BookCard';

const BookListPage = () => {
  const [reviewsData, setReviewsData] = useState({});

  useEffect(() => {
    const loadReviews = () => {
      const stored = JSON.parse(localStorage.getItem('bookReviews')) || {};
      setReviewsData(stored);
    };
    loadReviews();
    window.addEventListener('storage', loadReviews);
    return () => window.removeEventListener('storage', loadReviews);
  }, []);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Available Books</h2>
      <div className="row">
        {booksData.map(book => (
          <BookCard key={book.id} book={book} reviews={reviewsData} />
        ))}
      </div>
    </div>
  );
};

export default BookListPage;

