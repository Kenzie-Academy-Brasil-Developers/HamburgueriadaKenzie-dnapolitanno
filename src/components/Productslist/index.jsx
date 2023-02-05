import { Renderprodutsdata } from "./Cardproducts";

export function Productslist({
  burguerlist,
  cartburguerlist,
  setCartburguerlist,
  search,
}) {
  const searchproducts = burguerlist.filter((product) => {
    return search === ""
      ? true
      : product.name.toLowerCase().includes(search.toLowerCase());
  });
  
  return (
    <>
      <Renderprodutsdata
        burguerlist={burguerlist}
        cartburguerlist={cartburguerlist}
        setCartburguerlist={setCartburguerlist}
        searchproducts={searchproducts}
      />
    </>
  );
}
