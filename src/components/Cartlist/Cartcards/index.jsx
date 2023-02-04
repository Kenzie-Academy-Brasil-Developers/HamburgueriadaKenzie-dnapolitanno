import React from "react";
import { Productscartcontainer } from "./style";
import { Totalmoney } from "./Totalmoney";
import { toast } from "react-toastify";

export const Cartcards = ({ cartburguerlist, setCartburguerlist }) => {
  const removecardprodut = (newid) => {
    const newlistproducts = cartburguerlist.filter(
      (product) => product.id !== newid
    );
    setCartburguerlist(newlistproducts);
    toast.success("Produto removido do carrinho!");
  };

  return (
    <>
      <Productscartcontainer>
        <ul>
          {cartburguerlist.map((productcart) => (
            <li key={productcart.name}>
              <div>
                <div className="containerimgcart">
                  <img src={productcart.img} alt="" />
                </div>
                <div className="containerinfocart">
                  <h3>{productcart.name}</h3>
                  <span>{productcart.category}</span>
                </div>
              </div>
              <button onClick={() => removecardprodut(productcart.id)}>
                Remover
              </button>
            </li>
          ))}
        </ul>
        <Totalmoney
          cartburguerlist={cartburguerlist}
          setCartburguerlist={setCartburguerlist}
        />
      </Productscartcontainer>
    </>
  );
};
