import styled from "styled-components";

export const ProductsPageContainer = styled.div`
  padding-top: 0;
`;

export const ProductsContainer = styled.div`
  padding: 30px 10px;
  @media screen and (min-width: 700px) {
    display: flex;

    .left {
      flex: 1;
      position: sticky;
      height: 100%;
      top: 50px;
    }
  }
`;

export const LeftFilterBar = styled.div`
  margin-bottom: 30px;

  font-family: var(--font-family-shopinfo);
  font-size: 1em;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.6em;

  .buttonContainer {
    display: flex;
    justify-content: center;
  }

  .filterItem {
    margin-bottom: 30px;

    h2 {
      font-weight: 400;
      margin-bottom: 20px;
    }

    .inputItem {
      margin-bottom: 10px;
      label {
        margin-left: 10px;
      }
    }
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #d46a6a;
    cursor: grab;
    box-shadow: 0 0 2px 0 #555;
  }
  input[type="range"]::-webkit-slider-thumb {
    transition: background 0.3s ease-in-out;
  }
  input[type="range"]::-webkit-slider-thumb:hover {
    box-shadow: #d46a6a50 0px 0px 0px 8px;
  }

  input[type="range"]::-webkit-slider-thumb:active {
    box-shadow: #d46a6a50 0px 0px 0px 11px;
    transition: box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      left 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      bottom 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  button {
    text-align: center;
  }

  @media screen and (min-width: 700px) {
    flex: 1;
    position: sticky;
    height: 100%;
    top: 50px;
  }
`;

export const RightMainPage = styled.div`
  flex: 3;

  .catImg {
    width: 100%;
    height: 300px;
    object-fit: cover;
    margin-bottom: 50px;
  }
`;
