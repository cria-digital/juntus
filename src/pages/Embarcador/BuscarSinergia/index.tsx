import Card from "components/common/Cards/Card";
import Ratings from "components/common/Rating";
import * as api from "helpers/api/sinergias";
import SectionLayout from "components/layouts/SectionLayout";
import { fetchBuscas } from "helpers/api/buscarSinergia";
import { useEffect, useState } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import AnaliseComparativa from "./AnaliseComparativa";
import BuscarSinergia from "./BuscarSinergia";
import Results from "./Results";
import Loading from "components/common/Loading";

export default function BuscarSinergias() {
  return (
    <div>
      <SectionLayout
        sections={[
          {
            title: "Buscar Sinergia",
          },
          {
            title: "Análise Comparativa",
          },
          {
            title: "Buscas Salvas",
          },
        ]}
        render={{
          "Buscar Sinergia": <BuscarSinergia />,
          "Análise Comparativa": <AnaliseComparativa />,
          "Buscas Salvas": <BuscasSalvas />,
        }}
      />
    </div>
  );
}

function BuscasSalvas() {
  const [buscas, setBuscas] = useState([]);
  const [inputs, setInputs] = useState<any>({
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      const results = await fetchBuscas();
      setBuscas(results);

      const veiculos = await api.fetchVeiculos();
      const carrocerias = await api.fetchCarrocerias();
      const servicos = await api.fetchServicos();
      const licencas = await api.fetchLicencas();
      const volumes = await api.fetchVolumes();

      setInputs({
        veiculos,
        carrocerias,
        servicos,
        licencas,
        volumes,
        selos: [],
        requisitos: [],
      });
    };

    fetchData();
  }, []);

  if (inputs.loading) return <Loading />;
  console.log(inputs);
  return <Results results={buscas} inputs={inputs} Component={FilterCard} />;
}

function FilterCard(props) {
  const {
    nomeMunicipioOrigem,
    siglaEstadoOrigem,
    nomeMunicipioDestino,
    siglaEstadoDestino,
  } = props;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/", {
      state: {
        section: "Buscar Sinergia",
        filter: JSON.stringify(props),
      },
    });
  };

  const addToRede = (e: any) => {
    e.preventDefault();
    console.log("teste");
  };

  return (
    <Card className="busca-card">
      <div className="sinergia-icon">
        <div onClick={addToRede}>
          <BsFillBookmarkFill />
        </div>
      </div>
      <div className="cursor-pointer" onClick={handleClick}>
        <h3>{`${nomeMunicipioOrigem}, ${siglaEstadoOrigem} > ${nomeMunicipioDestino}, ${siglaEstadoDestino}`}</h3>
        <Ratings rating={4} />
        <p>
          <b>Veículos</b>: <span>{props.veiculos.join(", ")}</span>
        </p>
        <p>
          <b> Carrocerias</b> : <span>{props.carrocerias.join(", ")}</span>
        </p>
        <div className="tags">
          <p>Rastreador</p>
          <p>Certificado Registro Exército</p>
          <p>ISO 9001</p>
        </div>
      </div>
    </Card>
  );
}
