import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  width: 90vw;

  @media (min-width: 990px) {
    flex-direction: row;

    width: 84vw;
  }
`;
