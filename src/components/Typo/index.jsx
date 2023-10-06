import { styled } from "styled-components";

const H1 = styled.h1`
  width: 80%;
  /* max-width: 65rem; */
  color: #fff;
  text-align: center;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: rgba(0, 240, 118, 0.37);
  margin: auto;
  font-family: Mona Sans, sans-serif;
  font-size: 5.6rem;
  line-height: 6rem;
  font-weight: 800;

  span {
    font: inherit;
    line-height: inherit;
    color: #fecc0b;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: rgba(0, 240, 118, 0.56);
    overflow-wrap: normal;
    border: 1px #000;
    text-decoration: none;
  }
`;

const H2 = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 2.4rem;
  color: #f8e67d;

  &.text-center {
    text-align: center;
  }
`;

const H4 = styled.h4`
  color: #51802b;
  text-transform: uppercase;
  font-weight: 700;
`;

const Text = styled.p`
  font-size: ${(props) => (props.fontsize ? props.fontsize : "1.6rem")};
  line-height: ${(props) => (props.lineheight ? props.lineheight : "1.6rem")};
`;

export { H1, H2, H4, Text };
