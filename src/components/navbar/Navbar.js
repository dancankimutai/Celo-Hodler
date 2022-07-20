import React from "react";
import  { useState} from 'react';
import Logo from "../../assets/images/Celo-Hodler-Logo.png"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import {  Link } from "react-router-dom";
import {useContractKit} from "@celo-tools/use-contractkit";
import {truncateAddress} from "../../utils/helpers";
import "./Navbar.css";

const Menu = () => (
  <>
     <Link to="/"><p>Explore</p> </Link>
      <Link to="/profile">  <p>My NFTs</p></Link>

  </>
 )

const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false)

     const {address, destroy, connect} = useContractKit();
  return (
    <section className="navbar-container">
      <div className="navbar-links"></div>
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="Celo Hodler Logo" />
        </div>
        <div className="navbar-links_container">
          <input type="text" placeholder='Search NFT Here' autoFocus={true} />
         <Menu />
         {address && <Link to="/"><p onClick={destroy}>Logout</p></Link> }

        </div>
      </div>
      <div className="navbar-sign">
      {!address ? (
        <>

        <button type='button' className='secondary-btn' onClick={connect}>Connect</button>
        </>
      ): (
        <>

          <button type='button' onClick={destroy} className='secondary-btn'>{truncateAddress(address)}</button>


             <Link to="/create">
              <button type='button' className='primary-btn' >Mint NFT</button>
            </Link>
        </>
      )}



      </div>
      <div className="navbar-menu">
        {toggleMenu ?
        <RiCloseLine  color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center" >
            <div className="navbar-menu_container-links">
             <Menu />
            </div>
            <div className="navbar-menu_container-links-sign">
            {address ? (
              <>

              <button type='button' className='secondary-btn'>{truncateAddress(address)}</button>

              <Link to="/create">
                <button type='button' className='primary-btn' >Mint NFT</button>
              </Link>

              </>
            ): (
              <>

                <button type='button' className='secondary-btn'>Connect Wallet</button>

              </>
            )}

            </div>
            </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
