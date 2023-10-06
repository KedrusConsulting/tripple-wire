import styled from "styled-components";
import Container from "../../../components/Container";
import Image from "../../../components/Image";
import { H2, Text } from "../../../components/Typo";

const StyledHeader = styled.header`
  padding: 8.8rem 0;
`;

const Hero = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.4rem;
  align-items: center;
  justify-content: center;

  .hero--content {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  h2 {
    color: #45cf15;
    font-size: 4.8rem;
    font-style: normal;
    font-weight: 800;
    line-height: 4.8rem; /* 100% */
    letter-spacing: -0.96px;
  }

  p {
    color: #c5cbc7;
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.2rem; /* 0px */
    letter-spacing: -0.48px;
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

          <div>
            <Image src="/about_hero_img.png" />
          </div>
        </Hero>
      </Container>
    </StyledHeader>
  );
};

export default Header;
