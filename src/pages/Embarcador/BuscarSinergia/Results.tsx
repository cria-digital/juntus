import placeholderImg from "assets/placeholder.png";
import Button from "components/common/Button";
import Card from "components/common/Cards/Card";
import Ratings from "components/common/Rating";
import Select from "components/common/Select";
import { useState } from "react";

export default function Results({ inputs, results }) {
  const [filter, setFilter] = useState(false);
  return (
    <div className="page">
      <p>5 transportadores encontrados (0,56 segundos)</p>
      <p>
        Filtre a busca por transportadores de acordo com os critérios desejados.{" "}
      </p>

      {filter ? (
        <Filters inputs={inputs} setFilter={setFilter} />
      ) : (
        <div className="buttons-container">
          <Button type="primary" onClick={() => setFilter(true)}>
            Filtrar
          </Button>
        </div>
      )}

      {results.map((item) => (
        <BuscaCard key={item.empresaId} {...item} />
      ))}
    </div>
  );
}

function BuscaCard(props: any) {
  return (
    <div className="flex" style={{ alignItems: "center" }}>
      <input type="checkbox" style={{ width: 30, height: 30 }} />
      <Card className="busca-card">
        <div className="flex">
          <img
            src={placeholderImg}
            height="80"
            width="80"
            style={{ margin: 25 }}
          />
          <div>
            <h3>{props.nomeEmpresa}</h3>
            <Ratings rating={3.5} />
            <p>
              <b>Rotas</b>: <span>{props.rotas.join(", ")}</span>
            </p>
            <p>
              <b>Veículos</b>: <span>{props.veiculos.join(", ")}</span>
            </p>
            <p>
              <b>Carrocerias</b>: <span>{props.carrocerias.join(", ")}</span>
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
        <Select
          width="22%"
          placeholder="Selecione o(s) veículo(s)"
          label="Veículos"
          name="veiculos"
        >
          {inputs.veiculos.map((data: any) => (
            <option key={data.id} value={data.id}>
              {data.nome}
            </option>
          ))}
        </Select>
        <Select
          width="22%"
          placeholder="Selecione a(s) carroceria(s)"
          label="Carrocerias"
          name="Carrocerias"
        >
          {inputs.carrocerias.map((data: any) => (
            <option key={data.id} value={data.id}>
              {data.nome}
            </option>
          ))}
        </Select>

        <Select
          width="22%"
          placeholder="Selecione o(s) serviços"
          label="Serviços"
          name="servicos"
        >
          {inputs.servicos.map((data: any) => (
            <option key={data.id} value={data.id}>
              {data.nome}
            </option>
          ))}
        </Select>

        <Select
          width="22%"
          placeholder="Selecione uma ou mais licenças"
          label="Licenças"
          name="licencas"
        >
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
