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
