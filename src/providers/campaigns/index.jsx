import { useEffect } from "react";
import { createContext, useState } from "react";
import Api from "../../services/Api";
export const CampaignsContext = createContext();

export const CampaignsProvider = ({ children }) => {
  const campaignsLocal = JSON.parse(localStorage.getItem("campaigns")) || [];
  const [campaigns, setCampaigns] = useState(campaignsLocal);
  const [selectedCampaign, setSelectedCampaign] = useState({});

  const user = JSON.parse(localStorage.getItem("user")) || { accessToken: "" };

  const token = JSON.parse(localStorage.getItem("Token")) || [];

  const headers = {
    "Content-type": "application/JSON",
    Authorization: `Bearer ${token}`,
  };

  const getCampaigns = () => {
    Api.get("/campaigns").then((response) => {
      localStorage.setItem("campaigns", JSON.stringify(response.data));
      setCampaigns(response.data);
    });
    return campaigns;
  };

  const getCampaign = (id) => {
    return Api.get(`/campaigns/${id}`).then(({ data }) => {
      setSelectedCampaign(data);
      return data;
    });
  };

  const addCampaign = (data) => {
    Api.post(
      `/campaigns`,
      { ...data, ownerID: user.id },
      { headers: headers }
    ).then(() => {
      getCampaigns();
    });
  };

  const editCampaign = (id, data) => {
    Api.patch(`/campaigns/${id}`, data, { headers: headers }).then(() => {
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
        selectedCampaign,
        addCampaign,
        editCampaign,
        deleteCampaign,
        getCampaigns,
        getCampaign,
      }}
    >
      {children}
    </CampaignsContext.Provider>
  );
};
