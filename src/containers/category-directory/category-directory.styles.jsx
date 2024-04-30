import { styled } from "styled-components";

export const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 1200px) {
    width: 55%;
    margin: 0px auto 20px;
  }
`;
