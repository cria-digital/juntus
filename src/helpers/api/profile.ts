export const fetchProfile = async (id: number | string) => {
  const response = await fetch(
    process.env.REACT_APP_API_URL + "/empresa/" + id + "/perfil"
  ).then((res) => res.json());
  return response;
};

export const fetchServicos = async (id: number | string) => {
  const response = await fetch(
    process.env.REACT_APP_API_URL + "/empresa/" + id + "/servicos"
  ).then((res) => res.json());
  return response;
};

export const fetchLicencas = async (id: number | string) => {
  const response = await fetch(
    process.env.REACT_APP_API_URL + "/empresa/" + id + "/licencas"
  ).then((res) => res.json());
  return response;
};

export const fetchVeiculos = async (id: number | string) => {
  const response = await fetch(
    process.env.REACT_APP_API_URL + "/empresa/" + id + "/veiculos"
  ).then((res) => res.json());
  return response;
};

export const fetchClientes = async (id: number | string) => {
  const response = await fetch(
    process.env.REACT_APP_API_URL + "/empresa/" + id + "/clientes"
  ).then((res) => res.json());
  return response;
};

export const editProfile = async (data: any) => {
  const response = await fetch(
    process.env.REACT_APP_API_URL + "/empresa/cadastro",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  ).then((res) => res.json());

  return response;
};
