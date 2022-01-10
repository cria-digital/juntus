export const fetchRedes = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/rede`);
  const redes = await response.json();

  return [
    {
      empresaId: 734,
      nomeEmpresa: "XPTO Transportes",
      quantidadeSinergias: 10,
      segmento: "Alimentos",
      veiculosInbound: ["Bitruck", "Carreta"],
      veiculosOutbound: ["3/4", "Toco"],
      servicos: ["Crossdocking", "Rastreamento via satélite", "Transporte DTA"],
      licencas: ["AATPP/IBAMA", "SASSMAQ", "Registro Polícia Federal", "Resíduos Classe 1"],
      volume: "250 transportes",
      prazoPagamento: "180 dias após contrato",
    },
    {
      empresaId: 456,
      nomeEmpresa: "Polar Transportes",
      quantidadeSinergias: 10,
      segmento: "Cosméticos",
      veiculosInbound: ["Truck", "VLC"],
      veiculosOutbound: ["Vanderléia", "Bitrem"],
      servicos: ["Distribuição last mile", "Subcontratação para transportadores digitais"],
      licencas: ["Anvisa - Cosméticos", "Anvisa - Medicamentos Controlados"],
      volume: "10 transportes",
      prazoPagamento: "15 dias após descarga",
    },
  ];
};

export const fetchConvidados = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/rede/convidados`);
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
