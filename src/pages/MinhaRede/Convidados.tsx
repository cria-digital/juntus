import Button from "components/common/Button";
import Input from "components/common/Input";
import Usuarios from "components/common/Usuarios";
import { sendRequest } from "helpers/api/rede";
import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const mySwal = withReactContent(Swal);

const initialState = {
  email: "",
  cnpj: "",
  nome: "",
};

export default function Convidados({ type }: { type: string }) {
  const [data, setData] = useState(initialState);

  const changeField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const request = await sendRequest(data);
    if (request) {
      setData(initialState);
      await mySwal.fire({
        title: <h3>SEU CONVITE FOI ENVIADO!</h3>,
        html: (
          <p>
            O transportador indicado receberá um e-mail para se cadastrar na
            JuntUs.
          </p>
        ),
        showCloseButton: true,
      });
    }
  };

  return (
    <div className="convidados">
      <p>
        {type === "EMBARCADOR"
          ? "Convide os transportadores da sua empresa para participarem da sua rede!"
          : "Convide os seus clientes para participarem da sua rede!"}
      </p>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex" }}>
          <Input
            width="45%"
            type="text"
            label={
              type === "EMBARCADOR"
                ? "E-mail do Transportador"
                : "E-mail do Embarcador"
            }
            name="email"
            placeholder="email@email.com"
            onChange={changeField}
            required
            value={data.email}
          />
          <Input
            width="45%"
            type="text"
            label="Nome"
            name="nome"
            placeholder="Digite o Nome"
            onChange={changeField}
            value={data.nome}
            required
          />
        </div>
        <div style={{ width: "45%", marginLeft: "2.5%" }}>
          <Input
            width="100%"
            type="text"
            label="CNPJ"
            name="cnpj"
            placeholder="CNPJ"
            onChange={changeField}
            mask="99.999.999/9999-99"
            required
            value={data.cnpj}
          />
        </div>

        <div className="buttons-container">
          <Button type="secondary">Cancelar</Button>
          <Button type="primary" submit>
            Cadastrar
          </Button>
        </div>
      </form>

      <Usuarios />
    </div>
  );
}
