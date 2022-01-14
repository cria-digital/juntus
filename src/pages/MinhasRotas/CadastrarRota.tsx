import Button from "components/common/Button";
import Input from "components/common/Input";
import Select from "components/common/Select";
import {
  cadastrarRota,
  fetchCarrocerias,
  fetchVeiculos,
} from "helpers/api/rotas";
import React, { useEffect, useState } from "react";

const options = Array.from(Array(10).keys()).map((i) => ({
  id: i + 1,
  label: i + 1,
}));

export default function CadastrarNovaRota() {
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

  const changeField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const changeSelectField = (newValue: any) => {
    setData({
      ...data,
      transportesMes: newValue.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const result = await cadastrarRota(data);

    if (result && e.target.reset) e.target.reset();
    else alert("Erro ao cadastrar rota");
  };

  return (
    <div className="cadastrar-nova-rota">
      <p>
        Encontre o transportador ideal para a sua demanda em menos de um minuto!
      </p>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex" }}>
          <Input
            width="45%"
            type="text"
            label="Origem da carga"
            name="municipioOrigemId"
            placeholder="Digite a região de origem"
            onChange={changeField}
            required
          />
          <Input
            width="45%"
            type="text"
            label="Destino da carga"
            name="municipioDestinoId"
            placeholder="Digite a região de destino"
            onChange={changeField}
            required
          />
        </div>
        <div style={{ width: "45%", marginLeft: "2.5%" }}>
          <Select
            width="100%"
            type="select"
            label="Quantidade de transportes ao mês"
            name="transportesMes"
            placeholder="Selecione a faixa"
            onChange={changeSelectField}
            required
            options={options}
          ></Select>
        </div>

        <div>
          <p>Carrocerias *</p>
          {carrocerias.map(({ nome, id }) => (
            <div className="rota-checkbox" key={id}>
              <input
                id={nome}
                type="checkbox"
                checked={data.carroceriasId.includes(id)}
                onChange={() => handleCheckbox(id, "carroceriasId")}
              />
              <label htmlFor={nome}>{nome}</label>
            </div>
          ))}
        </div>

        <div>
          <p>Veículos *</p>
          {veiculos.map(({ nome, id }) => (
            <div key={id} className="rota-checkbox">
              <input
                id={nome}
                type="checkbox"
                checked={data.veiculosId.includes(id)}
                onChange={() => handleCheckbox(id, "veiculosId")}
              />
              <label htmlFor={nome}>{nome}</label>
            </div>
          ))}
        </div>

        <div className="buttons-container">
          <Button type="secondary">Importar</Button>
          <Button type="primary" submit>
            Cadastrar
          </Button>
        </div>
      </form>
    </div>
  );
}
