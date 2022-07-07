import Button from "../button"
import Input from "../input"

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { UserProvider } from "../../providers/user"
import { Link } from "react-router-dom";

export const FormLogin = () => {
    const loginUser = useContext(UserProvider);
    const schema = yup.object().shape({
        username: yup
          .string()
          .required("Este campo é obrigatório")
          .email(),
        password: yup
          .string()
          .required("O campo de senha é obrigatório")
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({ resolver: yupResolver(schema) });
    
      const signUp = (data) => {
        loginUser(data)
      };
    return(
        <form  onSubmit={handleSubmit(signUp)}>
            <h2>Entre, ou crie sua conta</h2>
            <Input>
                <label>Usuário: </label>
                <input type="text" {...register("username")} placeholder="Ex: joaodasilva@email.com"/>
                <span>{errors?.username?.message}</span>
            </Input>
            <Input>
                <label>Senha: </label>
                <input type="text" {...register("password")} placeholder="Insira sua Senha Aqui" />
                <span>{errors?.password?.message}</span>
            </Input>
            <Button type="submit"></Button>
            <span>
                Não tem uma conta? <Link to={"/register"}>Cadastrar-se</Link>
            </span>
        </form>
    )
}