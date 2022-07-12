import { useContext, useState } from "react";
import DashboardPF from "../../components/dashboardModel/dashboardPF";
import DashboardPJ from "../../components/dashboardModel/dashboardPJ";
import { UserContext } from "../../providers/user";
import DashboardEntity from "../../components/dashboardEntity";

export default function Dashboard() {
  const { user } = useContext(UserContext);

  if (user.type === "entity"){
    return (
      <DashboardEntity/>
    )
  }

  return (
    <>
      {user.type === "fisica" && <DashboardPF />}

      {user.type === "juridica" && <DashboardPJ />}

      {/* type === "entidade" && <RegisterEntity /> */}
    </>
  );
}
