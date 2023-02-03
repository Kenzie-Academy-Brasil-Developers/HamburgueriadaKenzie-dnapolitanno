import React from "react";

export const Cartcards = ({ cartburguerlist, setCartburguerlist }) => {
  const removecardprodut = (newid) => {
    const newlistproducts = cartburguerlist.filter(
      (product) => product.id !== newid
    );
    setCartburguerlist(newlistproducts);
  };

  return (
    <>
      <section>
        <ul>
          {cartburguerlist.map((productcart) => (
            <li key={productcart.name}>
              <div className="containerimgcart">
                <img src={productcart.img} alt="" />
              </div>
              <div className="containerinfocart">
                <h3>{productcart.name}</h3>
                <span>{productcart.category}</span>
                <button onClick={() => removecardprodut(productcart.id)}>
                  Remover
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
