import styled from "styled-components";
import Container from "../../../components/Container";
import Section from "../../../components/Section";
import { H2, Text } from "../../../components/Typo";
import Image from "../../../components/Image";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    color: #45cf15;
    text-align: center;
    font-size: 4.8rem;
    font-style: normal;
    font-weight: 800;
    line-height: 4.8rem; /* 100% */
    letter-spacing: -0.96px;
    margin-bottom: 6.4rem;
  }

  p {
    color: #062a13;
    text-align: center;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.2rem; /* 0px */
    letter-spacing: -0.48px;
    max-width: 100rem;
    margin-inline: auto;
    margin-bottom: 2.4rem;
  }
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 6.4rem;
  margin-top: 6.4rem;

  img {
    mix-blend-mode: difference;
  }
`;

const PartnerShips = () => {
  return (
    <Section className="section--partnerships">
      <Container>
        <Wrapper>
          <H2>Synergy and Partnership</H2>

          <Text>
            CM Petas Global Ltd. has teamed up with notable multinational
            organizations like MTN Nigeria, African Content Media, I-Cell, and
            the National Lottery Regulatory Commission to ensure the success and
            credibility of this initiative. These partnerships show that we are
            committed to changing lives and making it possible for every
            Nigerian to own a home.
          </Text>

          <Text>
            The entire process is closely supervised by the National Lottery
            Regulatory Commission, ensuring the utmost transparency and
            fairness.
          </Text>

          <FlexBox>
            <Image src="/mtn_logo_black.svg" />
            <Image src="/acm_black.png" />
            <Image src="/national_lottery_black.png" />
            <Image src="/icel_logo_black.png" />
          </FlexBox>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default PartnerShips;
