import Button from "../../../components/Button";
import Container from "../../../components/Container";
import Section from "../../../components/Section";
import SplitScreen from "../../../components/SplitScreen";
import { Text } from "../../../components/Typo";
import playnow from "../../../assets/playnow.svg";
import Image from "../../../components/Image";

import videoSrc from "../../../assets/tripple_wire.mp4";
import styled from "styled-components";
import Lottie from "react-lottie";
import { defaultOptions } from "../defaultOptions";
import Modal from "../../../components/Modal";
import useModal from "../../../hooks/useModal";
import PlayNowPopup from "../../../components/PlayNowPopup";
import { devices } from "../../../breakpoints";

const StyledText = styled(Text)`
  font-size: 3.2rem;
  line-height: 4rem;
  font-weight: 700;
  max-width: 45rem;
  margin-bottom: 6.4rem;

  @media only screen and (${devices.md}) {
    max-width: 100%;
    text-align: center;
  }

  @media only screen and (${devices.sm}) {
    font-size: 2.4rem;
    line-height: 3.2rem;
    text-align: left;
  }

  span {
    font: inherit;
  }

  .accent {
    color: #fecc0b;
  }
`;

const CMPetraContent = styled.div`
  @media only screen and (${devices.md}) {
    text-align: center;
    width: 70%;
    margin-inline: auto;
  }

  @media only screen and (${devices.sm}) {
    width: 100%;
    text-align: left;
  }

  button {
    @media only screen and (${devices.sm}) {
      transform: translateX(-10px) scale(0.9);
    }

    @media only screen and (${devices.xs}) {
      transform: translateX(-20px) scale(0.8);
    }
  }

  p {
    @media only screen and (${devices.sm}) {
      margin-bottom: 3.2rem;
    }

    @media only screen and (${devices.sm}) {
      margin-bottom: 2.4rem;
    }
  }
`;

const Player = styled.video`
  width: 100%;
  max-width: 100%;
  height: 35rem;

  @media only screen and (${devices.md}) {
    width: 70%;
    height: auto;
    margin-inline: auto;
    display: block;
  }

  @media only screen and (${devices.sm}) {
    width: 100%;
  }
`;
const Source = styled.source``;

const CMPetra = () => {
  const openModal = useModal();

  return (
    <>
      <Section className="section--cmpetra">
        <Container>
          <SplitScreen>
            <CMPetraContent className="cmpetra--content">
              <StyledText>
                <Text as="span" className="accent">
                  CM Petas global
                </Text>{" "}
                is a global real estate community on a mission to help Nigerians
                own a landed property.
              </StyledText>
              <Button onClick={openModal.openModal}>
                <Image src={playnow} />
              </Button>
              <Image className="blur-block" src="/blur_block.svg" />
              <Image className="blur-block" src="/blur_block.svg" />
              <div className="sparkles">
                <Lottie
                  options={defaultOptions}
                  style={{ height: "200px", maxWidth: "400px" }}
                />
              </div>
            </CMPetraContent>

            <div className="ceptra--video">
              <Player controls>
                <Source src={videoSrc} type="video/mp4" />
              </Player>
            </div>
          </SplitScreen>
        </Container>
      </Section>

      <Modal isOpen={openModal.isOpen} onClose={openModal.closeModal}>
        <PlayNowPopup />
      </Modal>
    </>
  );
};

export default CMPetra;
