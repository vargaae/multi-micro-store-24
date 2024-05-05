import styled from "styled-components";

export const SignFormContainer = styled.div`
  h2 {
    margin: 10px 0;
  }
  /*  On screens that are 769px wide or more, there is one column in a row,
On screens that are 769px wide or more, make the columns in the middle */
  @media screen and (min-width: 769px) {
    display: flex;
    flex-direction: column;
    width: 300px;
  }

  /*  On screens that are 900px wide or more, go from one column to two columns, 
so make the columns stack on top of each other instead of next to each other */
  @media screen and (min-width: 900px) {
    width: 380px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
