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
    font-size: 14px;
    line-height: 24px;

    color: #333333;
  }

  .totalmoney {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    color: #828282;
  }

  button {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;

    width: 100%;
    height: 60px;

    background: #e0e0e0;
    border: 2px solid #e0e0e0;
    border-radius: 8px;

    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    color: #828282;

    text-decoration: none;

    cursor: pointer;
  }
`;
