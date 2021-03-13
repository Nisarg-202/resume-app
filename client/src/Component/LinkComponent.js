import React from 'react';
import {Link} from 'react-router-dom';

function LinkComponent() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Resume App
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              InputPage
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/list">
              ListPage
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default LinkComponent;
