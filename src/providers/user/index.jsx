import { createContext, useContext, useState } from "react";
import Api from "../../services/Api";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const userLocal = localStorage.getItem("user") || { accessToken: "" };
  const [user, setUser] = useState(userLocal);

  const usersLocal = localStorage.getItem("users") || [];
  const [users, setUsers] = useState(usersLocal);

  const tokenLocal = user.accessToken || "";
  const [token, setToken] = useState(tokenLocal);

  const [isLogged, setIsLogged] = useState(false);
  const [error, setError] = useState("");

  const headers = {
    "Content-type": "application/JSON",
    Authorization: `Bearer ${token}`,
  };

  const getUsers = () => {
    Api.get("/users").then((response) => {
      setUsers(response);
    });
  };

  const loginUser = (data) => {
    Api.post(`login`, data)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response));
        setUser(response);
        setToken(response.accessToken);
        setIsLogged(true);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const registerUser = (data) => {
    Api.post(`register`, data)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response));
        setUser(response);
        setToken(response.accessToken);
        setIsLogged(true);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const editUser = (data) => {
    Api.patch(`user/${user.id}`, data, { headers: headers })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response));
        setUser(response);
      })
      .catch((error) => {
        setError(error);
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

  return (
    <UserContext.Provider
      value={{
        user,
        token,
        users,
        isLogged,
        error,
        setError,
        getUsers,
        loginUser,
        registerUser,
        editUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const User = () => useContext(UserProvider);
