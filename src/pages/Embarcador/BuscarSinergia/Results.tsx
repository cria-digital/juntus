import placeholderImg from "assets/placeholder.png";
import Button from "components/common/Button";
import Card from "components/common/Cards/Card";
import CheckBox from "components/common/Checkbox";
import Ratings from "components/common/Rating";
import Select from "components/common/Select";
import { useState } from "react";
import { IoShareSocialSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { HiInformationCircle } from "react-icons/hi";
import { IconContext } from "react-icons/lib";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import Pagination from "components/hocs/Pagination";
import BackButton from "components/common/BackButton";

const MySwal = withReactContent(Swal);

export default function Results({ inputs, results, date, setResults }) {
  const [filter, setFilter] = useState(false);

  return (
    <div className="page">
      <BackButton
        onClick={() => {
          setResults([]);
        }}
      >
        Voltar para busca de sinergia
      </BackButton>
      <p>
        {results.length} transportadores encontrados ({date.total.toFixed(2)}{" "}
        segundos)
      </p>
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

      <IconContext.Provider value={{ color: "var(--JuntUs-Blue)", size: "19" }}>
        <h4 style={{ fontWeight: 500 }}>
          Comparar{" "}
          <span className="comparar">
            <HiInformationCircle />
          </span>
        </h4>
      </IconContext.Provider>

      <Pagination
        search={false}
        items={results}
        Component={BuscaCard}
        limit={5}
      />

      <div className="buttons-container">
        <Button type="primary">Comparar</Button>
      </div>
    </div>
  );
}

function Teste(props: any) {
  return <div>{props.n}</div>;
}

function BuscaCard(props: any) {
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/empresa/${props.empresaId}`);
  };

  const addToRede = async (e: any) => {
    e.preventDefault();
    console.log("teste");
    await MySwal.fire({
      title: <h3>CONVITE ENVIADO</h3>,
      showCloseButton: true,
      html: (
        <p>
          O transportador QB Logística recebeu a solicitação para fazer parte da
          sua rede
        </p>
      ),
    });
  };

  return (
    <div className="flex" style={{ alignItems: "center" }}>
      <CheckBox
        checked={isChecked}
        onChange={() => setIsChecked((state) => !state)}
      />
      <Card className="busca-card cursor-pointer">
        <div className="sinergia-icon">
          <div onClick={addToRede}>
            <IoShareSocialSharp />
          </div>
        </div>
        <div onClick={handleClick} className="flex">
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
