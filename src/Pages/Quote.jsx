import React from 'react';
import Quote from '../Components/BookDetails';

const QuotesPage = () => {
  const quotes = [
    {
      quote: "I do not like them, Sam. I do not like them, I do not like green eggs and ham. I do not like them, Sam. I do not like green eggs and ham.",
      character: "Sneetches"
    },
    // Add more quote objects as needed
  ];

  return (
    <div>
      <h1>Quotes</h1>
      {quotes.map((quote) => (
        <Quote key={quote.quote} quote={quote} />
      ))}
    </div>
  );
};

export default QuotesPage;
