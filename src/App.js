import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Player from "./Players";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}
