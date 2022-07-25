import React from "react";
import { Link } from "react-router-dom";

export const NavbarMenu = ({ tab, setTab }) => {
  return (
    <div className="subheader">
      <nav id="navbar-example2" className="navbar navbar-light bg-dark p-0">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link
              className={`nav-link ${tab === 1 ? "bg-blue-500" : ""}`}
              to="documenation/introduction"
              onClick={() => setTab(1)}
            >
              Documentation
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${tab === 2 ? "bg-blue-500" : ""}`}
              to="/api-keys"
              onClick={() => setTab(2)}
            >
              Keys
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${tab === 3 ? "bg-blue-500" : ""}`}
              to="/webhooks"
              onClick={() => setTab(3)}
            >
              Webhooks
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
