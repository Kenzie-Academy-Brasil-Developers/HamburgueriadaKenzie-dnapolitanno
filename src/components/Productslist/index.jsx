import { Renderprodutsdata } from "./Cardproducts";

export function Productslist({
  burguerlist,
  cartburguerlist,
  setCartburguerlist,
}) {
  const addcardproduct = (newProduct) => {
    if (!cartburguerlist.some((product) => product.id === newProduct.id)) {
      setCartburguerlist([...cartburguerlist, newProduct]);
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
