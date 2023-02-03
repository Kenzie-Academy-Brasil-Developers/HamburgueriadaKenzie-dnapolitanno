import { useState } from "react";
import { Header } from "./components/Header/index.jsx";
import { Getdata } from "./components/Productslist/index.jsx";

export function App() {
  return (
    <section className="App">
      <Header />
      <Getdata />
    </section>
  );
}
