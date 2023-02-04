import { Renderprodutsdata } from "./Cardproducts";
import { toast } from "react-toastify";

export function Productslist({
  burguerlist,
  cartburguerlist,
  setCartburguerlist,
  count,
  setCount,
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
    <>
      <Renderprodutsdata
        burguerlist={burguerlist}
        addcardproduct={addcardproduct}
        count={count}
        setCount={setCount}
      />
    </>
  );
}
