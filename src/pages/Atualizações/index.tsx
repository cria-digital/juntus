import withProtection from "components/hocs/withProtection";
import SectionLayout from "components/layouts/SectionLayout";
import MaisBuscados from "./MaisBuscados";
import MinhasVisitas from "./MinhasVisitas";

function Atualizações(props: any) {
  return (
    <div>
      <SectionLayout
        sections={[
          {
            title: "Mais Buscados",
          },
          {
            title: "Minhas Visitas",
          },
        ]}
        render={{
          "Mais Buscados": <MaisBuscados />,
          "Minhas Visitas": <MinhasVisitas />,
        }}
      />
    </div>
  );
}

export default Atualizações;
