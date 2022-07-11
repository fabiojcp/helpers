import logo from "../../assets/imgs/LogotipoBranca.svg";
import { useState } from "react";
import Button from "../../components/button";
import {
  DivMain,
  DivHeader,
  DivForm,
  FormHeader,
  BtnBack,
  P,
  Form,
  FormTitle,
} from "./style";
import { Logo } from "../landing/styles";
import { Link } from "react-router-dom";
import RegisterEntity from "../../components/registerForm/Entity";
import RegisterPF from "../../components/registerForm/PF";
import RegisterPJ from "../../components/registerForm/PJ";

export default function Registration() {
  const [type, setType] = useState("");

  return (
    <DivMain>
      <DivHeader>
        <Logo src={logo} alt="logo" />
      </DivHeader>
      <DivForm>
        <FormHeader>
          <Link to={"/"}>
            <BtnBack>Voltar</BtnBack>
          </Link>
          <P>Crie a sua conta abaixo</P>
        </FormHeader>
        <Form onSubmit={event => event.preventDefault()}>
          {type === "" && (
            <>
              <FormTitle>ESCOLHA O TIPO DE CONTA</FormTitle>
              <Button onClick={() => setType("fisica")}>
                Sou uma pessoa física
              </Button>
              <Button onClick={() => setType("juridica")}>
                Sou uma pessoa jurídica
              </Button>
              <Button onClick={() => setType("entidade")}>
                Sou uma organização
              </Button>
            </>
          )}
          {type === "fisica" && <RegisterPF /> }

          {type === "juridica" && <RegisterPJ/>}

          {type === "entidade" && <RegisterEntity/>}
        </Form>
      </DivForm>
    </DivMain>
  );
}
