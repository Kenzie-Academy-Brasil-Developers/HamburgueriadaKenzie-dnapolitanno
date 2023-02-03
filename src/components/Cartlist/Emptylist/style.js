import styled from "styled-components";

export const Emptylistcontainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 10px;

  width: 100%;

  height: 158px;

  background: var(--color-grey-1);
  border-radius: 0px 0px 5px 5px;

  h5 {
    font-weight: 700;
    font-size: var(--font-size-3);
    line-height: 24px;

    text-align: center;

    color: var(--color-grey-5);

    background: var(--color-grey-1);
  }

  span {
    font-weight: 400;
    font-size: var(--font-size-5);
    line-height: 24px;

    text-align: center;

    color: var(--color-grey-3);
  }

  @media (min-width: 990px) {
    width: 365px;
  }
`;
