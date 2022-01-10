export const fetchRedes = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/rede`);
  const redes = await response.json();

  return [
    {
      empresaId: 734,
      nomeEmpresa: "QB LOGÍSTICA",
      quantidadeSinergias: 10,
      fundação: "1997",
      matriz: "Belo Horizonte",
      carroChefe: "Lotação",
      volumeDeTransportes: "200",
    },
    {
      empresaId: 734,
      nomeEmpresa: "QB LOGÍSTICA",
      quantidadeSinergias: 10,
      fundação: "1997",
      matriz: "Belo Horizonte",
      carroChefe: "Lotação",
      volumeDeTransportes: "200",
    },
    {
      empresaId: 734,
      nomeEmpresa: "QB LOGÍSTICA",
      quantidadeSinergias: 10,
      fundação: "1997",
      matriz: "Belo Horizonte",
      carroChefe: "Lotação",
      volumeDeTransportes: "200",
    },
    {
      empresaId: 734,
      nomeEmpresa: "QB LOGÍSTICA",
      quantidadeSinergias: 10,
      fundação: "1997",
      matriz: "Belo Horizonte",
      carroChefe: "Lotação",
      volumeDeTransportes: "200",
    },
  ];
};

export const fetchConvidados = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/rede/convidados`
  );
  const convidados = await response.json();

  return [
    {
      email: "gerson@polartransportes.com",
      nome: "Gerson",
      pendente: true,
    },
    {
      email: "adenilson@xpto.com",
      nome: "Adenilson",
      pendente: false,
    },
  ];
};
