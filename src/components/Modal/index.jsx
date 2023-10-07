import PropTypes from "prop-types";
import Image from "../Image";
import styled from "styled-components";
import Lottie from "react-lottie";

import animationData from "../../assets/moving_lines.json";
import { devices } from "../../breakpoints";

export const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
};

const StyledModal = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
`;

const ModalOverlay = styled.div`
  background-color: rgba(4, 30, 14, 0.77);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  min-height: 100vh;
  padding: 12rem;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 90vw;
  height: 90vh;
  object-fit: fill;
  background-color: rgba(4, 30, 14);
  /* background-image: url("/moving_lines.json"); */
  background-position: 50%;
  background-size: contain;
  padding: 1.6rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 200;
  overflow: hidden;

  animation-name: slideInModal;
  animation-duration: 600ms;
  animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

  .model-content-inner {
    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .lottie {
    @media only screen and (${devices.md}) {
      transform: scale(3);
    }
  }

  @keyframes slideInModal {
    from {
      top: 30%;
      opacity: 0.3;
      transform: rotateX(-20deg) translate(-50%, -50%);
    }

    to {
      top: 50%;
      opacity: 1;
      transform: rotateX(0) translate(-50%, -50%);
    }
  }
`;

const ModalButton = styled.button`
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <StyledModal>
      <ModalOverlay onClick={onClose} />
      <ModalContent>
        <ModalButton className="btn modal__close" onClick={onClose}>
          <Image src="/close-modal.svg" />
        </ModalButton>

        <Lottie
          className="lottie"
          options={defaultOptions}
          style={{
            height: "90vh",
            width: "90vw",
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            transform: "scale(1.5)",
            opacity: "0.6",
            zIndex: "-1",
          }}
        />
        <div className="model-content-inner">{children}</div>
      </ModalContent>
    </StyledModal>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Modal;
