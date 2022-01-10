export const empresa1 = {
  inputs: [
    [
      {
        name: "faixa_de_funcionarios",
        label: "Faixa de funcionários",
        placeholder: "Selecione a quantidade média",
        type: "text",
        width: "45%",
        required: true,
      },
      {
        name: "natureza_juridica",
        label: "Natureza Jurídica",
        placeholder: "Informe a média de faturamento",
        type: "text",
        width: "45%",
        required: true,
      },
    ],
    [
      {
        name: "porte",
        label: "Porte da empresa",
        placeholder: "Informe o porte da empresa",
        type: "text",
        width: "45%",
        required: true,
      },
      {
        name: "capital",
        label: "Capital Social",
        placeholder: "Informe o capital social",
        type: "text",
        width: "45%",
        required: true,
      },
    ],
  ],
  buttons: [
    {
      type: "secondary",
      name: "btn",
      children: <span>Excluir</span>,
    },
    {
      type: "primary",
      name: "btn",
      children: <span>Salvar</span>,
    },
  ],
};

export const empresa2 = {
  inputs: [
    [
      {
        name: "tipo_unidade",
        label: "Tipo de unidade",
        placeholder: "Selecione o tipo de unidade",
        type: "text",
        width: "45%",
        required: true,
      },
      {
        name: "cep",
        label: "CEP",
        placeholder: "30000-000",
        type: "text",
        width: "45%",
        required: true,
      },
    ],
    [
      {
        name: "municipio",
        label: "Município",
        placeholder: "Belo Horizonte",
        type: "text",
        width: "45%",
        required: true,
      },
      {
        name: "bairro",
        label: "Bairro",
        placeholder: "Centro",
        type: "text",
        width: "45%",
        required: true,
      },
    ],
    [
      {
        name: "logradouro",
        label: "Logradouro",
        placeholder: "Av. Amazonas",
        type: "text",
        width: "45%",
        required: true,
      },
      {
        name: "numero",
        label: "Número",
        placeholder: "000",
        type: "text",
        width: "20%",
        required: true,
      },
      {
        name: "complemento",
        label: "Complemento",
        placeholder: "Apto 000",
        type: "text",
        width: "20%",
        required: true,
      },
    ],
  ],
  buttons: [
    {
      type: "secondary",
      name: "btn",
      children: <span>Excluir</span>,
    },
    {
      type: "primary",
      name: "btn",
      children: <span>Salvar</span>,
    },
  ],
};

export const empresa3 = {
  inputs: [
    [
      {
        name: "nome_contato",
        label: "Nome do contato",
        placeholder: "Nome do contato",
        type: "text",
        width: "45%",
        required: true,
      },
      {
        name: "telefone_comercial",
        label: "Telefone comercial",
        placeholder: "(31) 3000-0000",
        type: "text",
        width: "45%",
        required: true,
      },
    ],
    [
      {
        name: "email",
        label: "E-mail",
        placeholder: "contato@email.com.br",
        type: "text",
        width: "45%",
        required: true,
      },
      {
        name: "cargo",
        label: "Cargo",
        placeholder: "Informe o capital social",
        type: "text",
        width: "45%",
        required: true,
      },
    ],
    [
      {
        name: "setor",
        label: "Setor",
        placeholder: "Setor",
        type: "text",
        width: "45%",
        required: true,
      },
      {
        name: "unidade",
        label: "Unidade",
        placeholder: "Informe a unidade",
        type: "text",
        width: "45%",
        required: true,
      },
    ],
  ],
  buttons: [
    {
      type: "secondary",
      name: "btn",
      children: <span>Excluir</span>,
    },
    {
      type: "primary",
      name: "btn",
      children: <span>Salvar</span>,
    },
  ],
};
