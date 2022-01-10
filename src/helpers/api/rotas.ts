const cadastrarExemplo = {
  id: null,
  municipioOrigemId: 1586,
  municipioDestinoId: 3245,
  transportesMes: null,
  carroceriasId: [1, 3, 4],
  veiculosId: [2, 3],
};

export const fetchRotas = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/rota`);
  const rotas = await response.json();

  return [
    {
      id: 5678,
      municipioOrigem: "Belo Horizonte",
      municipioDestino: "São Paulo",
      estadoOrigem: "MG",
      estadoDestino: "SP",
      carrocerias: ["Baú Frigorífico", "Sider", "Caçamba", "Grade Baixa", "Graneleiro", "Prancha"],
      veiculos: ["3/4", "Bitrem", "Bitruck", "Carreta", "Carreta LS"],
      transportesMes: 230,
    },
    {
      id: 5678,
      municipioOrigem: "Belo Horizonte",
      municipioDestino: "São Paulo",
      estadoOrigem: "MG",
      estadoDestino: "SP",
      carrocerias: ["Baú Frigorífico", "Sider", "Caçamba", "Grade Baixa", "Graneleiro", "Prancha"],
      veiculos: ["3/4", "Bitrem", "Bitruck", "Carreta", "Carreta LS"],
      transportesMes: 230,
    },
    {
      id: 5678,
      municipioOrigem: "Belo Horizonte",
      municipioDestino: "São Paulo",
      estadoOrigem: "MG",
      estadoDestino: "SP",
      carrocerias: ["Baú Frigorífico", "Sider", "Caçamba", "Grade Baixa", "Graneleiro", "Prancha"],
      veiculos: ["3/4", "Bitrem", "Bitruck", "Carreta", "Carreta LS"],
      transportesMes: 230,
    },
  ];
};

export const cadastrarRota = async (rota: any) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/rota`, {
    method: "POST",
    body: JSON.stringify(rota),
  });
  const result = await response.json();

  return result;
};

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
