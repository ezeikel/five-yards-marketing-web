import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

Modal.setAppElement("body");

const ReactModalAdapter = ({ className, modalClassName, ...props }) => (
  <Modal className={modalClassName} portalClassName={className} {...props} />
);

const StyledModal = styled(ReactModalAdapter).attrs({
  //https://github.com/styled-components/styled-components/issues/1494
  overlayClassName: "overlay",
  modalClassName: "modal",
})`
  /* Portal styles here (though usually you will have none) */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
    padding: var(--spacing-large);
  }
  .modal {
    display: flex;
    background-color: var(--color-white);
    border-radius: var(--border-radius);
    outline: 0;
    width: 100%;
    padding: var(--spacing-large);
    max-width: 640px;
    min-height: 200px;
    max-height: 921px;

    @media (min-width: 768px) {
      padding: 60px;
      max-width: 1088px;
      max-height: 564px;
    }
  }
`;

const Body = styled.div`
  width: 100%;
  overflow-y: scroll;
`;

const GenericModal = ({
  heading,
  isOpen,
  onRequestClose,
  contentLabel,
  close,
  children,
}) => {
  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
    >
      <Body>{children}</Body>
    </StyledModal>
  );
};

export default GenericModal;
