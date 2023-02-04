import React from "react";
import { Cartlist } from "../Cartlist";
import { Productslist } from "../Productslist";
import { Container } from "./style";

export const Home = ({
  burguerlist,
  setBurguerlist,
  cartburguerlist,
  setCartburguerlist,
  count,
  setCount
}) => {
  return (
    <Container>
      <Productslist
        burguerlist={burguerlist}
        setBurguerlist={setBurguerlist}
        cartburguerlist={cartburguerlist}
        setCartburguerlist={setCartburguerlist}
        count={count}
        setCount={setCount}
      />
      <Cartlist
        burguerlist={burguerlist}
        setBurguerlist={setBurguerlist}
        cartburguerlist={cartburguerlist}
        setCartburguerlist={setCartburguerlist}
        count={count}
        setCount={setCount}
      />
    </Container>
  );
};
