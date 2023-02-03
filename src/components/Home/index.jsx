import React from "react";
import { Cartlist } from "../Cartlist";
import { Productslist } from "../Productslist";
import { Container } from "./style";

export const Home = ({
  burguerlist,
  setBurguerlist,
  cartburguerlist,
  setCartburguerlist,
}) => {
  return (
    <Container>
      <Productslist
        burguerlist={burguerlist}
        setBurguerlist={setBurguerlist}
        cartburguerlist={cartburguerlist}
        setCartburguerlist={setCartburguerlist}
      />
      <Cartlist
        burguerlist={burguerlist}
        setBurguerlist={setBurguerlist}
        cartburguerlist={cartburguerlist}
        setCartburguerlist={setCartburguerlist}
      />
    </Container>
  );
};
