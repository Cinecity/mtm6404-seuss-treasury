import { useEffect, useState } from "react";

const QuotesPage = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://seussology.info/api/quotes")
      .then((response) => response.json())
      .then((data) => setQuotes(data.quotes.slice(0, 10)))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Quotes</h1>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>{quote}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuotesPage;
