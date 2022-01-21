import Button from "components/common/Button";
import BuscaCard from "components/common/Cards/BuscaCard";
import CheckBox from "components/common/Checkbox";
import Input from "components/common/Input";
import Loading from "components/common/Loading";
import Select from "components/common/Select";
import {
  fetchLocalidades,
  fetchSinergia,
  saveFilter,
} from "helpers/api/buscarSinergia";
import * as api from "helpers/api/sinergias";
import { IFilter } from "helpers/interfaces";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Results from "./Results";

const initialState: IFilter = {
  filtroId: null,
  veiculosId: [],
  licencasId: [],
  servicosId: [],
  carroceriasId: [],

  veiculos: [],
  carrocerias: [],
  servicos: [],
  volumes: [],

  municipioOrigemId: null,
  estadoOrigemId: null,
  municipioDestinoId: null,
  estadoDestinoId: null,

  nomeMunicipioOrigem: "",
  nomeMunicipioDestino: "",
  siglaEstadoOrigem: "",
  siglaEstadoDestino: "",
  matriz: "",
};

const getDefaultValue = (data) => ({
  carroceriasId: data.carroceriaId,
  ...data,
});

export default function BuscarSinergia() {
  const [save, setSave] = useState<boolean>(false);
  const [compararList, setCompararList] = useState<any[]>([]);
  const [options, setOptions] = useState<any>({
    nomeMunicipioDestino: [],
    nomeMunicipioOrigem: [],
  });

  const [inputs, setInputs] = useState<any>({
    loading: true,
  });

  const filterState = useRef(false);

  const location = useLocation();

  if (location.state && (location.state as any).filter)
    filterState.current = JSON.parse((location.state as any).filter);

  const [data, setData] = useState<IFilter>(
    typeof filterState.current === "object"
      ? getDefaultValue(filterState.current)
      : initialState
  );

  const [results, setResults] = useState([]);

  const date = useRef({
    start: new Date().getTime(),
    end: null,
    total: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const veiculos = await api.fetchVeiculos();
      const carrocerias = await api.fetchCarrocerias();
      const servicos = await api.fetchServicos();
      const licencas = await api.fetchLicencas();
      const unidades = await api.fetchUnidades();
      const portes = await api.fetchPortes();
      const faturamentos = await api.fetchFaturamento();
      const funcionarios = await api.fetchFuncionarios();
      const volumes = await api.fetchVolumes();

      setInputs({
        veiculos,
        carrocerias,
        servicos,
        licencas,
        unidades,
        portes,
        faturamentos,
        funcionarios,
        volumes,
        selos: [],
        requisitos: [],
      });
    };
    fetchData();
  }, []);

  const changeField = (e: any) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const changeAsyncField = async (value: any, name: string) => {
    setData((state) => ({ ...state, [name]: value }));
    return value;
  };

  const handleSubmit = async (e: any) => {
    date.current.start = new Date().getTime();

    e.preventDefault();
    if (save) {
      await saveFilter(data);
    }

    const results = await fetchSinergia(data);
    date.current.end = new Date().getTime();

    date.current.total = (date.current.end - date.current.start) / 1000;

    setResults(results);
  };

  const cleanFilter = () => setData(initialState);

  const getOptions = (array: any[]) =>
    array.map((item) => ({
      label: item.nome,
      value: item.id,
    }));

  const changeSelectField = (
    newValue: any,
    name: string,
    multiple: boolean = false
  ) => {
    if (!newValue) return;

    if (multiple) {
      setData({
        ...data,
        [name]: newValue.map((item: any) => item.value),
      });
    } else {
      setData({
        ...data,
        [name]: newValue.value,
      });
    }

    return newValue;
  };

  const loadOptions = async (
    inputValue: string,
    callback: (options: any) => void
  ) => {
    const result = await fetchLocalidades(inputValue);
    const options = Array.isArray(result)
      ? result.map((item) => ({
          id: item.municipioId || item.estadoId,
          label: item.nomeMunicipio || item.nomeEstado,
        }))
      : [];
    callback(options);
  };

  if (inputs.loading) return <Loading />;

  const getDefaultValuesSelect = (property: string) => {
    if (!data[property] || !data[property + "Id"]) return [];
    return data[property + "Id"].map((item, i) => ({
      label: data[property][i],
      value: item,
    }));
  };

  if (results.length)
    return (
      <Results
        results={results}
        date={date.current}
        setResults={setResults}
        inputs={inputs}
        setCompararList={setCompararList}
        compararList={compararList}
        Component={BuscaCard}
      />
    );

  return (
    <div className="page">
      <p>
        Encontre o transportador ideal para a sua demanda em menos de um minuto!
      </p>

      <form onSubmit={handleSubmit}>
        <div className="flex">
          <Select
            options={options.nomeMunicipioDestino}
            width="30%"
            placeholder="Digite a região de origem"
            type="text"
            label="Origem da carga"
            name="nomeMunicipioOrigem"
            defaultValue={data.municipioOrigemId}
            onChange={(value: any) =>
              changeAsyncField(value, "nomeMunicipioOrigem")
            }
            loadOptions={loadOptions}
            async={true}
          />
          <Select
            options={options.nomeMunicipioDestino}
            width="30%"
            placeholder="Digite a região de destino"
            type="text"
            label="Destino da carga"
            name="nomeMunicipioDestino"
            defaultValue={data.municipioDestinoId}
            onChange={(value: any) =>
              changeAsyncField(value, "municipioDestinoId")
            }
            loadOptions={loadOptions}
            async={true}
          />

          <Select
            multiple
            onChange={(value: any) => changeSelectField(value, "volumes", true)}
            options={getOptions(inputs.volumes)}
            width="30%"
            placeholder="Volume desejado"
            label="Volume de transporte"
            name="volumes"
            defaultValue={getDefaultValuesSelect("volumes")}
          />
        </div>

        <div className="flex">
          <Select
            multiple
            onChange={(value: any) =>
              changeSelectField(value, "veiculosId", true)
            }
            options={getOptions(inputs.veiculos)}
            width="30%"
            placeholder="Selecione o(s) veículo(s)"
            label="Veículos"
            name="veiculosId"
            defaultValue={getDefaultValuesSelect("veiculos")}
          />
          <Select
            multiple
            onChange={(value: any) =>
              changeSelectField(value, "carroceriasId", true)
            }
            options={getOptions(inputs.carrocerias)}
            width="30%"
            placeholder="Selecione a(s) carroceria(s)"
            label="Carrocerias"
            name="carroceriasId"
            defaultValue={getDefaultValuesSelect("carrocerias")}
          />

          <Select
            multiple
            onChange={(value: any) =>
              changeSelectField(value, "servicos", true)
            }
            options={getOptions(inputs.servicos)}
            width="30%"
            placeholder="Selecione o(s) serviços"
            label="Serviços"
            name="servicos"
            defaultValue={getDefaultValuesSelect("servicos")}
          />
        </div>

        <div className="flex">
          <Select
            onChange={(value: any) => changeSelectField(value, "porte")}
            options={getOptions(inputs.portes)}
            width="30%"
            placeholder="Selecione o porte desejado"
            label="Porte da empresa"
            name="porte"
            defaultValue={getDefaultValuesSelect("portes")}
          />
          <Select
            onChange={(value: any) => changeSelectField(value, "faturamentos")}
            options={getOptions(inputs.faturamentos)}
            width="30%"
            placeholder="Selecione a faixa desejada"
            label="Faixa de faturamento"
            name="faixa_faturamento"
            defaultValue={getDefaultValuesSelect("faturamentos")}
          />
          <Select
            onChange={(value: any) => changeSelectField(value, "funcionarios")}
            options={getOptions(inputs.funcionarios)}
            width="30%"
            placeholder="Faixa de funcionários"
            label="Faixa de funcionarios"
            name="faixa_func"
            defaultValue={getDefaultValuesSelect("funcionarios")}
          />
        </div>

        <div className="flex" style={{ marginBottom: 25 }}>
          <Select
            multiple
            onChange={(value: any) =>
              changeSelectField(value, "licencasId", true)
            }
            options={getOptions(inputs.licencas)}
            width="30%"
            placeholder="Selecione uma ou mais licenças"
            label="Licenças"
            name="licencas"
            defaultValue={getDefaultValuesSelect("licencas")}
          />
          <Select
            onChange={(value: any) => changeSelectField(value, "unidades")}
            options={getOptions(inputs.unidades)}
            width="30%"
            placeholder="Selecione a unidade desejada"
            label="Tipo de Unidade"
            name="tipo_unidade"
            defaultValue={getDefaultValuesSelect("unidades")}
          />
          <Input
            onChange={changeField}
            width="30%"
            placeholder="Digite o nome da cidade"
            type="text"
            label="Matriz/Filial"
            name="matriz"
            defaultValue={data.matriz}
          />
        </div>

        <CheckBox
          checked={save}
          onChange={() => setSave(!save)}
          name="salvar"
          label="Salvar filtro de Busca"
        />

        <div className="buttons-container">
          <Button type="secondary" onClick={cleanFilter}>
            Limpar
          </Button>
          <Button type="primary" submit>
            Buscar
          </Button>
        </div>
      </form>
    </div>
  );
}
