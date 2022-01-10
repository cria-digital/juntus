export const fetchVeiculos = async () => {
  // const response = await fetch(`${process.env.REACT_APP_API_URL}/veiculo`);
  // return await response.json();
  return [
    {
      id: 1,
      nome: "Bitrem",
      porteVeiculoId: 2,
    },
    {
      id: 2,
      nome: "Toco",
      porteVeiculoId: 5,
    },
    {
      id: 3,
      nome: "Carreta LS",
      porteVeiculoId: 3,
    },
  ];
};

export const fetchCarrocerias = async () => {
  // const response = await fetch(`${process.env.REACT_APP_API_URL}/carroceria`);
  // return await response.json();
  return [
    {
      id: 1,
      nome: "Sider",
    },
    {
      id: 2,
      nome: "Baú",
    },
    {
      id: 3,
      nome: "Grade Baixa",
    },
  ];
};

export const fetchServicos = async () => {
  // const response = await fetch(`${process.env.REACT_APP_API_URL}/servico`);
  // return await response.json();
  return [
    {
      id: 1,
      nome: "Crossdocking",
    },
    {
      id: 2,
      nome: "Distribuição last mile",
    },
    {
      id: 3,
      nome: "Rastreamento via satélite",
    },
  ];
};

export const fetchLicencas = async () => {
  // const response = await fetch(`${process.env.REACT_APP_API_URL}/licenca`);
  // return await response.json();
  return [
    {
      id: 1,
      nome: "Anvisa - Alimentos",
    },
    {
      id: 2,
      nome: "ISO 9001",
    },
    {
      id: 3,
      nome: "SASSMAQ",
    },
  ];
};

export const fetchUnidades = async () => {
  // const response = await fetch(`${process.env.REACT_APP_API_URL}/tipoUnidadeEmpresa`);
  // return await response.json();
  return [
    {
      id: 1,
      nome: "Matriz",
    },
    {
      id: 2,
      nome: "Garagem",
    },
    {
      id: 3,
      nome: "Galpão de armazenagem",
    },
    {
      id: 4,
      nome: "Ponto de apoio avançado",
    },
  ];
};

export const fetchPortes = async () => {
  // const response = await fetch(`${process.env.REACT_APP_API_URL}/porteEmpresa`);
  // return await response.json();
  return [
    {
      id: 1,
      nome: "Microempresa (ME)",
    },
    {
      id: 2,
      nome: "Empresa de Pequeno Porte (EPP)",
    },
    {
      id: 3,
      nome: "Empresa de Médio Porte",
    },
    {
      id: 4,
      nome: "Grande Empresa",
    },
  ];
};

export const fetchFaturamento = async () => {
  // const response = await fetch(`${process.env.REACT_APP_API_URL}/porteEmpresa`);
  // return await response.json();
  return [
    {
      id: 1,
      nome: "R$4.800,00 a R$50.000,00",
    },
    {
      id: 2,
      nome: "R$50.000,00 a R$100.000,00",
    },
    {
      id: 3,
      nome: "R$100.000,00 a R$200.000,00",
    },
    {
      id: 4,
      nome: "R$200.000,00 a R$300.000,00",
    },
  ];
};

export const fetchFuncionarios = async () => {
  // const response = await fetch(`${process.env.REACT_APP_API_URL}/porteEmpresa`);
  // return await response.json();
  return [
    {
      id: 1,
      nome: "até 9 funcionários",
    },
    {
      id: 2,
      nome: "de 10 até 49 funcionários",
    },
    {
      id: 3,
      nome: "de 50 a 99 funcionários",
    },
    {
      id: 4,
      nome: "100 ou mais funcionários",
    },
  ];
};

export const fetchVolumes = async () => {
  // const response = await fetch(`${process.env.REACT_APP_API_URL}/faixaVolumeTransporte`);
  // return await response.json();
  return [
    {
      id: 1,
      nome: "1 a 300",
    },
    {
      id: 2,
      nome: "300 a 1000",
    },
    {
      id: 3,
      nome: "1000 a 3000",
    },
    {
      id: 4,
      nome: "3000 a 10000",
    },
    {
      id: 5,
      nome: "acima 10000",
    },
  ];
};
