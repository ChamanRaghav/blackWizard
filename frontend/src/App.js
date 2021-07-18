import React from "react";
import "./App.css";
import NavBar from "./widget/NavBar/NavBar";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./widget/Footer";

function App() {
  return (
    <div className="App mt-85">
      <Router>
        <NavBar />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
