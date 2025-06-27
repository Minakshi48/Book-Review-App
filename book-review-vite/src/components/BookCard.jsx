import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book, reviews }) => {
  const bookReviews = reviews[book.id] || [];
  const avgRating = bookReviews.length
    ? bookReviews.reduce((sum, r) => sum + r.rating, 0) / bookReviews.length
    : 0;

  return (
    <div className="col-lg-4 col-md-6 mb-4 d-flex">
      <div className="card shadow-sm w-100">
        <div className="card-body text-center">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text">Author: {book.author}</p>
          <p className="card-text">Rating: {avgRating.toFixed(1)} ★</p>
          <Link to={`/book/${book.id}`} className="btn btn-primary">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
