import React from "react";
// import { Emptylist } from "./Emptylist";
import { Cartcards } from "./Cartcards";
import { Cartcontainer } from "./style";

export const Cartlist = ({
  burguerlist,
  setBurguerlist,
  cartburguerlist,
  setCartburguerlist,
}) => {
  return (
    <>
      <Cartcontainer>
        <h4>Carrinho de compras</h4>
        {/* <Emptylist /> */}
        <Cartcards
          burguerlist={burguerlist}
          setBurguerlist={setBurguerlist}
          cartburguerlist={cartburguerlist}
          setCartburguerlist={setCartburguerlist}
        />
      </Cartcontainer>
    </>
  );
};
