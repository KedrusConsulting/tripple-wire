import { styled } from "styled-components";

const Image = styled.img`
  display: block;
  max-width: 100%;
  /* object-fit: cover; */

  &.playbtn {
    cursor: pointer;
  }
`;

export default Image;
