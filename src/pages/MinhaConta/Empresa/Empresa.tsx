import placeholderImg from "assets/placeholder.png";
import Button from "components/common/Button";
import InputCard from "components/common/Cards/InputCard";
import Input from "components/common/Input";
import Loading from "components/common/Loading";
import Select from "components/common/Select";
import { editProfile } from "helpers/api/profile";
import { useEffect, useState } from "react";
import { getTransportadoraFields, empresa3, getFields } from "./empresaInputs";

export default function Empresa(props: any) {
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const empresa1 = await getTransportadoraFields();
      const empresa2 = await getFields();
      setInputs([
        {
          condition: props.type === "TRANSPORTADOR",
          inputs: empresa1,
          add: "",
        },
        {
          condition: true,
          inputs: empresa2,
          add: "Adicionar mais unidades",
        },
        {
          condition: true,
          inputs: empresa3,
          add: "Adicionar mais contatos",
        },
      ]);
    };

    fetchData();
  }, []);

  if (!inputs.length) return <Loading />;

  return (
    <div className="page">
      <InputCard>
        <ProfileInput type={props.type} />
      </InputCard>
      {inputs.map(
        (input, index) =>
          input.condition && (
            <InputCard
              {...input.inputs}
              add={input.add}
              setInputs={setInputs}
              key={index}
              index={index}
              item={input}
            />
          )
      )}
    </div>
  );
}

function ProfileImage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 25,
        minWidth: "30%",
      }}
    >
      <img src={placeholderImg} height="150" alt="Profile" />
      <div className="flex j-even" style={{ fontSize: 15 }}>
        <p
          style={{
            margin: "0 10px",
            cursor: "pointer",
            color: "var(--JuntUs-Red)",
          }}
        >
          Remover logo
        </p>
        <p
          style={{
            margin: "0 10px",
            cursor: "pointer",
            color: "var(--JuntUs-Blue)",
          }}
        >
          Alterar logo <br /> (até 100kb)
        </p>
      </div>
    </div>
  );
}

function ProfileInput(props: any) {
  const [transportes, setTransportes] = useState();

  useEffect(() => {
    if (props.type === "TRANSPORTADOR") {
      const fetchData = async () => {};
    }
  }, [props.type]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const profile = await editProfile(data);
    if (profile) e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="flex"
        style={{
          justifyContent: "space-between",
          width: "98%",
          margin: "auto",
          alignItems: "center",
        }}
      >
        <ProfileImage />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          <Input
            width="45%"
            type="text"
            label="CNPJ"
            name="cnpj"
            placeholder="12.345.678/0001-12"
            disabled
          />
          <Input
            width="45%"
            type="text"
            label="Razão Social"
            name="razaoSocial"
            placeholder="Informe o nome da empresa"
            required
          />
          <Input
            width="45%"
            type="text"
            label="Segmento"
            name="segmento"
            placeholder="Informe os tipos de segmento"
            required
          />
          <Input
            width="45%"
            type="text"
            label="Site"
            name="site"
            placeholder="www.site.com.br"
            required
          />
        </div>
      </div>
      <div className="flex">
        <Input
          width="30%"
          type="text"
          label="Facebook"
          name="facebook"
          placeholder="facebook.com/empresa"
        />
        <Input
          width="30%"
          type="text"
          label="Instagram"
          name="instagram"
          placeholder="instagram.com/empresa"
        />
        <Input
          width="30%"
          type="text"
          label="Linkedin"
          name="linkedin"
          placeholder="linkedin.com/empresa"
        />
      </div>
      <div>
        <Input
          width="97%"
          type="textarea"
          label="Sobre a empresa"
          name="sobre"
          placeholder="Conte um pouco sobre a história, as atividades... até 500 caracteres"
          height="200px"
          maxLength={500}
        />
      </div>
      {props.type === "TRANSPORTADOR" && (
        <div className="flex" style={{ justifyContent: "flex-start" }}>
          <Select
            width="30%"
            type="text"
            label="Tipo de transporte"
            name="tipo_transporte"
            placeholder="Selecione o tipo de transporte"
            left="1.5%"
            options={[
              { value: "1", label: "Fracionado" },
              { value: "2", label: "Lotação" },
            ]}
            required
          />
        </div>
      )}
      <div className="buttons-container">
        <Button type="primary" submit>
          Salvar
        </Button>
      </div>
    </form>
  );
}
