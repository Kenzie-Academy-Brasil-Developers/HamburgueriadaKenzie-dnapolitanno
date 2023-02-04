import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Api } from "./components/RequestApi";

export function App() {
  const localStorageData = localStorage.getItem("data");
  const [burguerlist, setBurguerlist] = useState([]);
  const [cartburguerlist, setCartburguerlist] = useState(
    JSON.parse(localStorageData) || []
  );
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function renderProducts() {
      try {
        const response = await Api.get("products");
        setBurguerlist(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    renderProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(cartburguerlist));
  }, [cartburguerlist]);

  return (
    <section className="App">
      <Header />
      <Home
        burguerlist={burguerlist}
        setBurguerlist={setBurguerlist}
        cartburguerlist={cartburguerlist}
        setCartburguerlist={setCartburguerlist}
        count={count}
        setCount={setCount}
      />
    </section>
  );
}
