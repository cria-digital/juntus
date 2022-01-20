import BackButton from "components/common/BackButton";
import ProfileCard from "components/common/Cards/ProfileCard";
import { useLocation } from "react-router-dom";

export default function AnaliseComparativa() {
  const location = useLocation();

  if (location.state && (location.state as any).compararList)
    return (
      <div className="page analise-comparativa">
        <BackButton to="/" state={{ state: { section: "Buscar Sinergia" } }}>
          Voltar para resultados da busca
        </BackButton>
        <div className="analise-list">
          {JSON.parse((location.state as any).compararList).map((item) => (
            <ProfileCard
              key={item}
              to={`/empresa/${item.empresaId}`}
              name={item.nomeEmpresa}
              big
              tableData={[
                { name: "Veículos", value: item.veiculos.join(", ") },
                { name: "Carrocerias", value: item.carrocerias.join(", ") },
                { name: "Carro chefe", value: item.servicos[0] },
              ]}
            />
          ))}
        </div>
      </div>
    );

  return null;
}
