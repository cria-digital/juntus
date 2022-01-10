import InputCard from "components/common/Cards/InputCard";
import Checkboxes, { operacao } from "./operacaoInputs";

export default function Operacao() {
  return (
    <InputCard noChildren {...operacao}>
      <Checkboxes />
    </InputCard>
  );
}
