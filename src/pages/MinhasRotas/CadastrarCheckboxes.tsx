import { useEffect, useState } from "react";
import { fetchCarrocerias, fetchVeiculos } from "helpers/api/rotas";
import CheckBox from "components/common/Checkbox";

export function CadastrarCheckboxes() {
  const [veiculos, setVeiculos] = useState([]);
  const [carrocerias, setCarrocerias] = useState([]);

  const [data, setData] = useState({
    carroceriasId: [],
    veiculosId: [],
    transportesMes: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const veiculosData = await fetchVeiculos();
      setVeiculos(veiculosData);

      const carroceriasData = await fetchCarrocerias();
      setCarrocerias(carroceriasData);
    };

    fetchData();
  }, []);

  const handleCheckbox = (id: number, target: string) => {
    if (!data[target].includes(id)) {
      setData((state) => ({
        ...state,
        [target]: [...state[target], id],
      }));
    } else {
      setData((state) => ({
        ...state,
        [target]: state[target].filter((item) => item !== id),
      }));
    }
  };

  return (
    <>
      <div>
        <p>Carrocerias *</p>
        {carrocerias.map(({ nome, id }) => (
          <div style={{ margin: "10px 0px" }}>
            <CheckBox
              checked={data.carroceriasId.includes(id)}
              id={nome}
              type="checkbox"
              name={nome}
              label={nome}
              key={id}
              onChange={() => handleCheckbox(id, "carroceriasId")}
            />
          </div>
        ))}
      </div>

      <div>
        <p>Veículos *</p>
        {veiculos.map(({ nome, id }) => (
          <div style={{ margin: "10px 0px" }}>
            <CheckBox
              checked={data.veiculosId.includes(id)}
              id={nome}
              type="checkbox"
              name={nome}
              label={nome}
              key={id}
              onChange={() => handleCheckbox(id, "veiculosId")}
            />
          </div>
        ))}
      </div>
    </>
  );
}
