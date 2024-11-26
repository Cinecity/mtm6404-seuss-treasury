import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Books</Link>
      <Link to="/quotes">Quotes</Link>
    </nav>
  );
};

export default Navbar;
