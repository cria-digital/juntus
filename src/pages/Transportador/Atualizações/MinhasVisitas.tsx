import Card from "components/common/Cards/Card";
import ProfileCard from "components/common/Cards/ProfileCard";
import chartImage from "assets/chart.png";
import LineChart from "components/common/Charts/LineChart";
import { useEffect, useState } from "react";
import { fetchVisitas } from "helpers/api/home";
import { fetchSinergia } from "helpers/api/buscarSinergia";

const formatData = (data: any) => {
  return data.map((rede: any) => ({
    to: `/empresa/${rede.empresaId}`,
    id: rede.empresaId,
    name: rede.nomeEmpresa,
    tableData: [
      {
        name: "Matriz",
        value: rede.rotas[0],
      },
      {
        name: "Veículos",
        value: rede.veiculos.join(", "),
      },

      {
        name: "Carrocerias",
        value: rede.carrocerias.join(", "),
      },
    ],
  }));
};

export default function MinhasVisitas(props: any) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchSinergia();
      setData(formatData(result));
    };
    fetchData();
  }, []);

  return (
    <div className="minhas-visitas" style={{ width: "95%" }}>
      <p style={{ marginLeft: 25 }}>
        40 embarcadores viram seu perfil nos últimos 20 dias
      </p>
      <Card width="80%">
        <h3>ÚLTIMAS VISITAS</h3>
        {/* <img src={chartImage} alt="chart" style={{ maxWidth: "90%" }} /> */}
        <LineChart />
      </Card>

      <div
        className="flex"
        style={{ flexWrap: "wrap", marginTop: 50, rowGap: 25 }}
      >
        {data.map((item: any) => (
          <ProfileCard {...item} />
        ))}
      </div>
    </div>
  );
}
