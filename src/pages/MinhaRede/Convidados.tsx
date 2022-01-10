import Button from "components/common/Button";
import Input from "components/common/Input";
import Usuarios from "components/common/Usuarios";

export default function Convidados(props: any) {
  return (
    <div className="convidados">
      <p>
        Cadastre as rotas em que sua empresa atua para ser encontrado por
        embarcadores!
      </p>
      <form>
        <div style={{ display: "flex" }}>
          <Input
            width="45%"
            type="text"
            label="E-mail do embarcador"
            name="email"
            placeholder="embarcador@email.com"
            onChange={null}
          />
          <Input
            width="45%"
            type="text"
            label="Origem da carga"
            name="origem"
            placeholder="Digite a região de Origem"
            onChange={null}
          />
        </div>
        <div style={{ width: "45%", marginLeft: "2.5%" }}>
          <Input
            width="100%"
            type="text"
            label="Origem da carga"
            name="origem"
            placeholder="Digite a região de Origem"
            onChange={null}
          />
        </div>

        <div className="buttons-container">
          <Button type="secondary" onClick={null}>
            Cancelar
          </Button>
          <Button type="primary">Cadastrar</Button>
        </div>
      </form>

      <Usuarios />
    </div>
  );
}
