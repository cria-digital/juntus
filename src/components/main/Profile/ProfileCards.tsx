import Table from "components/common/Table";
import Card from "components/common/Cards/Card";

export default function ProfileCards({ state }) {
  return (
    <div>
      <div className="flex">
        <Card width="35%">
          <h2>VEÍCULOS DESEJADOS</h2>
          <div className="veiculos-desejados">
            {state.veiculos.map((veiculo) => (
              <span key={veiculo.id}>{veiculo.nome}</span>
            ))}
          </div>
        </Card>
        <Card width="35%">
          <h2>LICENÇAS E CERTIFICADOS</h2>
          <Table
            noShadow
            data={state.licencas.map((licenca) => ({
              name: licenca.nome,
              value: " ",
            }))}
          />
        </Card>
      </div>

      <div className="flex">
        <Card width="35%">
          <h2>EXIGÊNCIAS BÁSICAS PGR</h2>
          <p className="text-cards">{state.exigenciaPGR}</p>
        </Card>
        <Card width="35%">
          <h2>EXIGÊNCIAS TECNOLÓGICAS</h2>
          <p className="text-cards">{state.exigenciaTecnologica}</p>
        </Card>
      </div>
    </div>
  );
}
