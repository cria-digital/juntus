import Button from "components/common/Button";
import Card from "components/common/Cards/Card";
import ProfileCard from "components/common/Cards/ProfileCard";
import Input from "components/common/Input";
import Ratings from "components/common/Rating";
import Select from "components/common/Select";
import Pagination from "components/hocs/Pagination";
import SectionLayout from "components/layouts/SectionLayout";
import AnaliseComparativa from "./AnaliseComparativa";
import BuscarSinergia from "./BuscarSinergia";

export default function Home() {
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

const busca = {
  title: "BELO HORIZONTE, MG > SÃO PAULO, SP",
  rating: 4.5,
  veiculos: "Bitrem, Bitruck, Carreta, e mais 4",
  carrocerias: "Baú, Caçamba, Cegonheiro",
  tags: ["ISO 9001", "Certificado Registro Exército", "Rastreador"],
};

const buscas = [busca, busca, busca, busca];

function BuscasSalvas() {
  return (
    <div className="mais-buscados">
      <p> Consulte aqui seus filtros customizados de busca de sinergia </p>
      <Pagination limit={5} search={false} items={buscas} Component={BuscaCard} />
    </div>
  );
}

function BuscaCard(props) {
  return (
    <Card className="busca-card">
      <div>
        <h3>{props.title}</h3>
        <Ratings rating={props.rating} />
        <p>
          <b>Veículos</b>: <span>{props.veiculos}</span>
        </p>
        <p>
          <b>Carrocerias</b>: <span>{props.carrocerias}</span>
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
