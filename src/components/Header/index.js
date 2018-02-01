import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
    <div className="container">
      <Link href="/" className="navbar-brand" to="/">Dictionary</Link>
      <div className="collapse navbar-collapse">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/" href="/" activeClassName="active" exact>Dictionary</NavLink>
          <NavLink className="nav-item nav-link" to="/quiz" href="/quiz" activeClassName="active" exact>Quiz</NavLink>
        </div>
      </div>
    </div>
  </nav>);

export default Header;
