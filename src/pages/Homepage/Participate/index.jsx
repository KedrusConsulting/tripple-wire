import styled from "styled-components";
import Container from "../../../components/Container";
import Section from "../../../components/Section";
import { H2, Text } from "../../../components/Typo";
import Image from "../../../components/Image";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  p {
    color: #fff;
    text-align: center;
    font-size: 2.8rem;
    font-weight: 500;
    line-height: 135.5%; /* 37.94px */
    letter-spacing: -0.56px;

    &:not(:last-child) {
      margin-bottom: 6.4rem;
    }
  }

  .yellow {
    display: inline-block;
    color: #fde102;
  }

  .participate--img {
    max-width: 99.3rem;
    margin-inline: auto;
    height: 18.7rem;
    object-fit: cover;
    margin-bottom: 6.4rem;
  }
`;

const Caption = styled.div`
  text-align: center;

  h2 {
    margin-bottom: 1.6rem;
    color: #45cf15;
    text-align: center;
    font-size: 4.8rem;
    font-weight: 700;
    line-height: 4.8rem; /* 100% */
    letter-spacing: -0.96px;
  }
`;

const LearnMore = styled.button`
  max-width: 98.9rem;
  width: 100%;
  margin-inline: auto;

  border-radius: 0.5rem;
  border: 0.3rem solid #00f076;
  background: rgba(45, 167, 113, 0.15);

  padding: 2rem 3.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a:link,
  a:visited {
    text-decoration: none;
    color: #fde102;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: normal;
    display: flex;
    align-items: center;
    gap: 1.6rem;

    span {
      font-size: 2.4rem;
    }
  }
`;

const Participate = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Caption>
            <H2>Why should you participate?</H2>
          </Caption>

          <Text>
            In a nation where access to affordable housing remains a challenge
            for many,
            <Text className="yellow">CM Petas Global Ltd.</Text> has taken a
            bold step towards addressing this issue head-on.
          </Text>

          <Image className="participate--img" src="/houses.png" />

          <Text>
            With a vision to create widespread positive impact, the{" "}
            <Text className="yellow">Triple Wire Raffle Draw Programme</Text>{" "}
            has been meticulously designed to offer an equal chance to both
            those who can afford to buy land and those who cannot.
          </Text>

          <Text>
            CM Petas Global Ltd. has teamed up with notable multinational
            organizations like{" "}
            <Text className="yellow">
              MTN Nigeria, African Content Media, I-Cell, and the National
              Lottery Regulatory Commission
            </Text>{" "}
            to ensure the success and credibility of this initiative. These
            partnerships show that we are committed to changing lives and making
            it possible for every Nigerian to own a home.
          </Text>

          <Text>
            The entire process is closely supervised by the National Lottery
            Regulatory Commission, ensuring the utmost transparency and
            fairness.
          </Text>

          <LearnMore>
            <Link to={"/about"}>
              <Text as={"span"}>Learn More</Text>
            </Link>

            <Link to={"/about"}>
              <Text as={"span"}>About CM Petas</Text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="74"
                height="23"
                viewBox="0 0 74 23"
                fill="none"
              >
                <path
                  d="M72.8243 12.5499C73.4101 11.9641 73.4101 11.0144 72.8243 10.4286L63.2784 0.882656C62.6926 0.296869 61.7429 0.296869 61.1571 0.882656C60.5713 1.46844 60.5713 2.41819 61.1571 3.00398L69.6423 11.4893L61.1571 19.9745C60.5713 20.5603 60.5713 21.5101 61.1571 22.0959C61.7429 22.6816 62.6926 22.6816 63.2784 22.0959L72.8243 12.5499ZM0.172852 12.9893H71.7637V9.98926H0.172852V12.9893Z"
                  fill="#F8E67D"
                />
              </svg>
            </Link>
          </LearnMore>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Participate;
