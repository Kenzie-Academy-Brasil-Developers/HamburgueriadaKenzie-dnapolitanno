import { useEffect, useState } from "react";
import { Renderprodutsdata } from "./Cardproducts";
import axios from "axios";

export const Api = axios.create({
  baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com/",
  timeout: 5000,
});

export function Productslist({}) {
  // if (!localStorage.data) localStorage.setItem("data", "[]");

  const [burguerlist, setBurguerlist] = useState([]);
  const [cartburguerlist, setCartburguerlist] = useState(
    JSON.parse(localStorage.data) || []
  );

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

  const addcardproduct = (newProduct) => {
    if (!cartburguerlist.some((product) => product.id === newProduct.id)) {
      setCartburguerlist([...burguerlist, newProduct]);
      alert("adicionado");
    } else {
      alert("já possui este lanche no carrinho ");
    }
  };

  return (
    <>
      <Renderprodutsdata
        burguerlist={burguerlist}
        addcardproduct={addcardproduct}
      />
    </>
  );
}
