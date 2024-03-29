import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap");

* {
  margin: 0 auto;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

:root {
  --color-primary-1: #27ae60;
  --color-primary-2: #93d7af;
  --color-secondary: #eb5757;

  --color-grey-0: #ffffff;
  --color-grey-1: #f5f5f5;
  --color-grey-2: #e0e0e0;
  --color-grey-3: #828282;
  --color-grey-4: #333333;

  --color-feedback-negative: #e60000;
  --color-feedback-warning: #ffcd07;
  --color-feedback-sucess: #168821;
  --color-feedback-information: #155bcb;

  --font-size-0: 1.5rem;
  --font-size-1: 1.375rem;
  --font-size-2: 1.25rem;
  --font-size-3: 1.125rem;
  --font-size-4: 1rem;
  --font-size-5: 0.875rem;
  --font-size-6: 0.75rem;
  --font-size-7: 0.625rem;
  --font-size-8: 0.5rem;

  --font-family: "Inter", sans-serif;
}

body {
  font-family: var(--font-family);
}
`;
