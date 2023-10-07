import Container from "../../components/Container";
import { styled } from "styled-components";
import { H2, Text } from "../../components/Typo";
import Subscribe from "../../components/Subscribe";
import { devices } from "../../breakpoints";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (${devices.md}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }
`;

const Header = styled.header`
  margin: 8.8rem 0 3rem;
  padding: 2.4rem 0;
  background: rgba(253, 225, 2, 0.28);

  h2 {
    color: #316014;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 121.7%;
    margin-bottom: 0;

    p {
      color: #696565;
      font-size: 1.8rem;
      font-style: normal;
      font-weight: 500;
      line-height: 2.6rem;
    }
  }

  .welcome {
    color: #737373;
    text-align: center;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .privacy {
    color: #b09d00;
    text-align: center;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const PrivacyBody = styled.div``;

const PrivacyContent = styled.div``;

const PrivacyHead = styled.div`
  padding: 1.7rem 1rem;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
`;

const PrivacyText = styled.div`
  padding: 2.7rem 0;
  max-width: 104.8rem;

  p {
    color: #000;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.6rem; /* 0px */
  }
`;

const H3 = styled.h3`
  color: #000;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: auto; /* 0px */
`;

const Privacypage = () => {
  return (
    <>
      <Header>
        <Container>
          <StyledHeader>
            <H2>
              Triple Wire Privacy Policy{" "}
              <Text>Last Updated: [September 12 2023]</Text>
            </H2>

            <div style={{ display: "flex", alignItems: "centers" }}>
              <Text className="welcome">Welcome</Text>{" "}
              <Text> &nbsp;| &nbsp;</Text>{" "}
              <Text className="privacy">Privacy and Policy</Text>
            </div>
          </StyledHeader>
        </Container>
      </Header>

      <Container>
        <PrivacyBody>
          <PrivacyContent>
            <PrivacyHead>
              <H3>1. Introduction</H3>
            </PrivacyHead>

            <PrivacyText>
              <Text>
                CM Petas Global Ltd. {`("we," "our," or "us")`} values your
                privacy and is committed to protecting your personal
                information. This Privacy Policy outlines how we collect, use,
                disclose, and protect your data when you participate in the
                Raffle Draw Programme. By accessing our website and
                participating in the programme, you consent to the practices
                described in this policy.
              </Text>
            </PrivacyText>

            <PrivacyHead>
              <H3>2. Information We Collect</H3>
            </PrivacyHead>

            <PrivacyText>
              <Text>
                Personal Information: When you participate in the Raffle Draw
                Programme, we may collect personal information such as your
                name, contact details, and payment information. Transaction
                Information: We collect details of your ticket purchases,
                including the date and time of the transaction. Communication:
                We may retain records of any correspondence, including emails or
                messages you send us. Usage Data: We may collect information
                about how you interact with our website, including your IP
                address, browser type, pages viewed, and the duration of your
                visit.
              </Text>
            </PrivacyText>

            <PrivacyHead>
              <H3>3. Use of Information</H3>
            </PrivacyHead>

            <PrivacyText>
              <Text>
                We use the collected information for the following purposes: To
                facilitate your participation in the Raffle Draw Programme. To
                notify you if you are a winner and arrange the delivery of your
                prize. To improve our services and customize your experience. To
                communicate with you about the programme, including updates and
                announcements. To analyze and monitor website usage and trends.
              </Text>
            </PrivacyText>

            <PrivacyHead>
              <H3>4. Data Security</H3>
            </PrivacyHead>

            <PrivacyText>
              <Text>
                We take the security of your personal information seriously and
                employ reasonable measures to protect it from unauthorized
                access, disclosure, alteration, and destruction. However, please
                be aware that no method of transmission over the internet is
                entirely secure.
              </Text>
            </PrivacyText>

            <PrivacyHead>
              <H3>5. Disclosure of Information</H3>
            </PrivacyHead>

            <PrivacyText>
              <Text>
                We do not sell, trade, or rent your personal information to
                third parties. However, we may share your information with:
                Service providers who assist us in delivering the Raffle Draw
                Programme. Regulatory authorities as required by law. Partners
                or sponsors of the programme for promotional purposes.
              </Text>
            </PrivacyText>

            <PrivacyHead>
              <H3>6. Your Choices</H3>
            </PrivacyHead>

            <PrivacyText>
              <Text>
                You have the right to: Access your personal information held by
                us. Correct any inaccuracies in your personal information.
                Withdraw your consent for the use of your data.
              </Text>
            </PrivacyText>

            <PrivacyHead>
              <H3>7. Changes to this Privacy Policy</H3>
            </PrivacyHead>

            <PrivacyText>
              <Text>
                We may update this Privacy Policy from time to time. The most
                recent version will be posted on our website, and the date of
                the latest revision will be indicated.
              </Text>
            </PrivacyText>

            <PrivacyHead>
              <H3>8. Contact Us</H3>
            </PrivacyHead>

            <PrivacyText>
              <Text>
                For questions or concerns regarding this Privacy Policy, please
                contact us at [info@triplewire.ng or call: 08086279888].
              </Text>
            </PrivacyText>

            <PrivacyHead>
              <H3>9. Governing Law</H3>
            </PrivacyHead>

            <PrivacyText>
              <Text>
                This Privacy Policy is governed by the laws of Nigeria
              </Text>
            </PrivacyText>
          </PrivacyContent>
        </PrivacyBody>
      </Container>

      <Subscribe />
    </>
  );
};

export default Privacypage;
