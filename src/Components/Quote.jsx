import React from 'react';

const Quote = ({ quote }) => {
  return (
    <div className="quote">
      <p>"{quote.quote}"</p>
      <small>- {quote.character}</small>
    </div>
  );
};

export default Quote;
