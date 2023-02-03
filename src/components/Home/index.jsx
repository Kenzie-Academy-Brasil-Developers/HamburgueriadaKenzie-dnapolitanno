import React from "react";
import { Cartlist } from "../Cart";
import { Emptylist } from "../Cart/Emptylist";
import { Productslist } from "../Productslist";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <Productslist />
      <section>
          <h4>Carrinho de compras</h4>
        <Emptylist />
        <Cartlist />
      </section>
    </Container>
  );
};
