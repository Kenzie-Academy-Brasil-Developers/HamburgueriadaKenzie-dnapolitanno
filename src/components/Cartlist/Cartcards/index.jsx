import React from "react";

export const Cartcards = ({
  burguerlist,
  setBurguerlist,
  cartburguerlist,
  setCartburguerlist,
}) => {
  return (
    <>
      <section>
        <ul>
          {/* {arraylist.map((productcart) => (
            <li key={productcart.name}>
              <div className="containerimgcart">
                <img src={productcart.img} alt="" />
              </div>
              <div className="containerinfocart">
                <h3>{productcart.name}</h3>
                <span>{productcart.category}</span>
                <button>Remover</button>
              </div>
            </li>
          ))} */}
        </ul>
      </section>
    </>
  );
};
