export const fetchProfile = async (id) => {
  const response = await fetch(process.env.REACT_APP_API_URL + "/empresa/" + id + "/perfil").then((res) => res.json());
  return {
    nomeEmpresa: "XPTO Trans",
    tempoCadastro: "quatro meses",
    exigenciaPGR:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a mollis ipsum. Aliquam sed ultricies velit. In viverra tincidunt vestibulum. Phasellus ullamcorper vitae lacus nec viverra. Praesent semper fringilla leo eu viverra. Morbi laoreet quam augue, a commodo dui tempor eu. Nunc interdum, massa vel vehicula consectetur, massa metus aliquam mauris, ac luctus erat lorem maximus ipsum. Praesent sed viverra magna. Cras in congue magna.",
    exigenciaTecnologica:
      "Morbi ac augue a lectus pellentesque dignissim vel eu mi. Aliquam auctor eget purus sit amet cursus. Nam accumsan, dolor a gravida vulputate, mi leo commodo leo, id semper quam arcu et urna. Aliquam a elementum enim, a sollicitudin augue. Aliquam facilisis eleifend neque ac dapibus. Mauris leo libero, tincidunt vitae mollis vel, porttitor nec nunc. Etiam ut est nisl. Duis a porta dui, eget interdum tellus. Sed at risus porttitor, tempus neque eget, suscipit mi. Nulla fringilla ex sit amet ligula laoreet, vitae aliquet nisi pretium. Duis rhoncus, felis vel maximus euismod, ante dui pretium justo, sed aliquet purus elit nec nisi.",
    sobre: "A empresa XPTO",
    resumo: "Fundada em 2016 no segmento de alimentos e bebidas, com cerca de 250 transportes ao mês. Com matriz em Belo Horizonte/MG, possui filiais em Contagem, São Paulo e Curitiba.",
  };
};

export const fetchServicos = async (id) => {
  // const response = await fetch(`${process.env.REACT_APP_API_URL}/servico`);
  // return await response.json();
  return [
    {
      id: 1,
      nome: "Crossdocking",
    },
    {
      id: 2,
      nome: "Distribuição last mile",
    },
    {
      id: 3,
      nome: "Rastreamento via satélite",
    },
  ];
};

export const fetchLicencas = async (id) => {
  // const response = await fetch(`${process.env.REACT_APP_API_URL}/licenca`);
  // return await response.json();
  return [
    {
      id: 1,
      nome: "Anvisa - Alimentos",
    },
    {
      id: 2,
      nome: "ISO 9001",
    },
    {
      id: 3,
      nome: "SASSMAQ",
    },
  ];
};

export const fetchVeiculos = async (id) => {
  // const response = await fetch(`${process.env.REACT_APP_API_URL}/veiculo`);
  // return await response.json();
  return [
    {
      id: 1,
      nome: "Bitrem",
      porteVeiculoId: 2,
    },
    {
      id: 2,
      nome: "Toco",
      porteVeiculoId: 5,
    },
    {
      id: 3,
      nome: "Carreta LS",
      porteVeiculoId: 3,
    },
  ];
};
