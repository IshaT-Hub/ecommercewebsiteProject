import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shopping-cart  </Link>
        <Link to="/contact"> detail of contact </Link>
        <Link to="/cart">
          <ShoppingCart size={34} />
        </Link>
      </div>
    </div>
  );
};
