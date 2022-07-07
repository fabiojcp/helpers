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
  DivPassword,
  Select,
  Option,
  Bio,
} from "./style";
import { Logo } from "../landing/styles";
import { Link } from "react-router-dom";
import Input from "../../components/input";

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
              <Button onClick={() => setType("entidade")}>
                Sou uma organização
              </Button>
            </>
          )}
          {type === "fisica" && (
            <>
              <Input>
                <label>Nome completo</label>
                <input type="text"></input>
              </Input>
              <Input>
                <label>E-mail</label>
                <input type="text"></input>
              </Input>
              <DivPassword>
                <Input>
                  <label>Senha</label>
                  <input type="text"></input>
                </Input>
                <Input>
                  <label>Repita senha</label>
                  <input type="text"></input>
                </Input>
              </DivPassword>
              <Input>
                <label>Avatar (url)</label>
                <input type="text"></input>
              </Input>  
              <Input>
                <label>Telefone para contato</label>
                <input type="text"></input>
              </Input>
              <Select>
                <Option>Homem cis</Option>
                <Option>Homem trans</Option>
                <Option>Mulher cis</Option>
                <Option>Mulher cis</Option>
                <Option>Prefiro não declarar / Outro</Option>
              </Select>
              <Bio >
                <label>Bio</label>
                <textarea type="text" rows="8"></textarea>
              </Bio>
              <Button>Criar conta</Button>
            </>
          )}

          {type === "juridica" && (
            <>
              <Input>
                <label>Nome fantasia</label>
                <input type="text"></input>
              </Input>
              <Input>
                <label>E-mail</label>
                <input type="text"></input>
              </Input>
              <DivPassword>
                <Input>
                  <label>Senha</label>
                  <input type="text"></input>
                </Input>
                <Input>
                  <label>Repita senha</label>
                  <input type="text"></input>
                </Input>
              </DivPassword>
              <Input>
                <label>Avatar (url)</label>
                <input type="text"></input>
              </Input>
              <Input>
                <label>Pessoa de contato</label>
                <input type="text"></input>
              </Input>
              <Input>
                <label>Telefone para contato</label>
                <input type="text"></input>
              </Input>
              <Bio >
                <label>Bio</label>
                <textarea type="text" rows="8"></textarea>
              </Bio>
              <Button>Criar conta</Button>
            </>
          )}

          {type === "entidade" && (
            <>
              <Input>
                <label>Nome fantasia</label>
                <input type="text"></input>
              </Input>
              <Input>
                <label>E-mail</label>
                <input type="text"></input>
              </Input>
              <DivPassword>
                <Input>
                  <label>Senha</label>
                  <input type="text"></input>
                </Input>
                <Input>
                  <label>Repita senha</label>
                  <input type="text"></input>
                </Input>
              </DivPassword>
              <Input>
                <label>Avatar (url)</label>
                <input type="text"></input>
              </Input>
              <Input>
                <label>Pessoa de contato</label>
                <input type="text"></input>
              </Input>
              <Input>
                <label>Telefone para contato</label>
                <input type="text"></input>
              </Input>
              <FormTitle>Dados bancários</FormTitle>
              <DivPassword>
                <Input>
                  <label>Agência</label>
                  <input type="text"></input>
                </Input>
                <Input>
                  <label>Conta</label>
                  <input type="text"></input>
                </Input>
              </DivPassword>

              <Input>
                <label>Banco</label>
                <input type="text"></input>
              </Input>
              <Input>
                <label for="tipo">Tipo</label>
                <Select name="tipo">
                  <Option>Corrente</Option>
                  <Option>Poupança</Option>
                </Select>
              </Input>

              <Input>
                <label>Chave pix</label>
                <input type="text"></input>
              </Input>
              <Bio >
                <label>Bio</label>
                <textarea type="text" rows="8"></textarea>
              </Bio>
              <Button>Criar conta</Button>
            </>
          )}
        </Form>
      </DivForm>
    </DivMain>
  );
}
