import { useEffect } from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import Api from "../../services/Api";
export const CampaignsContext = createContext();


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
      `/campaigns/`,
      data,
      { headers: headers }
    ).then(() => {
      getCampaigns();
      toast.success("Campanha criada com sucesso", toastStyle);
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
