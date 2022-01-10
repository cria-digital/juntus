import ProfileCard from "components/common/Cards/ProfileCard";

const tableData = [
  { name: "Veículos", value: "Carreta, bitruck, bitrem" },
  { name: "Carrocerias", value: "Grade baixa, sider" },
  { name: "Carro chefe", value: "Fracionado" },
];

export default function AnaliseComparativa() {
  return (
    <div className="mais-buscados analise-comparativa">
      <div className="analise-list">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <ProfileCard
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
