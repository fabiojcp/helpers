import { createContext, useEffect, useState } from "react";
import Api from "../../services/Api";
import { toast } from "react-toastify";
import "../../assets/CSS/scrollbar.css";

export const UserContext = createContext();

export const toastStyle = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  toastId: 1,
};

export const UserProvider = ({ children }) => {
  const userLocal = JSON.parse(localStorage.getItem("user")) || {
    accessToken: "",
  };
  const [user, setUser] = useState(userLocal);

  const usersLocal = localStorage.getItem("users") || [];
  const [users, setUsers] = useState(usersLocal);

  const tokenLocal = JSON.parse(localStorage.getItem("Token")) || [];
  const [token, setToken] = useState(tokenLocal);

  const [isLogged, setIsLogged] = useState(false);
  const [error, setError] = useState("");

  // Modal
  const [modalOpen, setModalOpen] = useState(false);
  const [canCloseModal, setCanCloseModal] = useState(true);
  // Modal Campaign
  const [modalOpenCampaign, setModalOpenCampaign] = useState(false);
  const [canCloseModalCampaign, setCanCloseModalCampaign] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("Token")) setIsLogged(true);
  }, []);

  const headers = {
    "Content-type": "application/JSON",
    Authorization: `Bearer ${token}`,
  };

  const getUsers = () => {
    Api.get("/users").then((response) => {
      setUsers(response);
    });
  };

  const getUserById = (id) => {
    return Api.get(`/users/${id}`).then(({ data }) => {
      return data;
    });
  };

  const loginUser = (data) => {
    Api.post(`login`, data)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem(
          "Token",
          JSON.stringify(response.data.accessToken)
        );
        setUser(response.data.user);
        setToken(response.data.accessToken);
        setIsLogged(true);
      })
      .catch((error) => {
        setError(error);
        error.response.data === "Cannot find user" &&
          toast.error("Usuário não encontrado", toastStyle);
        error.response.data === "Incorrect password"
          ? toast.error("Senha inválida", toastStyle)
          : toast.error("Erro ao fazer login", toastStyle);
      });
  };

  const registerUser = (data) => {
    Api.post(`register`, data)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setUser(response.data.user);
        setToken(response.data.accessToken);
        setIsLogged(true);
      })
      .catch((error) => {
        setError(error);
        toast.error("Este email já está cadastrado!", toastStyle);
      });
  };

  const editUser = (data) => {
    Api.patch(`users/${user.id}`, data, { headers: headers })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        setUser(response.data);
        toast.success("Cadastro alterado com sucesso!", toastStyle);
      })
      .catch((error) => {
        setError(error);
        toast.error("Não foi possível alterar o cadastro!", toastStyle);
      });
  };

  const deleteUser = (getToken = token) => {
    Api.delete(`user/${user.id}`, getToken, { headers: headers })
      .then((response) => {
        localStorage.removeItem("user");
        setUser({});
        setToken("");
        setIsLogged(false);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const modal = {
    isOpen: modalOpen,
    isCloseable: canCloseModal,
    open: () => {
      setModalOpen(true);
    },
    close: () => {
      setModalOpen(false);
    },
    closeable: (value) => {
      setCanCloseModal(value);
    },
  };

  const modalNewCampaign = {
    isOpen: modalOpenCampaign,
    isCloseable: canCloseModalCampaign,
    open: () => {
      setModalOpenCampaign(true);
    },
    close: () => {
      setModalOpenCampaign(false);
    },
    closeable: (value) => {
      setCanCloseModalCampaign(value);
    },
  };

  return (
    <UserContext.Provider
      value={{
        user,
        token,
        users,
        isLogged,
        error,
        setError,
        setIsLogged,
        getUsers,
        getUserById,
        loginUser,
        registerUser,
        editUser,
        deleteUser,
        modal,
        modalNewCampaign,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
