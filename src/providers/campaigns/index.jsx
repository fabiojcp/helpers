import { createContext, useContext, useState } from "react";
import Api from "../../services/Api";
const CampaignsContext = createContext();

export const CampaignsProvider = ({ children }) => {
  const campaignsLocal = localStorage.getItem("campaigns") || [];
  const [campaigns, setCampaigns] = useState(campaignsLocal);

  const user = localStorage.getItem("user") || {accessToken:""};

  const token = user.accessToken || "";

  const headers = {
    "Content-type": "application/JSON",
    Authorization: `Bearer ${token}`,
  };

  const getCampaigns = () => {
    Api.get("/campaigns").then((response) => {
      localStorage.setItem("campaigns", JSON.stringify(response));
      setCampaigns(response);
    });
  };

  const addCampaign = (data) => {
    Api.post(
      `campaigns`,
      { ...data, ownerID: user.id },
      { headers: headers }
    ).then(() => {
      getCampaigns();
    });
  };

  const editCampaign = (data) => {
    Api.patch(`campaigns/${data.id}`, data, { headers: headers }).then(() => {
      getCampaigns();
    });
  };

  const deleteCampaign = (data) => {
    Api.delete(`campaigns/${data.id}`, { headers: headers }).then(() => {
      getCampaigns();
    });
  };

  return (
    <CampaignsContext.Provider
      value={{
        campaigns,
        addCampaign,
        editCampaign,
        deleteCampaign,
        getCampaigns,
      }}
    >
      {children}
    </CampaignsContext.Provider>
  );
};

export const Campaigns = () => useContext(CampaignsContext);
