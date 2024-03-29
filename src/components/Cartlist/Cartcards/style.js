import styled from "styled-components";

export const Productscartcontainer = styled.section`
  margin-bottom: 40px;

  width: 100%;
  heigth: max-content;

  background-color: var(--color-grey-1);

  ul {
    padding: 10px;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    margin: 0;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: flex-start;
    gap: 10px;

    margin: 0;
  }

  .containerimgcart {
    width: 80px;

    background-color: var(--color-grey-2);

    border-radius: 5px;
  }

  img {
    width: 80px;
  }

  .containerinfocart {
    display: flex;
    flex-direction: column;
  }

  h3 {
    width: 100%;

    font-weight: 700;
    font-size: 14px;
    line-height: 24px;

    color: var(--color-grey-4);
  }

  span {
    width: 100%;

    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: var(--color-grey-3);
  }

  button {
    margin: 0;

    font-size: 12px;
    font-weight: 500;
    line-height: 15px;

    color: #bdbdbd;

    background-color: var(--color-grey-1);

    cursor: pointer;
  }

  button:hover {
    color: var(--color-grey-4);

    text-decoration: underline;
  }
`;
