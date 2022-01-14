export const fetchVeiculos = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/veiculo`);
  return await response.json();
};

export const fetchCarrocerias = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/carroceria`);
  return await response.json();
};

export const fetchServicos = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/servico`);
  return await response.json();
};

export const fetchLicencas = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/licenca`);
  return await response.json();
};

export const fetchUnidades = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/tipoUnidadeEmpresa`
  );
  return await response.json();
};

export const fetchPortes = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/porteEmpresa`);
  return await response.json();
};

export const fetchFaturamento = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/porteEmpresa`);
  return await response.json();
};

export const fetchFuncionarios = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/porteEmpresa`);
  return await response.json();
};

export const fetchVolumes = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/faixaVolumeTransporte`
  );
  return await response.json();
};
