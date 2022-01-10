export const cadastarSelo = (data: any) => {
  const result = fetch(`${process.env.REACT_APP_API_URL}/selo`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

  return result;
};
