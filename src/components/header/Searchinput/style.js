import styled from "styled-components";

export const Navsearch = styled.nav`
  width: 100%;

  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px 0px 15px;

    width: 100%;
    height: 60px;

    background: var(--color-grey-0);

    border: 2px solid var(--color-grey-2);
    border-radius: 8px;
  }

  input {
    font-weight: 400;
    font-size: var(--font-size-4);
    line-height: 19px;

    width: 10rem;

    color: var(--color-grey-4);
  }

  input::placeholder {
    color: var(--color-grey-2);
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 10px;

    width: 107px;
    height: 40px;

    background: var(--color-primary-1);
    border: 2px solid var(--color-primary-1);
    border-radius: 8px;

    color: var(--color-grey-0);

    cursor: pointer;
  }

  button:hover {
    background: var(--color-primary-2);
    border: 2px solid var(--color-primary-2);
  }

  @media (min-width: 375px) {
    h1 {
      font-size: 1.875rem;
      heigth: 22px;
    }

    span {
      font-size: var(--font-size-1);
      heigth: 22px;

      color: var(--color-secondary);
    }

    form {
      width: 20rem;
    }
  }

  @media (min-width: 990px) {
    display: flex;
    justify-content: space-between;

    width: max-content;

    form {
      width: 23.875rem;
      gap: 6.25rem;
    }
  }
`;
