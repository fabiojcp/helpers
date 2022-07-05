import { createContext, useContext, useState } from "react";

const ModalProfileContext = createContext();

export const ModalProfileProvider = ({ children }) => {
  const [isModalProfileOpen, setIsModalProfileOpen] = useState(false);

  const openModalProfile = () => {
    setIsModalProfileOpen(true);
  };

  const closeModalProfile = () => {
    setIsModalProfileOpen(false);
  };

  return (
    <ModalProfileContext.Provider
      value={{ isModalProfileOpen, openModalProfile, closeModalProfile }}
    >
      {children}
    </ModalProfileContext.Provider>
  );
};

export const ModalProfile = () => useContext(ModalProfileContext);
