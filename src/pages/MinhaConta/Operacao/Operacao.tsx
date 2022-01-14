import InputCard from "components/common/Cards/InputCard";
import Checkboxes, { operacao } from "./embarcadora";
import { operacao1, operacao2, operacao3, operacao4 } from "./transportadora";

const operacaoCheckboxes = {
  inputs: [],
  buttons: [
    {
      type: "secondary",
      name: "btn-1",
      children: <span>Upload de Licenças</span>,
    },
    {
      type: "primary",
      name: "btn",
      children: <span>Salvar</span>,
    },
  ],
};

export default function Operacao(props: any) {
  if (props.type === "EMBARCADOR")
    return (
      <InputCard noChildren {...operacao}>
        <Checkboxes />
      </InputCard>
    );
  else
    return (
      <div className="page">
        <InputCard {...operacao1} />
        <InputCard {...operacao2} />
        <InputCard {...operacao3} />
        <InputCard noChildren {...operacaoCheckboxes}>
          <Checkboxes />
        </InputCard>
        <InputCard {...operacao4} />
      </div>
    );
}
