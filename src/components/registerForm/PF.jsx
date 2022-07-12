import { useState, useContext } from "react";
import Button from "../../components/button";
import { DivPassword, Select, Option, Bio } from "./style";
import Input from "../../components/input";
import PasswordStrengthBar from "react-password-strength-bar";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { UserContext } from "../../providers/user";
import { useNavigate } from "react-router-dom";

export default function RegisterPF () {
  const [passwordType, setpasswordType] = useState("password");
  const changePasswordType = () => {
    passwordType === "password"
      ? setpasswordType("text")
      : setpasswordType("password");
  };
  const [password, setPassword] = useState("");
  const { registerUser, loginUser, isLogged } = useContext(UserContext)

  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório!"),
    email: yup.string().email("Email inválido").required("Email obrigatório!"),
    password: yup
      .string()
      .min(4, "Mínimo de 4 dígitos")
      .required("Senha obrigatória!"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não conferem")
      .required("Confirmação obrigatória!"),
    avatar: yup.string().url("Não é uma URL válida"),
    phone: yup.number().typeError("Apenas números").min(1000000000, "Apenas números com DDD").max(99999999999, "Apenas números com DDD").required("Telefone obrigatório!"),
    bio: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  function onSubmitFunction(data) {
    registerUser({
      email: data.email,
      name: data.name,
      password: data.password,
      type: "fisica",
      gender: data.gender,
      img: data.img,
      description: data.bio,
      phone: data.phone
    });
    loginUser({email: data.email, password: data.password});
    isLogged && navigate("/dashboard");
  }



  return (
    <>
      <Input>
        <label htmlFor="NomeCompleto">Nome completo</label>
        <input type="text" id="NomeCompleto" {...register("name")}></input>
        {errors.name && <span>{errors.name.message}</span>}
      </Input>

      <Input>
        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" {...register("email")}></input>
        {errors.email && <span>{errors.email.message}</span>}
      </Input>

      <DivPassword>
        <Input>
          {passwordType === "password" ? (
            <EyeFilled onClick={changePasswordType} />
          ) : (
            <EyeInvisibleFilled onClick={changePasswordType} />
          )}

          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type={passwordType}
            {...register("password")}
            onChange={(event) => setPassword(event.target.value)}
            
          ></input>
          {errors.password && <span>{errors.password.message}</span>}
        </Input>

        <Input>
          {passwordType === "password" ? (
            <EyeFilled onClick={changePasswordType} />
          ) : (
            <EyeInvisibleFilled onClick={changePasswordType} />
          )}
          <label htmlFor="confirmpassword">Repita senha</label>
          <input type={passwordType} id="confirmpassword" 
          {...register("passwordConfirm")}
          ></input>
        </Input>
      </DivPassword>

      <PasswordStrengthBar
        password={password}
        className="PasswordStrengthBar"
        style={{ margin: "-3vh 0 2vh 0", color: "white" }}
        scoreWords={["Muito fraco", "Fraco", "Médio", "Forte", "Muito forte"]}
        shortScoreWord={"Muito curto"}
        scoreWordStyle={{ color: "white" }}
      />

      <Input>
        <label htmlFor="avatar">Avatar (url)</label>
        <input type="text" id="avatar"
        {...register("avatar")}
        ></input>
        {errors.avatar && <span>{errors.avatar.message}</span>}
      </Input>

      <Input>
        <label htmlFor="phone">Telefone para contato</label>
        <input type="number" id="phone"
        {...register("phone")}        
        ></input>
        {errors.phone && <span>{errors.phone.message}</span>}
      </Input>

      <Input>
        <label htmlFor="gender">Gênero</label>
        <Select id="gender" {...register("gender")}>
          <Option>Homem cis</Option>
          <Option>Homem trans</Option>
          <Option>Mulher cis</Option>
          <Option>Mulher trans</Option>
          <Option>Prefiro não declarar / Outro</Option>
        </Select>
      </Input>
      <Bio>
        <label htmlFor="bio">Bio</label>
        <textarea type="text" rows="8" id="bio"
        {...register("bio")}        
        ></textarea>
        {errors.bio && <span>{errors.bio.message}</span>}
      </Bio>
      <Button type="submit" onClick={handleSubmit(onSubmitFunction)}>Criar conta</Button>
    </>
  );
}
