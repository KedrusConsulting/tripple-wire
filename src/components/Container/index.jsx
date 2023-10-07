import { styled } from "styled-components";
import { devices } from "../../breakpoints";

const Container = styled.div`
  max-width: 114rem;
  margin-inline: auto;

  @media only screen and (${devices.md}) {
    padding: 0 3.2rem;
  }

  @media only screen and (${devices.sm}) {
    padding: 0 2.4rem;
  }
`;

export default Container;
