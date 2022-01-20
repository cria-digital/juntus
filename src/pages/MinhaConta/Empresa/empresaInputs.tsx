import { fetchFuncionarios, fetchUnidades } from "helpers/api/sinergias";

export const getTransportadoraFields = async () => {
  const faixa = await fetchFuncionarios();

  const data = Array.isArray(faixa)
    ? faixa.map((item) => ({ value: item.id, label: item.nome }))
    : [];

  return {
    inputs: [
      [
        {
          select: true,
          name: "faixa_de_funcionarios",
          label: "Faixa de funcionários",
          placeholder: "Selecione a quantidade média",
          type: "text",
          width: "45%",
          required: true,
          options: data,
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
        mask: "(99) 99999-9999",
        width: "45%",
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
      },
    ],
    [
      {
        name: "setor",
        label: "Setor",
        placeholder: "Setor",
        type: "text",
        width: "45%",
      },
      {
        name: "unidade",
        label: "Unidade",
        placeholder: "Informe a unidade",
        type: "text",
        width: "45%",
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

export const getFields = async () => {
  const unidades = await fetchUnidades();

  const data = Array.isArray(unidades)
    ? unidades.map((item) => ({ value: item.id, label: item.nome }))
    : [];

  return {
    inputs: [
      [
        {
          select: true,
          name: "tipo_unidade",
          label: "Tipo de unidade",
          placeholder: "Selecione o tipo de unidade",
          type: "text",
          width: "45%",
          required: true,
          options: data,
          async: true,
        },
        {
          name: "cep",
          label: "CEP",
          placeholder: "30000-000",
          type: "text",
          width: "45%",
          mask: "99999-999",
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
};
