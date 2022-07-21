import React from "react";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";

import {Home,Profile,Item, Create} from './pages'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemRelist from "./pages/itemRelist/itemRelist";
import {Navbar} from './components'
import './App.css';

function App() {
  return (
    <><Router>


      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="nft/:id" element={<Item />} />
        <Route path="nft/:id/relist" element={<ItemRelist />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      

    </Router><div className="App">
         <Dashboard />
        <LandingPage />
      </div></>
  );
}

export default App;
