import Button from "components/common/Button";
import Input from "components/common/Input";
import Loading from "components/common/Loading";
import Select from "components/common/Select";
import { fetchSinergia, saveFilter } from "helpers/api/buscarSinergia";
import {
  fetchCarrocerias,
  fetchFaturamento,
  fetchFuncionarios,
  fetchLicencas,
  fetchPortes,
  fetchServicos,
  fetchUnidades,
  fetchVeiculos,
  fetchVolumes,
} from "helpers/api/sinergias";
import { IFilter } from "helpers/interfaces";
import { useEffect, useState } from "react";
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
};

export default function BuscarSinergia() {
  const [save, setSave] = useState<boolean>(false);
  const [data, setData] = useState<IFilter>(initialState);
  const [inputs, setInputs] = useState<any>({
    loading: true,
  });

  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const veiculos = await fetchVeiculos();
      const carrocerias = await fetchCarrocerias();
      const servicos = await fetchServicos();
      const licencas = await fetchLicencas();
      const unidades = await fetchUnidades();
      const portes = await fetchPortes();
      const faturamentos = await fetchFaturamento();
      const funcionarios = await fetchFuncionarios();
      const volumes = await fetchVolumes();

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
      });
    };
    fetchData();
  }, []);

  const changeField = (e: any) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (save) {
      await saveFilter(data);
    }

    const results = await fetchSinergia(data);

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

  if (inputs.loading) return <Loading />;

  if (results.length) return <Results results={results} inputs={inputs} />;

  return (
    <div className="page">
      <p>
        Encontre o transportador ideal para a sua demanda em menos de um minuto!
      </p>

      <form onSubmit={handleSubmit}>
        <div className="flex">
          <Input
            onChange={changeField}
            width="30%"
            placeholder="Digite a região de origem"
            type="text"
            label="Origem da carga"
            name="nomeMunicipioOrigem"
            value={data.municipioOrigemId}
          />
          <Input
            onChange={changeField}
            width="30%"
            placeholder="Digite a região de destino"
            type="text"
            label="Destino da carga"
            name="nomeMunicipioDestino"
            value={data.municipioDestinoId}
          />

          <Select
            multiple
            onChange={(value: any) => changeSelectField(value, "volumes", true)}
            options={getOptions(inputs.volumes)}
            width="30%"
            placeholder="Volume desejado"
            label="Volume de transporte"
            name="volumes"
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
          />
          <Select
            onChange={(value: any) => changeSelectField(value, "faturamentos")}
            options={getOptions(inputs.faturamentos)}
            width="30%"
            placeholder="Selecione a faixa desejada"
            label="Faixa de faturamento"
            name="faixa_faturamento"
          />
          <Select
            onChange={(value: any) => changeSelectField(value, "funcionarios")}
            options={getOptions(inputs.funcionarios)}
            width="30%"
            placeholder="Faixa de funcionários"
            label="Selecione a faixa desejada"
            name="faixa_func"
          />
        </div>

        <div className="flex">
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
          />
          <Select
            onChange={(value: any) => changeSelectField(value, "unidades")}
            options={getOptions(inputs.unidades)}
            width="30%"
            placeholder="Selecione a unidade desejada"
            label="Tipo de Unidade"
            name="tipo_unidade"
          />
          <Input
            onChange={changeField}
            width="30%"
            placeholder="Digite o nome da cidade"
            type="text"
            label="Matriz/Filial"
            name="matriz"
          />
        </div>

        <div style={{ marginTop: 25 }}>
          <input
            checked={save}
            onChange={() => setSave(!save)}
            id="salvar"
            type="checkbox"
          />
          <label htmlFor="salvar">Salvar filtro de Busca</label>
        </div>

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
