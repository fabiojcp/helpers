import { useContext } from "react";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";
import CloseModalButton from "./closeModalButton";
import { modalRoot } from "../..";
import { UserContext } from "../../providers/user";
import { ModalArea, ModalHeader, ModalContainer, ModalBody } from "./styles";

const ModalCampaign = ({ header = null, children, closeable }) => {
  const { modalNewCampaign } = useContext(UserContext);

  return (
    modalNewCampaign.isOpen &&
    createPortal(
      <ModalContainer>
        <ModalArea>
          <ModalHeader>
            <div className="modal__headerContent">{header}</div>
            {closeable && (
              <button className="modal__closeBtn" onClick={() => modalNewCampaign.close()}>
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

export default ModalCampaign;
export { CloseModalButton };
