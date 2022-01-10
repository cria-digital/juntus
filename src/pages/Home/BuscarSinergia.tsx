import Button from "components/common/Button";
import Input from "components/common/Input";
import Loading from "components/common/Loading";
import Select from "components/common/Select";
import { fetchCarrocerias, fetchFaturamento, fetchFuncionarios, fetchLicencas, fetchPortes, fetchServicos, fetchUnidades, fetchVeiculos, fetchVolumes } from "helpers/api/sinergias";
import { useEffect, useState } from "react";
import Results from "./Results";

export default function BuscarSinergia() {
  const [save, setSave] = useState(false);
  const [data, setData] = useState({
    veiculosId: "",
    carroceriasId: "",
    volumes: "",
    municipioOrigemId: "",
    municipioDestinoId: "",
  });
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setResults([{ title: true }]);
  };

  if (inputs.loading) return <Loading />;
  if (results.length) return <Results inputs={inputs} />;
  if (!results.length)
    return (
      <div className="mais-buscados">
        <p>Encontre o transportador ideal para a sua demanda em menos de um minuto!</p>

        <form onSubmit={handleSubmit}>
          <div className="flex">
            <Input onChange={changeField} width="30%" placeholder="Digite a região de origem" type="text" label="Origem da carga" name="municipioOrigemId" value={data.municipioOrigemId} />
            <Input onChange={changeField} width="30%" placeholder="Digite a região de destino" type="text" label="Destino da carga" name="destino" value={data.municipioDestinoId} />

            <Select onChange={changeField} width="30%" placeholder="Volume desejado" label="Volume de transporte" name="volumes" value={data.volumes}>
              {inputs.volumes.map((volume: any) => (
                <option key={volume.id} value={volume.id}>
                  {volume.nome}
                </option>
              ))}
            </Select>
          </div>

          <div className="flex">
            <Select onChange={changeField} width="30%" placeholder="Selecione o(s) veículo(s)" label="Veículos" name="veiculos">
              {inputs.veiculos.map((data: any) => (
                <option key={data.id} value={data.id}>
                  {data.nome}
                </option>
              ))}
            </Select>
            <Select onChange={changeField} width="30%" placeholder="Selecione a(s) carroceria(s)" label="Carrocerias" name="Carrocerias">
              {inputs.carrocerias.map((data: any) => (
                <option key={data.id} value={data.id}>
                  {data.nome}
                </option>
              ))}
            </Select>

            <Select onChange={changeField} width="30%" placeholder="Selecione o(s) serviços" label="Serviços" name="servicos">
              {inputs.servicos.map((data: any) => (
                <option key={data.id} value={data.id}>
                  {data.nome}
                </option>
              ))}
            </Select>
          </div>

          <div className="flex">
            <Select onChange={changeField} width="30%" placeholder="Selecione o porte desejado" label="Porte da empresa" name="porte">
              {inputs.portes.map((data: any) => (
                <option key={data.id} value={data.id}>
                  {data.nome}
                </option>
              ))}
            </Select>
            <Select onChange={changeField} width="30%" placeholder="Selecione a faixa desejada" label="Faixa de faturamento" name="faixa_faturamento">
              {inputs.faturamentos.map((data: any) => (
                <option key={data.id} value={data.id}>
                  {data.nome}
                </option>
              ))}
            </Select>
            <Select onChange={changeField} width="30%" placeholder="Faixa de funcionários" label="Selecione a faixa desejada" name="faixa_func">
              {inputs.funcionarios.map((data: any) => (
                <option key={data.id} value={data.id}>
                  {data.nome}
                </option>
              ))}
            </Select>
          </div>

          <div className="flex">
            <Select onChange={changeField} width="30%" placeholder="Selecione uma ou mais licenças" label="Licenças" name="licencas">
              {inputs.licencas.map((data: any) => (
                <option key={data.id} value={data.id}>
                  {data.nome}
                </option>
              ))}
            </Select>
            <Select onChange={changeField} width="30%" placeholder="Selecione a unidade desejada" label="Tipo de Unidade" name="tipo_unidade">
              {inputs.unidades.map((data: any) => (
                <option key={data.id} value={data.id}>
                  {data.nome}
                </option>
              ))}
            </Select>
            <Input onChange={changeField} width="30%" placeholder="Digite o nome da cidade" type="text" label="Matriz/Filial" name="matriz" />
          </div>

          <div style={{ marginTop: 25 }}>
            <input onChange={changeField} id="salvar" type="checkbox" />
            <label htmlFor="salvar">Salvar filtro de Busca</label>
          </div>

          <div className="buttons-container">
            <Button type="secondary">Limpar</Button>
            <Button type="primary" submit>
              Buscar
            </Button>
          </div>
        </form>
      </div>
    );
}
