import Modal from "../modal/index";
import { StyledForm, HeaderModal, UserBox, Type, Bio } from "./style.js";
import { UserContext } from "../../providers/user";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../button";
import { CampaignsContext } from "../../providers/campaigns";

export default function ModalCreateCampaign({setIsModalOpen}) {
  const formSchema = yup.object().shape({
    name: yup.string().min(6).required(),
    description: yup.string().min(6).required(),
    avatar: yup.string().required(),
    donation: yup.string().required(),
    volunteer: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { user } = useContext(UserContext);
  const { addCampaign } = useContext(CampaignsContext);
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Modal
      closeable={true}
      header={
        <HeaderModal>
          <UserBox>
            <img src={user.img} alt="user" />
          </UserBox>
          <h2>Criar Campanha</h2>
        </HeaderModal>
      }
      children={
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label for="name">Nome do Projeto</label>
            <input
              {...register("name")}
              name="name"
              placeholder="Insira o nome do projeto"
              type="text"
            />
          </div>
          <label htmlFor="avatar">Avatar (url)</label>
          <div>
            <input
              {...register("avatar")}
              type="text"
              id="avatar"
              placeholder="Link da foto da campanha"
            ></input>
          </div>
          <div>
            <label for="description">Bio</label>
            <textarea
              rows={3}
              {...register("description")}
              placeholder="Descrição da campanha"
              type="textArea"
            />
          </div>
          <section>
            <Type>
              <label htmlFor="isDonation">Doações</label>
              <select id="isDonation" {...register("donation")}>
                <option>Sim</option>
                <option>Não</option>
              </select>
            </Type>
            <Type className="type">
              <label htmlFor="isVolunteer">Voluntaria</label>
              <select id="isVolunteer" {...register("volunteer")}>
                <option>Sim</option>
                <option>Não</option>
              </select>
            </Type>
          </section>
          <Button type="submit">Salvar Alterações</Button>
        </StyledForm>
      }
    />
  );
}
