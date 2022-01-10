export const cadastrarUsuario = async (usuario) => {
  const response = await fetch(process.env.REACT_APP_API_URL + "/usuario", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  }).then((res) => res.json());
  return response;
};
