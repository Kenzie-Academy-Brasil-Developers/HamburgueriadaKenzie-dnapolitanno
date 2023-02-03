import styled from "styled-components";

export const Ulcontainer = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  width: max-content;
  gap: 1.25rem;

  margin-top: 1.875rem;

  overflow-x: auto;

  li {
    width: 300px;
    height: 346px;

    background: #ffffff;

    border: 2px solid #e0e0e0;
    border-radius: 5px;
  }

  .containerimgcard {
    display: flex;
    justify-content: center;

    height: 150px;

    background-color: var(--color-grey-1);
  }

  .containerinfocard {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;

    width: 300px;

    padding: 1.25rem 1.875rem;
  }

  h3 {
    width: 100%;

    font-weight: 700;
    font-size: var(--font-size-4);
    line-height: 24px;

    color: var(--color-primary-4);
  }

  span {
    width: 100%;

    font-weight: 400;
    font-size: var(--font-size-6);
    line-height: 16px;

    color: var(--color-primary-3);
  }

  p {
    width: 100%;

    font-weight: 600;
    font-size: var(--font-size-5);
    line-height: 24px;

    color: var(--color-primary-1);
  }

  button {
    width: 106px;
    height: 40px;

    margin: 0;

    font-weight: 600;
    font-size: var(--font-size-5);
    line-height: 17px;

    color: #ffffff;

    background: var(--color-primary-1);

    border: 2px solid var(--color-primary-1);
    border-radius: 8px;

    cursor: pointer;
  }

  @media (min-width: 990px) {
    flex-wrap: wrap;

    overflow-x: none;
  }
`;
