import Card from "components/common/Cards/Card";
import Ratings from "components/common/Rating";
import Pagination from "components/hocs/Pagination";
import SectionLayout from "components/layouts/SectionLayout";
import { fetchBuscas } from "helpers/api/buscarSinergia";
import { useEffect, useState } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import AnaliseComparativa from "./AnaliseComparativa";
import BuscarSinergia from "./BuscarSinergia";

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

  useEffect(() => {
    const fetchData = async () => {
      const results = await fetchBuscas();
      setBuscas(results);
    };

    fetchData();
  }, []);

  return (
    <div className="page">
      <p> Consulte aqui seus filtros customizados de busca de sinergia </p>
      <Pagination
        limit={5}
        search={false}
        items={buscas}
        Component={BuscaCard}
      />
    </div>
  );
}

function BuscaCard(props) {
  const {
    nomeMunicipioOrigem,
    siglaEstadoOrigem,
    nomeMunicipioDestino,
    siglaEstadoDestino,
  } = props;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/", {
      state: { filter: props },
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
      <div onClick={handleClick}>
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
