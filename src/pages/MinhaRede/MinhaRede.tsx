import ProfileCard from "components/common/Cards/ProfileCard";
import Loading from "components/common/Loading";
import Pagination from "components/hocs/Pagination";
import { fetchRedes } from "helpers/api/rede";
import { useEffect, useState } from "react";

const formatData = (data: any) => {
  return data.map((rede: any) => ({
    to: `/empresa/${rede.empresaId}`,
    id: rede.empresaId,
    name: rede.nomeEmpresa,
    sinergias: 10,
    tableData: [
      {
        name: "Fundação",
        value: rede.fundacao,
      },
      {
        name: "Matriz",
        value: rede.matriz,
      },
      {
        name: "Carro chefe",
        value: rede.carroChefe,
      },
      {
        name: "Volume de transportes",
        value: "200",
      },
    ],
  }));
};

export default function MinhaRede() {
  const [redes, setRedes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchRedes();
      const formatedData = formatData(data);
      setRedes(formatedData);
    };

    fetchData();
  }, []);

  if (!redes.length) return <Loading />;

  return (
    <Pagination
      containerProps={{
        className: "pagination-profiler",
      }}
      limit={4}
      Component={ProfileCard}
      items={redes}
    />
  );
}
