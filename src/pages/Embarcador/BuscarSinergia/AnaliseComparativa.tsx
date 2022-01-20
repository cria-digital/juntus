import BackButton from "components/common/BackButton";
import ProfileCard from "components/common/Cards/ProfileCard";

const tableData = [
  { name: "Veículos", value: "Carreta, bitruck, bitrem" },
  { name: "Carrocerias", value: "Grade baixa, sider" },
  { name: "Carro chefe", value: "Fracionado" },
];

export default function AnaliseComparativa() {
  return (
    <div className="page analise-comparativa">
      <BackButton to="/">Voltar para resultados da busca</BackButton>
      <div className="analise-list">
        {[1, 2, 3].map((item) => (
          <ProfileCard
            key={item}
            to={`/empresa/754`}
            name="QB LOGÍSTICA"
            big
            tableData={tableData}
          />
        ))}
      </div>
    </div>
  );
}
