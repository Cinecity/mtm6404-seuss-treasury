import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BooksPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://seussology.info/api/books")
      .then((response) => response.json())
      .then((data) => setBooks(data.books))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <div className="books-grid">
        {books.map((book) => (
          <Link to={`/book/${book.id}`} key={book.id}>
            <img src={book.coverImage} alt={book.title} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
