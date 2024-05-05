import styled from "styled-components";

import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export const CategoryTitleLink = styled(Link)`
  cursor: pointer;
  &:hover {
    color: darkblue;
  }
`;
