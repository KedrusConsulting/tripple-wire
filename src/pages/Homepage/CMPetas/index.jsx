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

const StyledText = styled(Text)`
  font-size: 3.2rem;
  line-height: 4rem;
  font-weight: 700;
  max-width: 45rem;
  margin-bottom: 6.4rem;

  span {
    font: inherit;
  }

  .accent {
    color: #fecc0b;
  }
`;

const Player = styled.video`
  width: 100%;
  max-width: 100%;
  height: 35rem;
`;
const Source = styled.source``;

const CMPetra = () => {
  const openModal = useModal();

  return (
    <>
      <Section className="section--cmpetra">
        <Container>
          <SplitScreen>
            <div className="cmpetra--content">
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
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>
            </div>

            <div>
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
