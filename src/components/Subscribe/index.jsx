import styled from "styled-components";
import Container from "../Container";
import Section from "../Section";
import { H2, Text } from "../Typo";
import { devices } from "../../breakpoints";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 6.4rem;
  border-radius: 3rem;
  background: rgba(253, 225, 2, 0.28);
  padding: 5.6rem 6.4rem;

  @media only screen and (${devices.md}) {
    grid-template-columns: 1fr;
    padding: 5.6rem 3.2rem;
  }

  h2 {
    color: #076c3c;
    font-size: 4.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 5.6rem; /* 121.875% */
    letter-spacing: -0.96px;
    margin-bottom: 2.4rem;

    @media only screen and (${devices.sm}) {
      font-size: 3.5rem;
      line-height: 4.8rem;
    }
  }

  p {
    color: #062c14;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: 3.2rem; /* 177.778% */
    letter-spacing: -0.36px;
  }
`;

const Form = styled.form``;

const FieldSet = styled.fieldset`
  display: flex;
  align-items: center;
  border: 0;
  border-radius: 5rem;
  background: #fffcef;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 5rem;
  padding: 2rem 1rem 2rem 2rem;

  color: #505050;
  font-family: "Mona Sans", sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.453px;

  &::placeholder {
    color: #777777;
  }

  &:focus {
    outline: none;
    border: 1px solid #062c14;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 52%;
  right: 0.5rem;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
`;

const Subscribe = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <div>
            <H2>Subscribe to Our Newsletter</H2>
            <Text>Enter your email to recieve notification on new update </Text>
          </div>

          <Form>
            <FieldSet>
              <Input
                id="newsletter"
                name="newsletter"
                placeholder="Email address"
              />
              <Button type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="53"
                  height="54"
                  viewBox="0 0 53 54"
                  fill="none"
                >
                  <circle cx="26.5" cy="27.2002" r="26.5" fill="#0E431C" />
                  <path
                    d="M41.0607 28.7609C41.6464 28.1751 41.6464 27.2253 41.0607 26.6395L31.5147 17.0936C30.9289 16.5078 29.9792 16.5078 29.3934 17.0936C28.8076 17.6794 28.8076 18.6291 29.3934 19.2149L37.8787 27.7002L29.3934 36.1855C28.8076 36.7713 28.8076 37.721 29.3934 38.3068C29.9792 38.8926 30.9289 38.8926 31.5147 38.3068L41.0607 28.7609ZM12 29.2002H40V26.2002H12V29.2002Z"
                    fill="#F8E67D"
                  />
                </svg>
              </Button>
            </FieldSet>
          </Form>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Subscribe;
