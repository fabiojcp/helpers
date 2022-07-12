import { useContext, useState } from "react";
import DashboardPF from "../../components/dashboardModel/dashboardPF";
import DashboardPJ from "../../components/dashboardModel/dashboardPJ";
import { UserContext } from "../../providers/user";

export default function Dashboard() {
  const { user } = useContext(UserContext);
  const [type, setType] = useState(user.type);

  return (
    <>
      {type === "fisica" && <DashboardPF />}

      {type === "juridica" && <DashboardPJ />}

      {/* type === "entidade" && <RegisterEntity /> */}
    </>
  );
}
