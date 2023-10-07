import styled from "styled-components";
import Container from "../../../components/Container";
import Image from "../../../components/Image";
import { H2, Text } from "../../../components/Typo";
import { devices } from "../../../breakpoints";

const StyledHeader = styled.header`
  padding: 8.8rem 0;
`;

const Hero = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.4rem;
  align-items: center;
  justify-content: center;

  @media only screen and (${devices.md}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "image"
      "text";
  }

  .hero--content {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media only screen and (${devices.md}) {
      grid-area: text;
      gap: 1.6rem;
    }
  }

  .hero--img {
    @media only screen and (${devices.md}) {
      grid-area: image;
    }
  }

  h2 {
    color: #45cf15;
    font-size: 4.8rem;
    font-style: normal;
    font-weight: 800;
    line-height: 4.8rem; /* 100% */
    letter-spacing: -0.96px;

    @media only screen and (${devices.sm}) {
      font-size: 3.2rem;
      margin-bottom: 0.8rem;
    }
  }

  p {
    color: #c5cbc7;
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.2rem; /* 0px */
    letter-spacing: -0.48px;

    @media only screen and (${devices.md}) {
      font-size: 2rem;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Hero>
          <div className="hero--content">
            <H2>About CM Petas</H2>

            <Text>
              Cmpetas is a property platform for real estate with trusted agents
              and developers with quality listings which include both public and
              private property.
            </Text>

            <Text>
              The listings include homes, houses, lands, shops, office spaces
              and other commercial properties. Small and large-scale real estate
              companies in Nigeria. we connect agents, owners and developers
              with buyers and renters conveniently online.
            </Text>
          </div>

          <div className="hero--img">
            <Image src="/about_hero_img.png" />
          </div>
        </Hero>
      </Container>
    </StyledHeader>
  );
};

export default Header;
