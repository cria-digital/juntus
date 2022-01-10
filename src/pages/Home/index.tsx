import Button from "components/common/Button";
import ProfileCard from "components/common/Cards/ProfileCard";
import Input from "components/common/Input";
import Select from "components/common/Select";
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
        ]}
        render={{
          "Buscar Sinergia": <BuscarSinergia />,
          "Análise Comparativa": <AnaliseComparativa />,
        }}
      />
    </div>
  );
}
