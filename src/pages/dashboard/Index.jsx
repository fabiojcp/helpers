import { useContext, useState } from "react";
import DashboardPF from "../../components/dashboardModel/dashboardPF";
import DashboardPJ from "../../components/dashboardModel/dashboardPJ";
import { UserContext } from "../../providers/user";
import { CampaignsContext } from "../../providers/campaigns";
import Modal from "../../components/modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DashboardEntity from "../../components/dashboardEntity";

export default function Dashboard() {
  const { user } = useContext(UserContext);
  const [type, setType] = useState(user.type);


  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { user, modal, editUser } = useContext(UserContext);
  const { campaigns } = useContext(CampaignsContext);

  const helpedCampaigns = campaigns.filter(
    (campaign) =>
      campaign.helpers.filter((helper) => helper.id === user.id).length > 0
  );

  const onSubmit = (data) => {
    const { phone } = data;
    const newData = { ...data, contacts: { phone: phone } };
    console.log(newData);
    editUser(newData);
  };

  console.log(user);

  if (user.type === "entity"){
    return (
      <DashboardEntity/>
    )
  }

  return (
    <>
      {type === "fisica" && <DashboardPF />}

      {type === "juridica" && <DashboardPJ />}

      {/* type === "entidade" && <RegisterEntity /> */}
    </>
  );
}
