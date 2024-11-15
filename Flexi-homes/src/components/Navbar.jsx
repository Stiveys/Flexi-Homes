import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1>Flexi-homes</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/listings">Listings</Link></li>
        <li><Link to="/bookings">Bookings</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
