import styled from "styled-components";
import Container from "../../../components/Container";
import Section from "../../../components/Section";
import { H2 } from "../../../components/Typo";
import Image from "../../../components/Image";

const Wrapper = styled.div`
  h2 {
    color: #45cf15;
    text-align: center;
    font-size: 4.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 4.8rem;
    letter-spacing: -0.96px;
    margin-bottom: 4.8rem;
  }
`;

const FlexBox = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.4rem;

  img {
    height: 5.6rem;
    object-fit: contain;
  }
`;

const FeaturedIn = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <H2>Featured In</H2>

          <FlexBox>
            <Image src="/Businessday.png" />
            <Image src="/The_Sun.png" />
            <Image src="/Vanguard-logo.png" />
            {/* <Image src="/the-guardian-newspaper-brand.png" /> */}
            <Image src="/this-day.png" />
          </FlexBox>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default FeaturedIn;
