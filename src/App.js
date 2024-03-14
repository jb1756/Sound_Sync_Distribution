import React from "react";
import './App.css';
import NavBar from "./components/navBar";
import About from "./components/about";
import Contact from "./components/contact";
import NewArrivals from "./components/newArrivals";
import Products from "./components/products";
import SplashPage from "./components/products";
import Support from "./components/support";
import Footer from "./components/footer";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
            <Route path="/splashpage" element={<SplashPage />} />
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
