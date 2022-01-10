import Button from "components/common/Button";
import Usuarios from "components/common/Usuarios";
import Input from "components/common/Input";
import React, { useState } from "react";

interface IUserData {
  name: string;
  email: string;
  telefone: string;
  cargo: string;
}

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userData);
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
            required
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
            placeholder="(31) 99999-9999"
            onChange={changeField}
            required
          />
        </div>

        <div className="buttons-container">
          <Button type="primary">Cadastrar</Button>
        </div>
      </form>

      <Usuarios />
    </div>
  );
}
