import React from "react";
import "./App.css";
import Banner from "./Banner";
import Navbar from "./Navbar";
import RowList from "./RowList";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <RowList />
    </div>
  );
}

export default App;
