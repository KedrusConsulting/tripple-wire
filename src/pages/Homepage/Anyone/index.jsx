import styled from "styled-components";
import Container from "../../../components/Container";
import Section from "../../../components/Section";
import { H2, Text } from "../../../components/Typo";
import Button from "../../../components/Button";
import Image from "../../../components/Image";
import playnow from "../../../assets/playnow.svg";
import Lottie from "react-lottie";
import { defaultOptions } from "../defaultOptions";
import Modal from "../../../components/Modal";
import useModal from "../../../hooks/useModal";
import PlayNowPopup from "../../../components/PlayNowPopup";

const StyledH2 = styled(H2)`
  color: #79de3a;
  text-align: center;
  font-size: 4.8rem;
  font-weight: 800;
  line-height: 5.6rem;
`;

const StyledText = styled(Text)`
  max-width: 100rem;
  margin-inline: auto;
  color: #fff;
  text-align: center;
  font-size: 3.2rem;
  font-weight: 500;
  line-height: 4rem;
  margin-bottom: 4.8rem;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.4rem;
`;

const Anyone = () => {
  const openModal = useModal();

  return (
    <>
      <Section>
        <Container>
          <StyledH2>Anyone Can Win!</StyledH2>

          <FlexBox>
            <Image src="/I_won.gif" />
          </FlexBox>

          <StyledText>
            {` Everyone can participate no matter how small you may have. It doesn't
          matter if you are a Student, Tenant or Business Owner. Get ready to
          become the latest LANDLORD/LANDLADY`}
          </StyledText>

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
        </Container>
      </Section>

      <Modal isOpen={openModal.isOpen} onClose={openModal.closeModal}>
        <PlayNowPopup />
      </Modal>
    </>
  );
};

export default Anyone;
