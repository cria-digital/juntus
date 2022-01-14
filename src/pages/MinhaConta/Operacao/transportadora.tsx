export const operacao1 = {
  inputs: [
    [
      {
        name: "cliente",
        label: "Principal cliente",
        placeholder: "Informe o nome da empresa",
        type: "text",
        width: "45%",
        required: true,
      },
      {
        name: "contato",
        label: "Nome do contato",
        placeholder: "Informe o nome do contato na empresa",
        type: "text",
        width: "45%",
        required: true,
      },
    ],
    [
      {
        name: "email",
        label: "E-mail do contato",
        placeholder: "Informe o e-mail do contato na empresa ",
        type: "email",
        width: "45%",
        required: true,
      },
      {
        name: "telefone",
        label: "Telefone",
        placeholder: "(31) 0000-0000",
        type: "text",
        width: "45%",
        required: true,
      },
    ],
    [
      {
        name: "anos",
        label: "Tempo de contrato (em anos)",
        placeholder: "Informe o tempo de contrato em anos",
        type: "number",
        width: "45%",
        required: true,
      },
    ],
  ],
  buttons: [
    {
      type: "secondary",
      name: "btn-1",
      children: <span>Excluir</span>,
    },
    {
      type: "primary",
      name: "btn-2",
      children: <span>Salvar</span>,
    },
  ],
};

export const operacao2 = {
  inputs: [
    [
      {
        name: "veiculo",
        label: "Tipo de veículo",
        placeholder: "O veículo desejado",
        type: "text",
        width: "45%",
        required: true,
      },
      {
        name: "quantidade",
        label: "Quantidade",
        placeholder: "Selecione a quantidade desejada",
        type: "text",
        width: "45%",
        required: true,
      },
    ],
  ],
  buttons: [
    {
      type: "secondary",
      name: "btn-1",
      children: <span>Excluir</span>,
    },
    {
      type: "primary",
      name: "btn-2",
      children: <span>Salvar</span>,
    },
  ],
};

export const operacao3 = {
  inputs: [
    [
      {
        name: "carroceria",
        label: "Tipo de carroceria",
        placeholder: "Selecione a carroceria desejada",
        type: "text",
        width: "45%",
        required: true,
      },
      {
        name: "quantidade",
        label: "Quantidade",
        placeholder: "Selecione a quantidade desejada",
        type: "text",
        width: "45%",
        required: true,
      },
    ],
  ],
  buttons: [
    {
      type: "secondary",
      name: "btn-1",
      children: <span>Excluir</span>,
    },
    {
      type: "primary",
      name: "btn-2",
      children: <span>Salvar</span>,
    },
  ],
};

export const operacao4 = {
  inputs: [
    [
      {
        name: "seguradora",
        label: "Seguradora",
        placeholder: "Selecione o tipo de unidade",
        type: "text",
        width: "45%",
        required: true,
      },
      {
        name: "apolice",
        label: "Número da apólice",
        placeholder: "30000-000",
        type: "text",
        width: "45%",
        required: true,
      },
    ],
    [
      {
        name: "dataInicio",
        label: "Data de Início da Vigência do Plano da Seguradora",
        placeholder: "01/01/1900",
        type: "text",
        width: "45%",
        required: true,
      },
      {
        name: "dataInicio",
        label: "Data de Início da Vigência do Plano da Seguradora",
        placeholder: "01/12/1900",
        type: "text",
        width: "45%",
        required: true,
      },
    ],
    [
      {
        name: "limite",
        label: "Limite de cobertura",
        placeholder: "Informe o limite de cobertura do seguro",
        type: "number",
        width: "45%",
        required: true,
      },
      {
        name: "tipoApolice",
        label: "Tipo de apólice",
        placeholder: "Selecione o tipo de apólice",
        type: "number",
        width: "45%",
        required: true,
      },
    ],
  ],
  buttons: [
    {
      type: "secondary",
      name: "btn-1",
      children: <span>Excluir</span>,
    },
    {
      type: "primary",
      name: "btn-2",
      children: <span>Salvar</span>,
    },
  ],
};
