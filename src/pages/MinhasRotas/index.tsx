import SectionLayout from "components/layouts/SectionLayout";
import { useLocation } from "react-router-dom";
import CadastrarNovaRota from "./CadastrarRota";
import MinhasRotas from "./MinhasRotas";

export default function Rotas() {
  const router = useLocation();

  return (
    <div className="rotas">
      <SectionLayout
        sections={[{ title: "Minhas Rotas" }, { title: "Cadastrar Nova Rota" }]}
        render={{
          "Minhas Rotas": <MinhasRotas />,
          "Cadastrar Nova Rota": <CadastrarNovaRota />,
        }}
      />
    </div>
  );
}
