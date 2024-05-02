import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px 40px;
  margin-bottom: 1rem;

  @media screen and (min-width: 1200px) {
    width: 55%;
    margin: 0px auto 20px;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 1rem;
  text-align: left;
  text-transform: uppercase;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;
