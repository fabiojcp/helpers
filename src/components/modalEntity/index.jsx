import Modal from '../modal/index';
import {StyledForm, HeaderModal, UserBox} from "./style.js"
import {UserContext} from "../../providers/user"
import {useContext} from "react"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function ModalEntity(){
const formSchema = yup.object().shape({
    name: yup.string().min(6).required(),
    email: yup.string().email().required(),
    phone: yup.string().min(9).required(),
    description: yup.string().min(6).required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { user, modal, editUser } = useContext(UserContext);
    const onSubmit = (data) => {
        editUser(data);
    }
    return (
        <Modal
        closeable={true}
        header={
          <HeaderModal>
            <UserBox>
              <img src={user.img} alt="user" />
            </UserBox>
            <h2>Editar perfil</h2>
          </HeaderModal>
        }
        children={
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label for="name">Nome da Entidade</label>
              <input
                {...register("name")}
                name="name"
                placeholder={user.name}
                type="text"
              />
            </div>
            <div>
              <label for="email">E-mail</label>
              <input
                {...register("email")}
                name="email"
                placeholder={user.email}
                type="text"
              />
            </div>
            <div>
              <label for="phone">Telefone de contato</label>
              <input
                {...register("phone")}
                name="phone"
                placeholder={user.contacts.phone}
                type="text"
              />
            </div>
            <div>
              <label for="description">Bio</label>
              <input
                {...register("description")}
                placeholder={user.description}
                type="text"
              />
              
            </div>
            <div>
              <label for="description">Banco</label>
              <input
                {...register("description")}
                placeholder={user.contacts.bankDetails.bankName}
                type="text"
              />
              
            </div>
            <div>
              <label for="description">Conta</label>
              <input
                {...register("description")}
                placeholder={user.contacts.bankDetails.accoun}
                type="text"
              />
              
            </div>
            <div>
              <label for="description">Agência</label>
              <input
                {...register("description")}
                placeholder={user.contacts.bankDetails.agency}
                type="text"
              />
              
            </div>
            <div>
              <label for="description">Pix</label>
              <input
                {...register("description")}
                placeholder={user.contacts.bankDetails.pix}
                type="text"
              />
              
            </div>
            <button type="submit">Salvar Alterações</button>
          </StyledForm>
        }
      />
    )
   
}