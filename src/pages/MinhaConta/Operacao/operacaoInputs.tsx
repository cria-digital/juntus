export const operacao = {
  inputs: [
    [
      {
        name: "faixa_de_funcionarios",
        label: "Tipo de veículo inbound",
        placeholder: "Grade baixa, graneleiro",
        type: "text",
        width: "45%",
        required: true,
      },
      {
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
        placeholder: "Informe as exigências até 500 caracteres",
        type: "text",
        width: "45%",
        required: true,
      },
      {
        name: "natureza_juridica",
        label: "Exigências tecnológicas",
        placeholder: "Informe as exigências até 500 caracteres",
        type: "text",
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
        type: "text",
        width: "95%",
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

const checkboxes1 = [
  [
    "AATPP / IBAMA",
    "AFT",
    "Alvará Anual Polícia Civil",
    "Anvisa - Alimentos",
    "Anvisa - Cosméticos",
    "SASSMAQ",
    "SUATRANS",
  ],
  [
    "Anvisa - Medicamentos",
    "Anvisa - Medicamentos Controlados",
    "Anvisa - Outros",
    "Anvisa - Produtos para Saúde",
    "Anvisa - Saneantes",
    "RNTRC / ANTT",
    "TPP / FATMA",
  ],
  [
    "APPCI",
    "Certificado Registro Exército",
    "ISO 9001",
    "Registro Polícia Federal",
    "Resíduos Classe 1",
    "Resíduos Classe 2",
  ],
];

const checkboxes2 = [
  [
    "Armazenagem em galpão",
    "Crossdocking",
    "Distribuição last mile",
    "Locação de veículo dedicado",
    "Parqueamento",
  ],
  [
    "Projetos especiais",
    "Rastreamento via satélite",
    "Subcontratação para outro transportador",
    "Subcontratação para transportadores digitais",
    "Transporte DTA",
  ],
  ["Transporte fracionado", "Transporte lotação", "Transportes com AET"],
];

export default function Checkboxes() {
  return (
    <div>
      <div>
        <p>Licenças de transportes de cargas desejadas</p>
        <div className="flex j-even">
          {checkboxes1.map((col, index) => (
            <div className="checkbox-container">
              {col.map((item) => {
                return (
                  <div key={item}>
                    <input type="checkbox" />
                    <label>{item}</label>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div>
        <p>Serviços requeridos</p>
        <div className="flex j-even">
          {checkboxes2.map((col, index) => (
            <div className="checkbox-container">
              {col.map((item) => {
                return (
                  <div key={item}>
                    <input type="checkbox" />
                    <label>{item}</label>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
