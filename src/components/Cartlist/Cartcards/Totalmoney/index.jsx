import React from "react";
import { Totalmoneycontainer } from "./style";

export const Totalmoney = ({ cartburguerlist, setCartburguerlist }) => {
  const removeallcardprodut = () => {
    localStorage.clear();
    setCartburguerlist([]);
  };
  console.log(cartburguerlist);

  return (
    <Totalmoneycontainer>
      <div>
        <span className="total">Total</span>
        <span className="totalmoney">
          {cartburguerlist
            .reduce(
              (accumulator, accumulated) => accumulator + accumulated.price,
              0
            )
            .toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
        </span>
      </div>
      <button onClick={() => removeallcardprodut()}>Remover todos</button>
    </Totalmoneycontainer>
  );
};
