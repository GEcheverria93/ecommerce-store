import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Products from "./pages/products";
import Cart from "./pages/cart";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-container">
         <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

