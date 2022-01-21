import Button from "components/common/Button";
import ProfileHeader from "components/main/Profile/ProfileHeader";
import ProfileCards from "components/main/Profile/ProfileCards";
import RoutesItem from "components/common/RoutesItem";
import Card from "components/common/Cards/Card";
import Table from "components/common/Table";
import ColumnChart from "components/common/Charts/ColumnChart";
import DonutChart from "components/common/Charts/DonutChart";
import { useLocation } from "react-router-dom";

export default function ProfileLayout({ state, charts = false }) {
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

      {charts ? <ChartsCards state={state} /> : <ProfileCards state={state} />}
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

function ChartsCards({ state }) {
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

      <div className="clientes-container">
        <h1>CLIENTES</h1>
        <div className="clientes-list">
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Ambev_logo.svg/1200px-Ambev_logo.svg.png"
            }
            alt="ambev"
          />
          <img
            src={"https://logospng.org/download/pepsi/logo-pepsi-icon-256.png"}
            alt="pepsi"
          />
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png"
            }
            alt="coca cola"
          />
        </div>
      </div>
      <div className="flex j-even">
        <div className="cliente-photo" />
        <div className="cliente-photo" />
        <div className="cliente-photo" />
        <div className="cliente-photo" />
      </div>
    </div>
  );
}
