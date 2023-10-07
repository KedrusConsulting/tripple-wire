import { styled } from "styled-components";
import { devices } from "../../breakpoints";

const Section = styled.section`
  padding: 9.6rem 0;

  @media only screen and (${devices.md}) {
    padding: 7.2rem 0;
  }

  &.section {
    &--cmpetra {
      @media only screen and (${devices.lg}) {
        padding-top: 0;
      }
    }

    &--partnerships {
      background-color: #ffffff;
    }

    &--download {
      background-color: #ffffff;
    }
  }
`;

export default Section;
