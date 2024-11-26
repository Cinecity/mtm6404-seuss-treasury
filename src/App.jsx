import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BooksPage from "./components/BooksPage";
import BookDetails from "./components/BookDetails";
import QuotesPage from "./components/QuotesPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/quotes" element={<QuotesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
