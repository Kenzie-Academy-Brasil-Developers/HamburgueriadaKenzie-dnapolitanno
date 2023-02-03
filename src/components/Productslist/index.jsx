import { useEffect, useState } from "react";
import { Renderprodutsdata } from "./Cardproducts";
import axios from "axios";

export const Api = axios.create({
  baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com/",
  timeout: 5000,
});

export function Productslist() {
  const [burguerlist, setBurguerlist] = useState([]);

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

  return (
    <>
      <Renderprodutsdata burguerlist={burguerlist} />
    </>
  );
}
