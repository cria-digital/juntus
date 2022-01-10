import Button from "components/common/Button";
import ProfileHeader from "components/main/Profile/ProfileHeader";
import ProfileCards from "components/main/Profile/ProfileCards";
import RoutesItem from "components/common/RoutesItem";
import Card from "components/common/Cards/Card";
import Table from "components/common/Table";
import ColumnChart from "components/common/Charts/ColumnChart";
import DonutChart from "components/common/Charts/DonutChart";

export default function ProfileLayout({ state, embarcadora = false }) {
  return (
    <div className="profile">
      <ProfileHeader state={state} />
      <ProfileInfo state={state} />

      <div className="map">
        <Button type="secondary">Ver mais</Button>
      </div>

      <div className="profile-servicos">
        <h2>PRINCIPAIS SERVIÇOS REQUERIDOS</h2>

        <div>
          {state.servicos.map((servico) => (
            <span key={servico.id}>{servico.nome}</span>
          ))}
        </div>
      </div>

      {embarcadora ? (
        <EmbarcadoraCards state={state} />
      ) : (
        <ProfileCards state={state} />
      )}
    </div>
  );
}

function ProfileInfo({ state }) {
  return (
    <div className="sub-info">
      <div className="profile-description">
        <p>{state.resumo}</p>
        <Button type="secondary">Ver mais</Button>
      </div>

      <div className="profile-list">
        <ul>
          <RoutesItem />
          <RoutesItem />
          <RoutesItem />
          <RoutesItem />
        </ul>
      </div>
    </div>
  );
}

function EmbarcadoraCards({ state }) {
  return (
    <div>
      <div className="flex">
        <Card width="35%">
          <h2>PREMIAÇÕES RECENTES</h2>
          <Table
            data={[
              { name: "Melhor transportadora", value: "2021" },
              { name: "Melhor transportadora", value: "2020" },
              { name: "Melhor transportadora", value: "2019" },
            ]}
          />
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
          <h2>SEGURO</h2>
          <Table
            data={[
              { name: "Seguradora", value: "Seguradora" },
              { name: "Número da apólice", value: "123456789" },
              { name: "Vigencia", value: "2021" },
              { name: "Limite de cobertura", value: "R$ 20.000,00" },
              { name: "TIpo de apólice", value: "RCTR-C" },
            ]}
          />
        </Card>
        <Card width="35%">
          <h2>EXIGÊNCIAS TECNOLÓGICAS</h2>
          <p>Frota monitorada via rastreamento GPS</p>
          <p>Frota monitorada via ligação ou mensagem</p>
          <p>Monitoramento de terceiros via ligação ou mensagem</p>
          <p>Monitoramento de terceiros via GPS</p>
          <p>Equipe de monitoramento integral 24 horas</p>
        </Card>
      </div>

      <Card>
        <h3> COMPOSIÇÃO DA FROTA </h3>
        <div className="flex j-even">
          <ColumnChart />
          <DonutChart />
        </div>
      </Card>
    </div>
  );
}
