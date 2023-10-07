import styled from "styled-components";
import Container from "../../components/Container";
import Section from "../../components/Section";
import PlayNowCard from "../../components/PlayNowCard";
import { Text } from "../../components/Typo";
import { devices } from "../../breakpoints";

const GridContainer = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 10rem;

  @media only screen and (${devices.md}) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const GridItem = styled.div``;

const StyledText = styled(Text)`
  color: #fff;
  font-family: "Mona Sans", sans-serif;
  text-align: center;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-top: 2rem;
`;

const Location = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 63.5rem;
  margin-inline: auto;
  margin-top: 6.4rem;
`;

const Title = styled.h3`
  color: #fff;
  text-align: center;
  font-family: "Mona Sans", sans-serif;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 0.8rem;
`;

const Description = styled(Text)`
  color: #aeaeae;
  text-align: center;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Playpage = () => {
  return (
    <Section>
      <Container>
        <StyledText>For MTN users only.</StyledText>

        <GridContainer>
          <GridItem>
            <PlayNowCard label={"TIPA"} worth={"450,000"} cost={"300"} />
          </GridItem>

          <GridItem>
            <PlayNowCard label={"TIPB"} worth={"500,000"} cost={"500"} />
          </GridItem>

          <GridItem>
            <PlayNowCard label={"TIPC"} worth={"1,500,000"} cost={"1000"} />
          </GridItem>
        </GridContainer>

        <Location>
          <Title>Property locations:</Title>
          <Description>
            Lagos state | Abuja | Rivers | Cross River | Akwa ibom | Kaduna |
            Sokoto | Imo | Osun | Ondo | Abia | Ibandan | Plateau | Delta |
            Eketi | Enugu
          </Description>
        </Location>
      </Container>
    </Section>
  );
};

export default Playpage;
