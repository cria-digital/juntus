import Button from "components/common/Button";
import CheckBox from "components/common/Checkbox";
import Input from "components/common/Input";
import Loading from "components/common/Loading";
import Select from "components/common/Select";
import { fetchLocalidades } from "helpers/api/buscarSinergia";
import {
  cadastrarRota,
  fetchCarrocerias,
  fetchVeiculos,
} from "helpers/api/rotas";
import { fetchVolumes } from "helpers/api/sinergias";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const mySwal = withReactContent(Swal);

export default function CadastrarNovaRota() {
  const [veiculos, setVeiculos] = useState([]);
  const [carrocerias, setCarrocerias] = useState([]);
  const [transportesMes, setTransportesMes] = useState([]);

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

      const volumesData = await fetchVolumes();
      setTransportesMes(volumesData);
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

  const changeSelectField = (newValue: any) => {
    setData({
      ...data,
      transportesMes: newValue.value,
    });

    return newValue;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const result = await cadastrarRota(data);

    if (result && e.target.reset) {
      mySwal.fire({
        title: <h3>ROTA CADASTRADA</h3>,
        html: (
          <p> A rota informada foi cadastrada com sucesso em seu perfil! </p>
        ),
        showCloseButton: true,
      });
      e.target.reset();
    } else
      mySwal.fire({
        title: <h3>ERRO AO CADASTRAR</h3>,
        html: <p> "Tente novamente mais tarde"</p>,
        showCloseButton: true,
      });
  };

  const changeAsyncField = async (value: any, name: string) => {
    setData((state) => ({ ...state, [name]: value }));
    return value;
  };

  const loadOptions = async (
    inputValue: string,
    callback: (options: any) => void,
    select: any
  ) => {
    if (inputValue.length < 2) return;
    const result = await fetchLocalidades(inputValue);
    const options = Array.isArray(result)
      ? result.map((item) => ({
          id: item.municipioId || item.estadoId,
          label: item.nomeMunicipio
            ? `${item.nomeMunicipio}/${item.siglaEstado}`
            : item.nomeEstado,
        }))
      : [];
    callback(options);

    select.clearValue();
  };

  if (!veiculos.length || !carrocerias.length || !transportesMes.length)
    return <Loading />;

  return (
    <div className="cadastrar-nova-rota">
      <p>
        Encontre o transportador ideal para a sua demanda em menos de um minuto!
      </p>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex" }}>
          <Select
            width="45%"
            placeholder="Digite a região de origem"
            type="text"
            label="Origem da carga"
            name="municipioOrigemId"
            onChange={(value: any) =>
              changeAsyncField(value, "municipioOrigemId")
            }
            loadOptions={loadOptions}
            async={true}
            required
          />
          <Select
            width="45%"
            placeholder="Digite a região de destino"
            type="text"
            label="Destino da carga"
            name="municipioDestinoId"
            onChange={(value: any) =>
              changeAsyncField(value, "municipioDestinoId")
            }
            loadOptions={loadOptions}
            async={true}
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
            options={transportesMes.map((i) => ({
              value: i.id,
              label: i.nome,
            }))}
          ></Select>
        </div>

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
