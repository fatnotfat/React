import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Players from "./Players";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Players></Players>
      <Footer></Footer>
    </div>
  );
}
