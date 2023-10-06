import styled from "styled-components";
import Container from "../../../components/Container";
import Section from "../../../components/Section";
import { Text } from "../../../components/Typo";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 3rem;
  background: #feeb62;
  padding: 8.8rem;

  .download-title.app-store {
    color: #2f825a;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 800;
    line-height: 129.7%; /* 31.128px */
    letter-spacing: -0.48px;
    text-transform: capitalize;
    margin-bottom: 1rem;
  }

  .download-title.real-estate {
    color: #4b5850;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 3.2rem; /* 133.333% */
    letter-spacing: -0.48px;
  }
`;

const Button = styled.button`
  background-color: #fff;
  border: none;
  padding: 2.4rem 4.8rem;
  border-radius: 1.6rem;
  font-size: 1.6rem;
  font-family: inherit;
  font-weight: 600;
  color: #4b5850;
  cursor: pointer;
`;

const Download = () => {
  return (
    <Section className="section--download">
      <Container>
        <Wrapper>
          <div>
            <Text className="download-title app-store">
              Download CM petas app for Free
            </Text>
            <Text className="download-title real-estate">
              Secure your future in real estate
            </Text>
          </div>
          <div className="coming-soon">
            <Button>Coming Soon</Button>
          </div>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Download;
