import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Player from "./Players";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Player></Player>
      <Footer></Footer>
    </div>
  );
}
