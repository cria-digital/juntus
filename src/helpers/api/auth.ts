export const login = (email: string, password: string) => {
  const result = fetch(`${process.env.REACT_APP_API_URL}/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: email,
      password,
    }),
  }).then((res) => res.json());

  return result;
};
