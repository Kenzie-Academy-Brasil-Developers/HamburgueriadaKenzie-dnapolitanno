import React from "react";
import { Cartlist } from "../Cartlist";
import { Productslist } from "../Productslist";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <Productslist />
      <Cartlist />
    </Container>
  );
};
