import { useState } from "react";
import { Header } from "./components/Header/index.jsx";
import { Home } from "./components/Home/index.jsx";

export function App() {
  return (
    <section className="App">
      <Header />
      <Home />
    </section>
  );
}
