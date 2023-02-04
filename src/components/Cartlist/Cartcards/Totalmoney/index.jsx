import React from "react";
import { Totalmoneycontainer } from "./style";

export const Totalmoney = ({ cartburguerlist, setCartburguerlist }) => {
  const removeallcardprodut = () => {
    localStorage.clear();
    setCartburguerlist([]);
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
      <button onClick={() => removeallcardprodut()}>Remover todos</button>
    </Totalmoneycontainer>
  );
};
