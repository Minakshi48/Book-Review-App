import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from '../components/ReviewForm';
import ReviewItem from '../components/ReviewItem';
import booksData from '../data/books.json';

const BookDetailPage = () => {
  const { id } = useParams();
  const book = booksData.find(b => b.id.toString() === id);
  const [reviews, setReviews] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editData, setEditData] = useState({});


  const user = JSON.parse(localStorage.getItem('currentUser'));

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem('bookReviews')) || {};
    setReviews(all[book.id] || []);
  }, [book.id]);

  const saveReviews = (updated) => {
    const all = JSON.parse(localStorage.getItem('bookReviews')) || {};
    all[book.id] = updated;
    localStorage.setItem('bookReviews', JSON.stringify(all));
  };

  const handleSubmit = ({ comment, rating }) => {
  const username = user.username;
  let updated = [...reviews];

  const existingIndex = updated.findIndex(r => r.username === username);

  if (editingIndex !== null) {
    // We are editing
    updated[editingIndex] = { username, comment, rating };
  } else if (existingIndex !== -1) {
    // User already has review and is not editing
    window.alert('You can add review only once. Please use the edit option.');
    return;
  } else {
    // New review
    updated.push({ username, comment, rating });
  }

  setReviews(updated);
  saveReviews(updated);
  setEditingIndex(null);
  setEditData({});
};



const handleDelete = (index) => {
  const updated = [...reviews];
  updated.splice(index, 1);
  setReviews(updated);
  saveReviews(updated);
  setEditingIndex(null);
  setEditData({});
};



const handleEdit = (index) => {
  setEditingIndex(index);
  setEditData({
    comment: reviews[index].comment,
    rating: reviews[index].rating
  });
  window.scrollTo(0, document.body.scrollHeight); // optional: scroll to form
};


  return (
    <div className="container py-4">
      <div className="card p-4 shadow-lg">
        <h2 className="mb-2">{book.title}</h2>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Genre:</strong> {book.genre}</p>
        <p>{book.description}</p>
        <hr />
        <h4>Reviews</h4>
        {reviews.map((r, index) => (
  <div key={index} className="card p-2 mb-2">
    <div>
      <strong>{r.username}</strong>
    </div>
    <div>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < r.rating ? '#ffcc00' : '#ccc', fontSize: '1.2rem' }}>★</span>
      ))}
    </div>
    <div>{r.comment}</div>
    {user?.username === r.username && (
      <div className="mt-2">
        <button className="btn btn-sm btn-secondary me-2" onClick={() => handleEdit(index)}>Edit</button>
        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(index)}>Delete</button>
      </div>
    )}
  </div>
))}

        <hr />
        <h5>{editingIndex !== null ? 'Edit Your Review' : 'Add a Review'}</h5>
        <ReviewForm
  onSubmit={handleSubmit}
  initialComment={editData.comment}
  initialRating={editData.rating}
  isEditing={editingIndex !== null}
  onCancel={() => {
    setEditingIndex(null);
    setEditData({});
  }}
/>

      </div>
    </div>
  );
};

export default BookDetailPage;
