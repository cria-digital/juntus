export const fetchProfile = async (id) => {
  const response = await fetch(
    process.env.REACT_APP_API_URL + "/empresa/" + id + "/perfil"
  ).then((res) => res.json());
  return response;
};

export const fetchServicos = async (id) => {
  const response = await fetch(
    process.env.REACT_APP_API_URL + "/empresa/" + id + "/servicos"
  ).then((res) => res.json());
  return response;
};

export const fetchLicencas = async (id) => {
  const response = await fetch(
    process.env.REACT_APP_API_URL + "/empresa/" + id + "/licencas"
  ).then((res) => res.json());
  return response;
};

export const fetchVeiculos = async (id) => {
  const response = await fetch(
    process.env.REACT_APP_API_URL + "/empresa/" + id + "/veiculos"
  ).then((res) => res.json());
  return response;
};
