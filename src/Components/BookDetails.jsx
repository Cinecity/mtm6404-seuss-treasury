import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://seussology.info/api/book/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h1>{book.title}</h1>
      <img src={book.coverImage} alt={book.title} />
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetails;
