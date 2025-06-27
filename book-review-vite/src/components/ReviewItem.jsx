import React from 'react';

const ReviewItem = ({ review, currentUser, onDelete }) => (
  <div className="border p-3 rounded mb-2 bg-white shadow-sm">
    <div className="d-flex justify-content-between align-items-start">
      <div>
        <strong>{review.username}</strong>
        <div style={{ color: '#ffcc00', fontSize: '1.2rem' }}>
          {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
        </div>
        <p>{review.comment}</p>
      </div>
      {review.username === currentUser && (
        <button className="btn btn-outline-danger btn-sm ms-2" onClick={onDelete}>
          Delete
        </button>
      )}
    </div>
  </div>
);

export default ReviewItem;
