import CheckBox from "components/common/Checkbox";
import {
  fetchServicos,
  fetchLicencas,
  fetchVolumes,
} from "helpers/api/sinergias";
import { useEffect, useState } from "react";

export const getOperation = async () => {
  const veiculos = await fetchServicos();
  const volumes = await fetchVolumes();

  const veiculosData = Array.isArray(veiculos)
    ? veiculos.map((item) => ({ value: item.id, label: item.nome }))
    : [];

  const volumesData = Array.isArray(volumes)
    ? volumes.map((item) => ({ value: item.id, label: item.nome }))
    : [];

  return {
    inputs: [
      [
        {
          select: true,
          options: veiculosData,
          name: "faixa_de_funcionarios",
          label: "Tipo de veículo inbound",
          placeholder: "Grade baixa, graneleiro",
          type: "text",
          width: "45%",
          required: true,
        },
        {
          select: true,
          options: veiculosData,
          name: "natureza_juridica",
          label: "Tipo de veículo outbound",
          placeholder: "Sider, baú",
          type: "text",
          width: "45%",
          required: true,
        },
      ],
      [
        {
          name: "porte",
          label: "Responsável pelo seguro das cargas",
          placeholder: "contato@email.com.br",
          type: "text",
          width: "45%",
        },
        {
          name: "capital",
          label: "Prazo de pagamento",
          placeholder: "Informe o prazo",
          type: "text",
          width: "20%",
        },
        {
          select: true,
          options: volumesData,
          name: "capital",
          label: "Volume transporte mês",
          placeholder: "Selecione a faixa",
          type: "text",
          width: "20%",
        },
      ],
      [
        {
          name: "faixa_de_funcionarios",
          label: "Exigências básicas PGR",
          maxLength: 500,
          placeholder: "Informe as exigências até 500 caracteres",
          type: "textarea",
          height: "150px",
          width: "45%",
          required: true,
        },
        {
          name: "natureza_juridica",
          label: "Exigências tecnológicas",
          maxLength: 500,
          placeholder: "Informe as exigências até 500 caracteres",
          type: "textarea",
          height: "150px",
          width: "45%",
          required: true,
        },
      ],
      [
        {
          name: "natureza_juridica",
          label: "O que a empresa busca em um transportador?",
          placeholder:
            "Exemplo: buscamos transportadores com foco em trabalhos no longo prazo, com intuito de desenvolvermos parcerias... até 500 caracteres",
          type: "textarea",
          height: "150px",
          width: "95%",
          maxLength: 500,
          required: true,
        },
      ],
    ],
    buttons: [
      {
        type: "primary",
        name: "btn",
        children: <span>Salvar</span>,
      },
    ],
  };
};

// const checkboxes1 = [
//   [
//     "AATPP / IBAMA",
//     "AFT",
//     "Alvará Anual Polícia Civil",
//     "Anvisa - Alimentos",
//     "Anvisa - Cosméticos",
//     "SASSMAQ",
//     "SUATRANS",
//   ],
//   [
//     "Anvisa - Medicamentos",
//     "Anvisa - Medicamentos Controlados",
//     "Anvisa - Outros",
//     "Anvisa - Produtos para Saúde",
//     "Anvisa - Saneantes",
//     "RNTRC / ANTT",
//     "TPP / FATMA",
//   ],
//   [
//     "APPCI",
//     "Certificado Registro Exército",
//     "ISO 9001",
//     "Registro Polícia Federal",
//     "Resíduos Classe 1",
//     "Resíduos Classe 2",
//   ],
// ];

// const checkboxes2 = [
//   [
//     "Armazenagem em galpão",
//     "Crossdocking",
//     "Distribuição last mile",
//     "Locação de veículo dedicado",
//     "Parqueamento",
//   ],
//   [
//     "Projetos especiais",
//     "Rastreamento via satélite",
//     "Subcontratação para outro transportador",
//     "Subcontratação para transportadores digitais",
//     "Transporte DTA",
//   ],
//   ["Transporte fracionado", "Transporte lotação", "Transportes com AET"],
// ];

const Checkbox = (props) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <CheckBox
      {...props}
      onChange={() => setChecked((state) => !state)}
      checked={isChecked}
    />
  );
};

export default function Checkboxes() {
  const [licencas, setLicencas] = useState([]);
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const licencasData = await fetchLicencas();
      const servicosData = await fetchServicos();

      setLicencas(licencasData);
      setServicos(servicosData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <p>Licenças de transportes de cargas desejadas</p>
        <div className="flex j-even check-col">
          {licencas.map((licenca, index) => (
            <div key={licenca.id}>
              <Checkbox label={licenca.nome} name={licenca.id} />
            </div>
          ))}
        </div>
      </div>

      <div>
        <p>Serviços requeridos</p>
        <div className="flex j-even check-col">
          {servicos.map((servico, index) => (
            <div key={servico.id}>
              <Checkbox label={servico.nome} name={servico.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
