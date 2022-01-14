export const fetchRedes = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/rede`);
  const redes = await response.json();
  console.log(redes);
  return redes;
};

export const fetchConvidados = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/rede/convidados`
  );
  const convidados = await response.json();
  console.log(convidados);
  return convidados;
};

export const sendRequest = async (data: any) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/rede/convite/enviar`,
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  ).then((res) => res.json());

  console.log(response);
  return response;
};
