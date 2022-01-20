import Button from "components/common/Button";
import Usuarios from "components/common/Usuarios";
import Input from "components/common/Input";
import React, { useState } from "react";
import { IUserData } from "helpers/interfaces";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const MySwal = withReactContent(Swal);

export default function Usuario(props: any) {
  const [userData, setUserData] = useState<IUserData>({
    name: "",
    email: "",
    telefone: "",
    cargo: "",
  });

  const changeField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await MySwal.fire({
      title: <h3>SEU CONVITE FOI ENVIADO!</h3>,
      html: (
        <p>
          O transportador indicado receberá um e-mail para se cadastrar na
          JuntUs.
        </p>
      ),
      showCloseButton: true,
    });
  };

  const handlePasswordReset = async (e: any) => {
    await MySwal.fire({
      title: <h3>ALTERAR SENHA</h3>,
      showCloseButton: true,
      html: (
        <p>Foi enviado um e-mail com o procedimento para alteração de senha.</p>
      ),
    });
  };

  return (
    <div className="convidados">
      <p>
        Cadastre as rotas em que sua empresa atua para ser encontrado por
        embarcadores!
      </p>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex" }}>
          <Input
            width="45%"
            type="text"
            label="Nome completo"
            name="nome"
            placeholder="Digite seu nome completo"
            onChange={changeField}
            required
          />
          <Input
            width="45%"
            type="text"
            label="E-mail corporativo"
            name="email"
            placeholder="Digite seu e-mail de trabalho"
            onChange={changeField}
            disabled
          />
        </div>
        <div style={{ display: "flex" }}>
          <Input
            width="45%"
            type="text"
            label="Cargo"
            name="cargo"
            placeholder="Digite seu cargo atual"
            onChange={changeField}
            required
          />
          <Input
            width="45%"
            type="text"
            label="Telefone"
            name="telefone"
            mask="(99) 99999-9999"
            placeholder="(31) 99999-9999"
            onChange={changeField}
            required
          />
        </div>

        <p
          style={{
            margin: "10px 0 0 0",
            cursor: "pointer",
            color: "var(--JuntUs-Orange)",
          }}
          onClick={handlePasswordReset}
        >
          Resetar senha
        </p>

        <div className="buttons-container" style={{ marginTop: 0 }}>
          <Button type="primary" submit>
            Salvar
          </Button>
        </div>
      </form>

      <Usuarios />
    </div>
  );
}
