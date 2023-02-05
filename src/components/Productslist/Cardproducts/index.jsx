  import { Ulcontainer } from "./style.js";
import { toast } from "react-toastify";

export function Renderprodutsdata({
  cartburguerlist,
  setCartburguerlist,
  searchproducts
}) {
  const addcardproduct = (newProduct) => {
    if (!cartburguerlist.some((product) => product.id === newProduct.id)) {
      setCartburguerlist([...cartburguerlist, newProduct]);
      toast.success("Produto adicionado ao carrinho!");
    } else {
      toast.warn("Produto já existe no carrinho!");
    }
  };

  return (
    <Ulcontainer>
      {searchproducts.map((product) => (
        <li key={product.id}>
          <div className="containerimgcard">
            <img src={product.img} alt="" />
          </div>
          <div className="containerinfocard">
            <h3>{product.name}</h3>
            <span>{product.category}</span>
            <p>
              {Math.abs(product.price).toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <button onClick={() => addcardproduct(product)}>Adicionar</button>
          </div>
        </li>
      ))}
    </Ulcontainer>
  );
}
