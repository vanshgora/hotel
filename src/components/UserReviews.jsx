// components/UserReviews.js
import React from 'react';
import './UserReviews.css';

const userReviewsData = [
  {
    id: 1,
    username: 'Jane Doe',
    avatar: 'path/to/jane-avatar.jpg',
    rating: 4.5,
    comment: 'Amazing experience! The hotel exceeded my expectations.',
  },
  {
    id: 2,
    username: 'John Smith',
    avatar: 'path/to/john-avatar.jpg',
    rating: 5,
    comment: 'Fantastic service and beautiful accommodations. Highly recommended!',
  },
  // Add more reviews as needed
];

const UserReviews = () => {
  return (
    <section className="user-reviews section">
      <div className="container">
        <h2 className="user-reviews-title title is-2">User Reviews</h2>
        <div className="columns is-multiline">
          {userReviewsData.map((review) => (
            <div key={review.id} className="column is-half">
              <div className="user-review card">
                <div className="user-review-content card-content">
                  <div className="user-review-header">
                    <img src={review.avatar} alt={`${review.username}'s Avatar`} className="user-avatar" />
                    <div className="user-info">
                      <p className="username">{review.username}</p>
                      <p className="rating">{review.rating} stars</p>
                    </div>
                  </div>
                  <p className="user-comment">{review.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserReviews;
