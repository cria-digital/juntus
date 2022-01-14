import ProfileCard from "components/common/Cards/ProfileCard";
import Loading from "components/common/Loading";
import Pagination from "components/hocs/Pagination";
import { fetchRedes } from "helpers/api/rede";
import { useEffect, useState } from "react";

const formatData = (data: any, type: string) => {
  if (type === "TRANSPORTADOR")
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
  if (type === "EMBARCADOR")
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

export default function MinhaRede({ type }: { type: string }) {
  const [redes, setRedes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchRedes();
      const formatedData = formatData(data, type);
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
