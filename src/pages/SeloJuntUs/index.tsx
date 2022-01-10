import Button from "components/common/Button";
import Input from "components/common/Input";
import SectionLayout from "components/layouts/SectionLayout";

export default function SeloJuntUs(props: any) {
  return (
    <div>
      <SectionLayout
        render={{ "Selo JuntUs": <Page /> }}
        sections={[{ title: "Selo JuntUs" }]}
      />
    </div>
  );
}

const Page = () => {
  return (
    <div className="selo">
      <p>
        Lorem ipsum dolor sit amet. Qui quibusdam tempora sit aperiam mollitia
        rem numquam aperiam et mollitia amet quo sequi maxime. Ab fugit
        aspernatur et porro assumenda et facere laborum non voluptatem dicta!
      </p>

      <Form />
    </div>
  );
};

const Form = () => (
  <form>
    <div className="flex">
      <Input
        width="45%"
        type="file"
        label="Cartão CNPJ"
        name="cartao"
        placeholder="Faça o upload do seu cartão"
        onChange={null}
      />
      <Input
        width="45%"
        type="file"
        label="Alvará de localização e funcionamento"
        name="alvara"
        placeholder="Faça o upload do Alvará"
        onChange={null}
      />
    </div>
    <div className="flex">
      <Input
        width="45%"
        type="file"
        label="Certidão Negativa de Débito"
        name="certidao"
        placeholder="Faça o upload da CND"
        onChange={null}
      />
      <Input
        width="45%"
        type="file"
        label="Certificado de Regularidade do FGTS"
        name="certificado"
        placeholder="Faça o upload do CRF"
        onChange={null}
      />
    </div>
    <div style={{ width: "45%", marginLeft: "2.5%" }}>
      <Input
        width="100%"
        type="text"
        label="RNTRC"
        name="rntrc"
        placeholder="Digite o número do registro"
        onChange={null}
      />
    </div>

    <div className="buttons-container">
      <Button type="primary" submit>
        Salvar
      </Button>
    </div>
  </form>
);
