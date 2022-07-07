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
        <Form>
          {type === "" && (
            <>
              <FormTitle>ESCOLHA O TIPO DE CONTA</FormTitle>
              <Button onClick={() => setType("fisica")}>
                Sou uma pessoa física
              </Button>
              <Button onClick={() => setType("juridica")}>
                Sou uma pessoa jurídica
              </Button>
              <Button onClick={() => setType("entity")}>
                Sou uma organização
              </Button>
            </>
          )}
          {type === "fisica" && (
          <>
          
          </>)}
        </Form>
      </DivForm>
    </DivMain>
  );
}
