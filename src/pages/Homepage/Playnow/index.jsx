import Section from "../../../components/Section";
import Container from "../../../components/Container";
import styled from "styled-components";
import { H2 } from "../../../components/Typo";
import PlayNowCard from "../../../components/PlayNowCard";
import { devices } from "../../../breakpoints";

const Wrapper = styled.div`
  h2 {
    margin-bottom: 6.4rem;
    color: #45cf15;
    text-align: center;
    font-size: 4.8rem;
    font-weight: 700;
    line-height: 4.8rem; /* 100% */
    letter-spacing: -0.96px;

    @media only screen and (${devices.sm}) {
      font-size: 3rem;
      margin-bottom: 1.6rem;
    }
  }
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 15rem;

  @media only screen and (${devices.md}) {
    flex-direction: column;
    align-items: center;
    gap: 10rem;
  }

  @media only screen and (${devices.md}) {
    gap: 6rem;
  }
`;

const FlexItem = styled.div`
  display: flex;
`;

const Playnow = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <H2>Play Now</H2>

          <FlexBox>
            <FlexItem>
              <PlayNowCard label={"TIPA"} worth={"450,000"} cost={"300"} />
            </FlexItem>
            <FlexItem>
              <PlayNowCard label={"TIPB"} worth={"500,000"} cost={"500"} />
            </FlexItem>
            <FlexItem>
              <PlayNowCard label={"TIPC"} worth={"1,500,000"} cost={"1000"} />
            </FlexItem>
          </FlexBox>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Playnow;
