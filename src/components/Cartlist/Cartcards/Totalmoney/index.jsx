import React from "react";
import { Totalmoneycontainer } from "./style";

export const Totalmoney = ({ cartburguerlist, setCartburguerlist }) => {
  const removeallcardprodut = (newid) => {
    const newlistproducts = cartburguerlist.filter(
      (product) => product.id !== newid
    );
    setCartburguerlist(newlistproducts);
  };

  return (
    <Totalmoneycontainer>
      <div>
        <span className="total">Total</span>
        <span className="totalmoney">
          {Math.abs().toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <button>Remover todos</button>
    </Totalmoneycontainer>
  );
};
