import Button from "components/common/Button";
import Select from "components/common/Select";

const initialState = {
  veiculos: [],
  carrocerias: [],
  servicos: [],
  volumes: [],
  selos: [],
  avaliacao: [],
  requisitos: [],
};

export function Filters({ inputs, setFilters, changeSelectField }) {
  return (
    <>
      <div className="flex">
        <Select
          width="22%"
          placeholder="Filtre os veículos desejados"
          label="Tipo de veículo"
          name="veiculos"
          onChange={(value: any) => changeSelectField(value, "veiculos")}
          options={inputs.veiculos.map((data: any) => ({
            value: data.id,
            label: data.nome,
          }))}
        />
        <Select
          width="22%"
          placeholder="Filtre pelas carrocerias "
          label="Tipo de carroceria"
          name="carrocerias"
          onChange={(value: any) => changeSelectField(value, "carrocerias")}
          options={inputs.carrocerias.map((data: any) => ({
            value: data.id,
            label: data.nome,
          }))}
        />
        <Select
          width="22%"
          placeholder="Filtre pelas licenças"
          label="Licenças"
          name="licencas"
          onChange={(value: any) => changeSelectField(value, "licencas")}
          options={inputs.licencas.map((data: any) => ({
            value: data.id,
            label: data.nome,
          }))}
        />

        <Select
          width="22%"
          placeholder="Requisitos necessários"
          label="Filtre pelos requisitos"
          name="requisitos"
          onChange={(value: any) => changeSelectField(value, "requisitos")}
          options={inputs.requisitos.map((data: any) => ({
            value: data.id,
            label: data.nome,
          }))}
        />
      </div>
      <div className="flex" style={{ width: "50%" }}>
        <Select
          width="44%"
          placeholder="Filtre pelo selo JuntUs"
          label="Selo Juntos"
          name="selos"
          onChange={(value: any) => changeSelectField(value, "selos")}
          options={inputs.selos.map((data: any) => ({
            value: data.id,
            label: data.nome,
          }))}
          left="3%"
        />
        <Select
          width="44%"
          placeholder="Filtre pela avaliação"
          label="Avaliação"
          name="avaliacao"
          onChange={(value: any) => changeSelectField(value, "avaliacao")}
          options={[1, 2, 3, 4, 5].map((data: any) => ({
            value: data,
            label: data,
          }))}
          left="3%"
        />
      </div>
      <div className="buttons-container">
        <Button type="secondary" onClick={() => setFilters(initialState)}>
          Limpar
        </Button>
      </div>
    </>
  );
}
