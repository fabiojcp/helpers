import { useState } from "react";
import Button from "../../components/button";
import { FormTitle, DivPassword, Select, Option, Bio } from "./style";
import Input from "../../components/input";
import PasswordStrengthBar from "react-password-strength-bar";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function RegisterEntity() {
  const [passwordType, setpasswordType] = useState("password");
  const changePasswordType = () => {
    passwordType === "password"
      ? setpasswordType("text")
      : setpasswordType("password");
  };
  const [password, setPassword] = useState("");

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
    answerable: yup.string().required("Nome obrigatório!"),
    phone: yup
      .number()
      .typeError("Telefone obrigatório!")
      .min(1000000000, "Apenas números com DDD")
      .max(99999999999, "Apenas números com DDD")
      .required("Telefone obrigatório!"),
    ag: yup.string().required("Agência obrigatório!"),
    cc: yup.string().required("Conta obrigatória!"),
    bank: yup.string().required("Banco obrigatório!"),
    bio: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmitFunction(data) {
    console.log(data);
  }

  return (
    <>
      <Input>
        <label htmlFor="name">Nome fantasia</label>
        <input type="text" id="name" {...register("name")}></input>
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
            type={passwordType}
            id="password"
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
          <input type={passwordType} id="confirmpassword" {...register("passwordConfirm")}></input>
          {errors.passwordConfirm && <span>{errors.passwordConfirm.message}</span>}
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
        <label htmlFor="avatar"  {...register("avatar")}>Avatar (url)</label>
        <input type="text" id="avatar"></input>
        {errors.avatar && <span>{errors.avatar.message}</span>}
      </Input>
      <Input>
        <label htmlFor="answerable" >Pessoa de contato</label>
        <input type="text" id="answerable" {...register("answerable")}></input>
        {errors.answerable && <span>{errors.answerable.message}</span>}
      </Input>
      <Input>
        <label htmlFor="phone">Telefone para contato</label>
        <input type="text" id="phone"  {...register("phone")}></input>
        {errors.phone && <span>{errors.phone.message}</span>}
      </Input>
      <FormTitle>Dados bancários</FormTitle>
      <DivPassword>
        <Input>
          <label htmlFor="ag">Agência</label>
          <input type="text" id="ag" {...register("ag")} ></input>
          {errors.ag && <span>{errors.ag.message}</span>}
        </Input>
        <Input>
          <label htmlFor="cc">Conta</label>
          <input type="text" id="cc"  {...register("cc")}></input>
          {errors.cc && <span>{errors.cc.message}</span>}
        </Input>
      </DivPassword>

      <Input>
        <label htmlFor="bank">Banco</label>
        <input type="text" id="bank" {...register("bank")}></input>
        {errors.bank && <span>{errors.bank.message}</span>}
      </Input>
      <Input>
        <label for="tipo" htmlFor="type">
          Tipo
        </label>
        <Select name="tipo" id="type" {...register("accountType")}>
          <Option>Corrente</Option>
          <Option>Poupança</Option>
        </Select>
      </Input>

      <Input>
        <label htmlFor="pix">Chave pix</label>
        <input type="text" id="pix" {...register("pix")}></input>
        {errors.pix && <span>{errors.pix.message}</span>}
      </Input>
      <Bio>
        <label htmlFor="bio">Bio</label>
        <textarea type="text" rows="8" id="bio" {...register("bio")}></textarea>
        {errors.bio && <span>{errors.bio.message}</span>}
      </Bio>
      <Button onClick={handleSubmit(onSubmitFunction)}>Criar conta</Button>
    </>
  );
}
