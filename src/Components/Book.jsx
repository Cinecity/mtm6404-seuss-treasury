import React from 'react';

const Book = ({ title, description, imageUrl }) => {
  return (
    <div className="book">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Book;
