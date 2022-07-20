import React from "react";
import Logo from "../assets/images/Celo-Hodler-Logo.png"
import "./Navbar.css";

const Navbar = () => {
  return (
    <section className="navbar-container">
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="Celo Hodler Logo" />
        </div>
        <p className="wallet-link">Connect Wallet</p>
      </div>
    </section>
  );
};

export default Navbar;
