import styled from "styled-components";

export const Cartcontainer = styled.section`
  margin-top: 1.625rem;

  width: 100%;

  h4 {
    display: flex;
    align-items: center;

    padding: 20px;

    width: 100%;
    height: 65px;

    font-weight: 700;
    font-size: 18px;
    line-height: 24px;

    color: var(--color-grey-0);

    background: var(--color-primary-1);
    border-radius: 5px 5px 0px 0px;
  }

  @media (min-width: 990px) {
    width: 365px;

    h4 {
      width: 365px;
      height: 65px;
    }
  }
`;
