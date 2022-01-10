export const fetchVisitas = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/visita`);
  const visitas = await response.json();

  return visitas;
};
