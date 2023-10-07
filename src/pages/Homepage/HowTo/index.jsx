import styled from "styled-components";
import Container from "../../../components/Container";
import Section from "../../../components/Section";
import { H2, Text } from "../../../components/Typo";
import Image from "../../../components/Image";
import Button from "../../../components/Button";
import Lottie from "react-lottie";
import { defaultOptions } from "../defaultOptions";
import playnow from "../../../assets/playnow.svg";
import Modal from "../../../components/Modal";
import useModal from "../../../hooks/useModal";
import PlayNowPopup from "../../../components/PlayNowPopup";
import { devices } from "../../../breakpoints";

const Wrapper = styled.div`
  .how-to--caption {
    text-align: center;
    margin-bottom: 6.4rem;

    p {
      color: #fdfcfa;
      text-align: center;
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 3rem; /* 177.778% */
      letter-spacing: -0.36px;
      max-width: 61.9rem;
      margin-inline: auto;
    }
  }

  .anyone {
    @media only screen and (${devices.md}) {
      transform: translateY(5rem);
    }
  }

  .anyone button {
    @media only screen and (${devices.sm}) {
      transform: scale(0.8);
    }
  }
`;

const StyledH2 = styled(H2)`
  color: #79de3a;
  text-align: center;
  font-size: 4.8rem;
  font-weight: 800;
  line-height: 5.6rem;

  @media only screen and (${devices.sm}) {
    font-size: 3.2rem;
    margin-bottom: 0.8rem;
  }
`;

const GridWrapper = styled.div`
  position: relative;
  z-index: 1;

  transform: translateY(6rem);
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem;
  margin-bottom: 7.2rem;

  @media only screen and (${devices.md}) {
    grid-template-columns: 1fr;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.5);
    padding: 2.4rem;
    gap: 0.8rem;
  }
`;

const GridItem = styled.div`
  align-self: start;
  display: grid;
  gap: 4.8rem;

  @media only screen and (min-width: 961px) {
    position: relative;
  }

  @media only screen and (${devices.sm}) {
    gap: 2.4rem;
  }

  img {
    @media only screen and (${devices.md}) {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: -1;
    }
  }

  .mtn_users {
    position: absolute;
    top: -1rem;
    left: -2rem;
    z-index: -1;
    animation: spin1 4000ms ease-in-out infinite;

    @media only screen and (${devices.md}) {
      top: 0;
      left: 44%;
      transform: translateX(-50%);
    }

    @media only screen and (${devices.sm}) {
      left: 41%;
      transform: translateX(-50%);
    }

    @media only screen and (max-width: 480px) {
      left: 38%;
    }

    @media only screen and (max-width: 390px) {
      left: 35%;
    }

    @media only screen and (${devices.xs}) {
      left: 35%;
    }

    @media only screen and (max-width: 320px) {
      left: 32%;
    }
  }

  @keyframes spin1 {
    from {
      transform: scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
        skew(0deg, 0deg);
    }
    to {
      transform: scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(360deg)
        skew(0deg, 0deg);
    }
  }

  &.center {
    justify-self: center;

    @media only screen and (${devices.md}) {
      position: absolute;
      top: -11rem;
      width: 100%;
      height: 100%;
    }
  }

  .big-text--green {
    color: #2eb202;
    font-size: 2.8rem;
    font-weight: 600;
    line-height: normal;
    max-width: 36.9rem;

    @media only screen and (${devices.md}) {
      max-width: 100%;
    }

    .yellow {
      font: inherit;
      color: #fde102;
    }

    .grey {
      font: inherit;
      color: #9e9e9e;
    }
  }

  .text--cream {
    color: #f1e5d3;
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 3.2rem; /* 133.333% */
  }

  .text--white {
    color: #fff;
    font-size: 2.4rem;
    font-weight: 600;
    line-height: normal;
  }

  .text--green {
    color: #09f481;
    font-size: 2.4rem;
    font-weight: 600;
    line-height: normal;
  }

  .big-text--green,
  .text--green,
  .text--white,
  .text--cream {
    @media only screen and (${devices.sm}) {
      font-size: 2rem;
      line-height: 2.8rem;
    }
  }

  .gang {
    @media only screen and (${devices.md}) {
      position: absolute;
      top: -7.5rem;
      z-index: 0;
    }
  }
`;

const HowTo = () => {
  const openModal = useModal();

  return (
    <>
      <Section>
        <Container>
          <Wrapper>
            <div className="how-to--caption">
              <StyledH2>How To Play</StyledH2>
              <Text>
                Play with N300, N500 or N1000 and stand a chance to win a Landed
                property in any of the given categories!
              </Text>
            </div>

            <GridWrapper>
              <GridContainer>
                <GridItem>
                  <Text className="big-text--green">
                    {/* Play with{" "}
                    <Text as="span" className="yellow">
                      N300
                    </Text>
                    ,
                    <Text as="span" className="grey">
                      N500
                    </Text>{" "}
                    or{" "}
                    <Text as="span" className="grey">
                      N1000
                    </Text>{" "}
                    and stand a chance to WIN a Landed property in any of the
                    given categories! */}
                    Go to your text message and Text TIPA to 5776 to play for
                    300 Naira Only
                  </Text>

                  <Image src="/big_text_gang.svg" className="gang" />

                  <Text className="text--cream">
                    Once you send the message, you will get a pop up on your
                    screen asking you to accept. Press 1 to accept.
                  </Text>
                </GridItem>

                <GridItem className="center">
                  <Image src="/mobile_phone.png" />

                  <Image className="mtn_users" src="/mtn_users_only.svg" />
                </GridItem>

                <GridItem>
                  <Text className="text--white">
                    After you press 1. You will receive a text message to
                    confirm your request has been sent.
                  </Text>

                  <Text className="text--green">
                    You can play as many times as possible to increase your
                    chances of winning. Winners will be announced publicly
                  </Text>
                </GridItem>
              </GridContainer>
            </GridWrapper>

            <div
              className="anyone"
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Button onClick={openModal.openModal}>
                <Image src={playnow} />
              </Button>
              <Image className="blur-block-2" src="/blur_block.svg" />
              <Image className="blur-block-2" src="/blur_block.svg" />

              <div className="sparkles">
                <Lottie
                  options={defaultOptions}
                  style={{ maxWidth: "500px", height: "300px" }}
                />
              </div>
            </div>
          </Wrapper>
        </Container>
      </Section>

      <Modal isOpen={openModal.isOpen} onClose={openModal.closeModal}>
        <PlayNowPopup />
      </Modal>
    </>
  );
};

export default HowTo;
