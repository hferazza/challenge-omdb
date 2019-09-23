import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar nav-wrapper red darken-4">
      <div className="container">
        <Link to='/' className="brand-logo">Challenge OMDb</Link>
      </div>
    </nav>

  );
};

export default Navbar;