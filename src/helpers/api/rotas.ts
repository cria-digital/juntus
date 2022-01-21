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

  return rotas;
};

export const cadastrarRota = async (rota: any) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/rota`, {
    method: "POST",
    body: JSON.stringify(rota),
  });
  const result = await response.json();

  return result;
};

export const editarRota = async (rota: any) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/rota`, {
    method: "PUT",
    body: JSON.stringify(rota),
  });
  const result = await response.json();

  return result;
};

export const excluirRota = async (id: number) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/rota/` + id.toString(),
    {
      method: "DELETE",
    }
  );

  return response;
};

export const fetchVeiculos = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/veiculo`);
  const veiculos = await response.json();

  return veiculos;
};

export const fetchCarrocerias = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/carroceria`);
  const carrocerias = await response.json();

  return carrocerias;
};
