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
`;

const StyledH2 = styled(H2)`
  color: #79de3a;
  text-align: center;
  font-size: 4.8rem;
  font-weight: 800;
  line-height: 5.6rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem;
  margin-bottom: 7.2rem;
`;

const GridItem = styled.div`
  align-self: start;
  display: grid;
  gap: 4.8rem;
  position: relative;

  .mtn_users {
    position: absolute;
    top: -1rem;
    left: -2rem;
    z-index: -1;
    animation: spin1 4000ms ease-in-out infinite;
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
  }

  .big-text--green {
    color: #2eb202;
    font-size: 2.8rem;
    font-weight: 600;
    line-height: normal;
    max-width: 36.9rem;

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

            <GridContainer>
              <GridItem>
                <Text className="big-text--green">
                  Play with{" "}
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
                  given categories!
                </Text>

                <Image src="/big_text_gang.svg" />

                <Text className="text--cream">
                  The more you play the higher your chances of winning.
                </Text>
              </GridItem>

              <GridItem className="center">
                <Image src="/mobile_phone.png" />

                <Image className="mtn_users" src="/mtn_users_only.svg" />
              </GridItem>

              <GridItem>
                <Text className="text--white">
                  At the end of the 3-month duration, the raffle draw will be
                  conducted fairly and transparently.
                </Text>

                <Text className="text--green">
                  Winners will be announced publicly, ensuring complete
                  transparency and trust.
                </Text>
              </GridItem>
            </GridContainer>

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
                <Lottie options={defaultOptions} height={300} width={500} />
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
