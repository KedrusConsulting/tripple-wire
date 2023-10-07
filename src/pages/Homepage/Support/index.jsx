import styled from "styled-components";
import Container from "../../../components/Container";
import Section from "../../../components/Section";
import Image from "../../../components/Image";
import { H2, Text } from "../../../components/Typo";
import Lottie from "react-lottie";
import animationData from "../../../assets/scroll_more.json";
import { devices } from "../../../breakpoints";

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  margin-bottom: 4rem;

  @media only screen and (${devices.sm}) {
    flex-wrap: wrap;
  }
`;

const Box = styled.div`
  .bold {
    font-weight: 700;
    text-align: center;
    margin-bottom: 2.4rem;
  }
`;

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
};

const Support = () => {
  return (
    <Section>
      <Container>
        <H2 className="text-center">Supported By</H2>
        <FlexBox>
          <Image src="/mtn_logo.svg" />
          <Image src="/acm_white.png" />
          <Image src="/national_lottery.svg" />
          <Image src="/icel_logo_white.png" />
        </FlexBox>

        <Box>
          <Text className="bold">Scroll for More</Text>
          <Lottie options={defaultOptions} height={50} width={50} />;
        </Box>
      </Container>
    </Section>
  );
};

export default Support;
