import Button from "components/common/Button";
import Card from "components/common/Cards/Card";
import Input from "components/common/Input";
import Ratings from "components/common/Rating";
import Select from "components/common/Select";
import { useState } from "react";
import placeholderImg from "assets/placeholder.png";

export default function Results({ inputs }) {
  const [filter, setFilter] = useState(false);
  return (
    <div className="mais-buscados">
      <p>5 transportadores encontrados (0,56 segundos)</p>
      <p>Filtre a busca por transportadores de acordo com os critérios desejados. </p>

      {filter ? (
        <Filters inputs={inputs} setFilter={setFilter} />
      ) : (
        <div className="buttons-container">
          <Button type="primary" onClick={() => setFilter(true)}>
            Filtrar
          </Button>
        </div>
      )}

      <BuscaCard />
      <BuscaCard />
      <BuscaCard />
      <BuscaCard />
      <BuscaCard />
    </div>
  );
}

function BuscaCard() {
  return (
    <div className="flex" style={{ alignItems: "center" }}>
      <input type="checkbox" style={{ width: 30, height: 30 }} />
      <Card className="busca-card">
        <div className="flex">
          <img src={placeholderImg} height="80" width="80" style={{ margin: 25 }} />
          <div>
            <h3>{"QB Logística"}</h3>
            <Ratings rating={3.5} />
            <p>
              <b>Rotas</b>: <span>Belo Horizonte, MG {">"} São Paulo, SP</span>
            </p>
            <p>
              <b>Veículos</b>: <span>Bitrem, Bitruck, Carreta, Toco</span>
            </p>
            <p>
              <b>Carrocerias</b>: <span>Baú, Caçamba, Cegonheiro</span>
            </p>

            <div className="tags">
              <p>Rastreador</p>
              <p>Certificado Registro Exército</p>
              <p>ISO 9001</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

function Filters({ inputs, setFilter }) {
  return (
    <>
      <div className="flex">
        <Select width="22%" placeholder="Selecione o(s) veículo(s)" label="Veículos" name="veiculos">
          {inputs.veiculos.map((data: any) => (
            <option key={data.id} value={data.id}>
              {data.nome}
            </option>
          ))}
        </Select>
        <Select width="22%" placeholder="Selecione a(s) carroceria(s)" label="Carrocerias" name="Carrocerias">
          {inputs.carrocerias.map((data: any) => (
            <option key={data.id} value={data.id}>
              {data.nome}
            </option>
          ))}
        </Select>

        <Select width="22%" placeholder="Selecione o(s) serviços" label="Serviços" name="servicos">
          {inputs.servicos.map((data: any) => (
            <option key={data.id} value={data.id}>
              {data.nome}
            </option>
          ))}
        </Select>

        <Select width="22%" placeholder="Selecione uma ou mais licenças" label="Licenças" name="licencas">
          {inputs.licencas.map((data: any) => (
            <option key={data.id} value={data.id}>
              {data.nome}
            </option>
          ))}
        </Select>
      </div>
      <div className="buttons-container">
        <Button type="secondary" onClick={() => setFilter(false)}>
          Limpar
        </Button>
      </div>
    </>
  );
}
