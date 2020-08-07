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
    padding: 20px;
  }
  .modal {
    display: flex;
    background-color: var(--color-white);
    border-radius: 4px;
    outline: 0;

    width: 100%;
    padding: 20px;
    max-width: 640px;
    min-height: 200px;
    max-height: 921px;
  }
`;

const Body = styled.div`
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
