import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navBar";
import About from "./components/about";
import Contact from "./components/contact";
import NewArrivals from "./components/newArrivals";
import Products from "./components/products";
import SplashPage from "./components/splashPage";
import Support from "./components/support";
import Footer from "./components/footer";


function App() {
  return (
    <div className="App bg-dark">
      <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<SplashPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/newarrivals" element={<NewArrivals />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
