export const fetchSinergia = async (filter: any = {}) => {
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

export const fetchLocalidades = async (local: string) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/localidade/${local}`
  );
  const result = await response.json();
  console.log(result);

  return result || [];
};
