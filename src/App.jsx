import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Api } from "./RequestApi";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export function App() {
  const localStorageData = localStorage.getItem("data");
  const [burguerlist, setBurguerlist] = useState([]);
  const [cartburguerlist, setCartburguerlist] = useState(
    JSON.parse(localStorageData) || []
  );
  const [search, setSearch] = useState("");

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
      <Header setSearch={setSearch} />
      <Home
        burguerlist={burguerlist}
        setBurguerlist={setBurguerlist}
        cartburguerlist={cartburguerlist}
        setCartburguerlist={setCartburguerlist}
        search={search}
        setSearch={setSearch}
      />
      <ToastContainer
        position="top-center"
        autoClose={1800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
}
