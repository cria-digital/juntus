import Button from "components/common/Button";
import Input from "components/common/Input";

export default function Teste() {
  return (
    <div>
      <div>
        <Button type="primary">Teste</Button>
        <Button type="secondary">Teste</Button>
        <Button type="primary" disabled>
          Teste
        </Button>
        <Button type="secondary" disabled>
          Teste
        </Button>
      </div>
      <br />
      {/* <Input placeholder="Teste" type="text" width={300} />
      <Input placeholder="Teste" type="text" width={300} value="TESTE" />
      <Input placeholder="Teste" type="text" width={300} disabled />
      <Input placeholder="Teste" type="text" width={300} error /> */}
      <Input type="radio" />
    </div>
  );
}
