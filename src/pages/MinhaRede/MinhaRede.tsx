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
    sinergias: rede.quantidadeSinergias,
    tableData: [
      {
        name: "Segmento",
        value: rede.segmento,
      },
      {
        name: "Veículos inbound",
        value: rede.veiculosInbound.join(", "),
      },
      {
        name: "Veículos outbound",
        value: rede.veiculosOutbound.join(", "),
      },
      {
        name: "Serviços requeridos",
        value: rede.servicos[0],
      },
      {
        name: "Licenças",
        value: rede.licencas.join(", "),
      },
      {
        name: "Volume",
        value: rede.volume,
      },
      {
        name: "Prazo de pagamento",
        value: rede.prazoPagamento,
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
