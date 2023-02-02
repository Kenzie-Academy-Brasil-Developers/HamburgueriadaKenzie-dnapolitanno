import { useEffect, useState } from "react";
import axios from "axios";

export const Api = axios.create({
  baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com/",
  timeout: 5000,
});

function Getdata() {
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
    <div>
      {burguerlist.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </div>
  );
}

export default Getdata;
