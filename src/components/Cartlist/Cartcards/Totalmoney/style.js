import styled from "styled-components";

export const Totalmoneycontainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 14px;

  width: 100%;

  padding: 10px;

  border-top: 2px solid var(--color-grey-2);

  div > span {
    font-weight: 600;
    font-size: var(--font-size-5);
    line-height: 24px;

    color: var(--color-grey-4);
  }

  .totalmoney {
    font-weight: 600;
    font-size: var(--font-size-5);
    line-height: 24px;

    color: var(--color-grey-3);

    width: max-content;
  }

  button {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;

    width: 100%;
    height: 60px;

    background: var(--color-grey-2);
    border: 2px solid var(--color-grey-2);
    border-radius: 8px;

    font-weight: 600;
    font-size: var(--font-size-4);
    line-height: 19px;

    color: var(--color-grey-3);

    text-decoration: none;  

    cursor: pointer;
  }
`;
