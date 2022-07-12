import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/user";
import { ModalUser } from "./styles";

export function UserMenu({
  isMenuOpen,
  setIsMenuOpen,
  gapValue,
  setModalType,
}) {
  const navigate = useNavigate();
  const { modal } = useContext(UserContext);
  const logout = () => {
    navigate("/");
  };

  return (
    isMenuOpen && (
      <ModalUser gap={gapValue}>
        <button
          onClick={() => {
            setIsMenuOpen(false);
            if (setModalType) setModalType("edit");
            modal.open();
          }}
        >
          Editar perfil
        </button>
        <button onClick={logout}>Sair da conta</button>
      </ModalUser>
    )
  );
}
