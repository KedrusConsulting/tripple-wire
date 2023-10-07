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
  }

  .welcome {
    color: #737373;
    text-align: center;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .terms {
    color: #b09d00;
    text-align: center;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const TermsBody = styled.div``;

const TermsContent = styled.div``;

const TermsHead = styled.div`
  padding: 1.7rem 1rem;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
`;
const TermsText = styled.div`
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

const Termspage = () => {
  return (
    <>
      <Header>
        <Container>
          <StyledHeader>
            <H2>Triple Wire Terms and Conditions</H2>

            <div style={{ display: "flex", alignItems: "centers" }}>
              <Text className="welcome">Welcome</Text>{" "}
              <Text> &nbsp;| &nbsp;</Text>{" "}
              <Text className="terms">Terms and Conditions</Text>
            </div>
          </StyledHeader>
        </Container>
      </Header>

      <Container>
        <TermsBody>
          <TermsContent>
            <TermsHead>
              <H3>1. Acceptance of Terms</H3>
            </TermsHead>

            <TermsText>
              <Text>
                By participating in the TripleWire Raffle Draw Programme, you
                agree to comply with these terms and conditions. Please read
                them carefully before entering the draw.
              </Text>
            </TermsText>

            <TermsHead>
              <H3>2. Eligibility</H3>
            </TermsHead>

            <TermsText>
              <Text>
                Participants must be at least 18 years old and legal residents
                of Nigeria to enter the Raffle Draw Programme. Employees of CM
                Petas Global Ltd, all official partners of the Triple Wire
                Programme and their immediate family members are not eligible to
                participate.
              </Text>
            </TermsText>

            <TermsHead>
              <H3>3. Ticket Purchase</H3>
            </TermsHead>

            <TermsText>
              <Text>
                To enter the Raffle Draw Programme, participants must purchase a
                valid ticket. Tickets are available in three categories: 300
                Naira, 500 Naira, and 1000 Naira. Tickets are non-transferable
                and non-refundable.
              </Text>
            </TermsText>

            <TermsHead>
              <H3>4. Draw Process</H3>
            </TermsHead>

            <TermsText>
              <Text>
                The Raffle Draw will be conducted under the supervision of the
                National Lottery Regulatory Commission to ensure transparency
                and fairness. The draw date and time will be announced on our
                website and through official communication channels.
              </Text>
            </TermsText>

            <TermsHead>
              <H3>5. Winner Selection</H3>
            </TermsHead>

            <TermsText>
              <Text>
                Winners will be selected randomly from eligible entries. The
                decision of the draw officials is final, and no correspondence
                will be entered into regarding the outcome.
              </Text>
            </TermsText>

            <TermsHead>
              <H3>6. Prize Claim</H3>
            </TermsHead>

            <TermsText>
              <Text>
                Winners will be notified via the contact information provided at
                the time of ticket purchase. To claim their prize, winners must
                follow the instructions provided by CM Petas Global Ltd. within
                a specified timeframe
              </Text>
            </TermsText>

            <TermsHead>
              <H3>7. Taxes and Fees</H3>
            </TermsHead>

            <TermsText>
              <Text>
                Winners are responsible for any applicable taxes or fees
                associated with their prize. CM Petas Global Ltd. will not cover
                these costs.
              </Text>
            </TermsText>

            <TermsHead>
              <H3>8. Community Impact</H3>
            </TermsHead>

            <TermsText>
              <Text>
                A portion of the proceeds from ticket sales will be allocated to
                community development initiatives. Details of these initiatives
                will be made available on our website.
              </Text>
            </TermsText>

            <TermsHead>
              <H3>9. Privacy and Data</H3>
            </TermsHead>

            <TermsText>
              <Text>
                CM Petas Global Ltd. is committed to protecting the privacy of
                participants personal information. Please refer to our Privacy
                Policy for details on how we collect, use, and protect your
                data.
              </Text>
            </TermsText>

            <TermsHead>
              <H3>10. Changes to Terms</H3>
            </TermsHead>

            <TermsText>
              <Text>
                CM Petas Global Ltd. reserves the right to modify these terms
                and conditions at any time. Participants are encouraged to
                review them regularly for updates.
              </Text>
            </TermsText>

            <TermsHead>
              <H3>11. Contact Information</H3>
            </TermsHead>

            <TermsText>
              <Text>
                For any questions or concerns regarding these terms and
                conditions, please contact us at [Contact Information]
              </Text>
            </TermsText>

            <TermsHead>
              <H3>12. Governing Law</H3>
            </TermsHead>

            <TermsText>
              <Text>
                These terms and conditions are governed by the laws of Nigeria,
                and any disputes will be subject to the exclusive jurisdiction
                of Nigerian courts.
              </Text>
            </TermsText>
          </TermsContent>
        </TermsBody>
      </Container>

      <Subscribe />
    </>
  );
};

export default Termspage;
