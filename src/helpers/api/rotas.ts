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
  console.log(rotas);
  return rotas;
};

export const cadastrarRota = async (rota: any) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/rota`, {
    method: "POST",
    body: JSON.stringify(rota),
  });
  const result = await response.json();
  console.log(result);
  return result;
};

export const editarRota = async (rota: any) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/rota`, {
    method: "PUT",
    body: JSON.stringify(rota),
  });
  const result = await response.json();
  console.log(result);
  return result;
};

export const excluirRota = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/rota`, {
    method: "DELETE",
    body: JSON.stringify(cadastrarExemplo),
  });
  const result = await response.json();
  console.log(result);
  return result;
};

export const fetchVeiculos = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/veiculo`);
  const veiculos = await response.json();
  console.log(veiculos);
  return veiculos;
};

export const fetchCarrocerias = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/carroceria`);
  const carrocerias = await response.json();
  console.log(carrocerias);
  return carrocerias;
};
