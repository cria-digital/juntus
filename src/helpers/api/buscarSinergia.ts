import { IFilter } from "helpers/interfaces";

const Defaultfilter = {
  filtroId: -88415089.2164048,
  municipioOrigemId: 63081202,
  estadoOrigemId: -32488711,
  municipioDestinoId: 84568138,
  estadoDestinoId: -36230139,
  veiculosId: [-8960419, 53709100],
  carroceriasId: [-9506792, -84063969],
  licencasId: [43740830, -29927755],
  servicosId: [71065520, 90234675],
};

export const fetchSinergia = async (filter: any = Defaultfilter) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/sinergia/buscar`,
    { method: "POST", body: JSON.stringify(filter) }
  );
  const result = await response.json();
  console.log(result);

  return [result];
};

export const saveFilter = async (filter: any) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/sinergia/filtro`,
    { method: "POST", body: JSON.stringify(filter) }
  );
  const result = await response.json();

  console.log(result);

  return result;
};

export const fetchBuscas = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/sinergia/filtro`
  );
  const result = await response.json();
  console.log(result);

  return result;
};