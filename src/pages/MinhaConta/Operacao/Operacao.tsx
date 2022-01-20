import InputCard from "components/common/Cards/InputCard";
import Loading from "components/common/Loading";
import { useEffect, useState } from "react";
import Checkboxes, { getOperation } from "./embarcadora";
import {
  operacao1,
  getFields1,
  getFields2,
  getFields3,
} from "./transportadora";

const operacaoCheckboxes = {
  inputs: [],
  buttons: [
    {
      type: "secondary",
      name: "btn-1",
      children: <span>Upload de Licenças</span>,
    },
    {
      type: "primary",
      name: "btn",
      children: <span>Salvar</span>,
    },
  ],
};

export default function Operacao(props: any) {
  const [operacao, setOperacao] = useState<any>(false);
  const [transportadora, setTransportadora] = useState<any>(false);

  useEffect(() => {
    if (props.type === "EMBARCADOR") {
      const fetchData = async () => {
        const result = await getOperation();

        setOperacao(result);
      };

      fetchData();
    } else {
      const fetchData = async () => {
        const operacao2 = await getFields1();
        const operacao3 = await getFields2();
        const operacao4 = await getFields3();

        const result = [
          {
            data: operacao1,
            add: "Adicionar mais clientes",
          },
          {
            data: operacao2,
            add: "Adicionar mais veículos",
          },
          {
            data: operacao3,
            add: "Adicionar mais carrocerias",
          },
          {
            data: operacao4,
            add: false,
          },
        ];

        console.log(result);

        setTransportadora(result);
      };

      fetchData();
    }
  }, [props.type]);

  if (props.type === "EMBARCADOR") {
    if (!operacao) return <Loading />;
    return (
      <InputCard noChildren {...operacao}>
        <Checkboxes />
      </InputCard>
    );
  }

  if (!transportadora) return <Loading />;

  return (
    <div className="page">
      {transportadora.map((operacao, i) => {
        return (
          <InputCard
            key={i}
            setInputs={setTransportadora}
            add={operacao.add}
            item={operacao}
            {...operacao.data}
          />
        );
      })}
      <InputCard noChildren {...operacaoCheckboxes}>
        <Checkboxes />
      </InputCard>
    </div>
  );
}
