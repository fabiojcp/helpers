import Modal from '../Modal';
import {StyledForm} from "./style.js"
export default function ModalEntity(){
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
            <button type="submit">Salvar Alterações</button>
          </StyledForm>
        }
      />
    )
   
}