import { useState } from "react";
import Header from "./components/header";
import Getdata from "./components/Productslist";
import "./App.css";

function App() {
  return (
    <section className="App">
      <Header />
      <Getdata />
    </section>
  );
}

export default App;
