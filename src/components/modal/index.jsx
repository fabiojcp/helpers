import { useContext } from "react";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";

import CloseModalButton from "./closeModalButton";
import { modalRoot } from "../..";
import { UserContext } from "../../providers/user";
import { ModalArea, ModalHeader, ModalContainer, ModalBody } from "./styles";

const Modal = ({ header = null, children, closeable }) => {
  const { modal } = useContext(UserContext);

  return (
    modal.isOpen &&
    createPortal(
      <ModalContainer>
        <ModalArea>
          <ModalHeader>
            <div className="modal__headerContent">{header}</div>
            {closeable && (
              <button className="modal__closeBtn" onClick={() => modal.close()}>
                <FiX />
              </button>
            )}
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
        </ModalArea>
      </ModalContainer>,
      modalRoot
    )
  );
};

export default Modal;
export { CloseModalButton };
