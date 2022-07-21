import React from "react";
import HeroImage from "../../assets/images/Hero Image.png";

import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content-container">
        <div className="hero-content">
          <h1 className="hero-title">Your NFT's and tokens tracker on celo</h1>
          <p className="hero-paragraph">
            Celohodler is the easiest way to track your celo tokens and NFT’s.
            Just connect your wallet and your good to go.
          </p>
          <button className="btn">Connect Wallet</button>
        </div>
        <div className="hero-image-container">
          <img src={HeroImage} alt="Wallet" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
