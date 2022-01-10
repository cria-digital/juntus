import Button from "components/common/Button";
import Card from "components/common/Cards/Card";
import InputCard from "components/common/Cards/InputCard";
import Input from "components/common/Input";
import { empresa1, empresa2, empresa3 } from "./empresaInputs";
import placeholderImg from "assets/placeholder.png";

export default function Empresa() {
  return (
    <div className="convidados">
      <InputCard>
        <ProfileInput />
      </InputCard>
      <InputCard {...empresa1} />
      <InputCard {...empresa2} />
      <InputCard {...empresa3} />
    </div>
  );
}

function ProfileImage() {
  return (
    <div>
      <img src={placeholderImg} height="150" alt="Profile" />
      <div className="flex j-even">
        <p style={{ margin: "0 10px" }}>Remover logo</p>{" "}
        <p style={{ margin: "0 10px" }}>Remover logo</p>
      </div>
    </div>
  );
}

function ProfileInput() {
  return (
    <>
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
            required
          />
          <Input
            width="45%"
            type="text"
            label="Razão Social"
            name="razao"
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
          required
        />
        <Input
          width="30%"
          type="text"
          label="Instagram"
          name="instagram"
          placeholder="instagram.com/empresa"
          required
        />
        <Input
          width="30%"
          type="text"
          label="Linkedin"
          name="linkedin"
          placeholder="linkedin.com/empresa"
          required
        />
      </div>
      <div>
        <Input
          width="97%"
          type="text"
          label="Sobre a empresa"
          name="sobre"
          placeholder="Conte um pouco sobre a histótia, as atividades... até 500 caracteres"
          required
        />
      </div>
      <div className="flex" style={{ justifyContent: "flex-start" }}>
        <Input
          width="30%"
          type="text"
          label="Tipo de transporte"
          name="tipo_transporte"
          placeholder="Selecione o tipo de transporte"
          required
        />
      </div>
      <div className="buttons-container">
        <Button type="primary" name="Salvar">
          Salvar
        </Button>
      </div>
    </>
  );
}
