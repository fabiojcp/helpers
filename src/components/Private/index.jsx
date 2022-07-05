import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Private({ children }) {
  const navigate = useNavigate();
  function isUserInLocalStorage() {
    return window.localStorage.getItem("user") !== null;
  }
  return isUserInLocalStorage() ? (
    children
  ) : (
    <h1>Você não tem acesso a essa página</h1>
  );
}
