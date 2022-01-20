import { fetchVeiculos } from "helpers/api/rotas";
import { fetchCarrocerias, fetchApolices } from "helpers/api/sinergias";

export const operacao1 = {
  inputs: [
    [
      {
        name: "cliente",
        label: "Principal cliente",
        placeholder: "Informe o nome da empresa",
        type: "text",
        width: "45%",
      },
      {
        name: "contato",
        label: "Nome do contato",
        placeholder: "Informe o nome do contato na empresa",
        type: "text",
        width: "45%",
      },
    ],
    [
      {
        name: "email",
        label: "E-mail do contato",
        placeholder: "Informe o e-mail do contato na empresa ",
        type: "email",
        width: "45%",
      },
      {
        name: "telefone",
        label: "Telefone",
        placeholder: "(31) 0000-0000",
        type: "text",
        width: "45%",
      },
    ],
    [
      {
        name: "anos",
        label: "Tempo de contrato (em anos)",
        placeholder: "Informe o tempo de contrato em anos",
        type: "number",
        width: "45%",
        left: "2.5%",
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

export const getFields1 = async () => {
  const veiculos = await fetchVeiculos();

  const veiculosData = Array.isArray(veiculos)
    ? veiculos.map((veiculo: any) => ({
        value: veiculo.id,
        label: veiculo.nome,
      }))
    : [];

  return {
    inputs: [
      [
        {
          select: true,
          name: "veiculo",
          label: "Tipo de veículo",
          placeholder: "O veículo desejado",
          type: "text",
          width: "45%",
          options: veiculosData,
        },
        {
          select: true,
          options: Array.from(Array(10).keys()).map((i: any) => ({
            value: i,
            label: i,
          })),
          name: "quantidade",
          label: "Quantidade",
          placeholder: "Selecione a quantidade desejada",
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
};

export const getFields2 = async () => {
  const carrocerias = await fetchCarrocerias();

  const carroceriasData = Array.isArray(carrocerias)
    ? carrocerias.map((carroceria: any) => ({
        value: carroceria.id,
        label: carroceria.nome,
      }))
    : [];

  return {
    inputs: [
      [
        {
          select: true,
          name: "carroceria",
          label: "Tipo de carroceria",
          placeholder: "Selecione a carroceria desejada",
          width: "45%",
          options: carroceriasData,
        },
        {
          select: true,
          options: Array.from(Array(10).keys()).map((i: any) => ({
            value: i,
            label: i,
          })),
          name: "quantidade",
          label: "Quantidade",
          placeholder: "Selecione a quantidade desejada",
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
};

export const getFields3 = async () => {
  const apolice = await fetchApolices();

  const apoliceData = Array.isArray(apolice)
    ? apolice.map((apolice: any) => ({
        value: apolice.id,
        label: apolice.nome,
      }))
    : [];

  return {
    inputs: [
      [
        {
          name: "seguradora",
          label: "Seguradora",
          placeholder: "Selecione o tipo de unidade",
          type: "text",
          width: "45%",
        },
        {
          name: "apolice",
          label: "Número da apólice",
          placeholder: "30000-000",
          type: "text",
          width: "45%",
        },
      ],
      [
        {
          name: "dataInicio",
          label: "Data de Início da Vigência do Plano da Seguradora",
          placeholder: "01/01/1900",
          type: "text",
          width: "45%",
        },
        {
          name: "dataInicio",
          label: "Data de Início da Vigência do Plano da Seguradora",
          placeholder: "01/12/1900",
          type: "text",
          width: "45%",
        },
      ],
      [
        {
          name: "limite",
          label: "Limite de cobertura",
          placeholder: "Informe o limite de cobertura do seguro",
          type: "number",
          width: "45%",
        },
        {
          name: "tipoApolice",
          label: "Tipo de apólice",
          placeholder: "Selecione o tipo de apólice",
          type: "number",
          width: "45%",
          select: true,
          options: apoliceData,
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
