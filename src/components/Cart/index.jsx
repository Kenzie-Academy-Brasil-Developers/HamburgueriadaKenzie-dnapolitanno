import React from "react";
import Emptylist from "./Emptylist";
import { Cartcontainer } from "./style";

export const Cart = () => {
  return (
    <>
      <Cartcontainer>
        <div>
          <h3>Carrinho de compras</h3>
        </div>
        <div>
            <Emptylist/>
        </div>
      </Cartcontainer>
    </>
  );
};
