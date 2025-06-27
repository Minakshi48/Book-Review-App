import React, { useState, useEffect } from 'react';

const ReviewForm = ({ onSubmit, initialComment = '', initialRating = 0, isEditing = false, onCancel }) => {
  const [comment, setComment] = useState(initialComment);
  const [rating, setRating] = useState(initialRating);

  useEffect(() => {
    setComment(initialComment);
    setRating(initialRating);
  }, [initialComment, initialRating]);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim() || rating === 0) {
      window.alert('Please provide a review message and a rating before submitting.');
      return;
    }
    onSubmit({ comment, rating });
    setComment('');
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <div className="mb-3">
        <label className="form-label">Your Review</label>
        <textarea
          className="form-control"
          rows="3"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your thoughts..."
        ></textarea>
      </div>
      <div className="mb-3">
        <label className="form-label">Rating</label>
        <div>
          {[...Array(5)].map((_, i) => (
            <button
              key={i}
              type="button"
              className="btn p-0 me-1 border-0 bg-transparent"
              onClick={() => handleStarClick(i)}
              style={{ fontSize: '1.5rem', color: i < rating ? '#ffcc00' : '#ccc' }}
            >
              ★
            </button>
          ))}
        </div>
      </div>
      <button type="submit" className="btn btn-success mt-2">{isEditing ? 'Update Review' : 'Submit Review'}</button>
      {isEditing && <button type="button" className="btn btn-secondary mt-2 ms-2" onClick={onCancel}>Cancel</button>}
    </form>
  );
};

export default ReviewForm;

