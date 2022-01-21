import Button from "components/common/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiInformationCircle } from "react-icons/hi";
import { IconContext } from "react-icons/lib";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import Pagination from "components/hocs/Pagination";
import BackButton from "components/common/BackButton";
import { Filters } from "./Filters";
import BuscaCard from "components/common/Cards/BuscaCard";

const contains = (value, arr) => {
  console.log("TAMANHO ", value);
  return value !== null ? arr.includes(value) : true;
};

export const MySwal = withReactContent(Swal);

const initialState = {
  veiculos: null,
  carrocerias: null,
  servicos: null,
  licencasId: null,
};

export default function Results({ inputs, results, ...props }) {
  const [filter, setFilter] = useState(false);
  const [filters, setFilters] = useState(initialState);

  const { setCompararList, compararList, setResults, date } = props;

  const navigate = useNavigate();

  const changeSelectField = (newValue: any, name: string) => {
    if (!newValue) return;

    setFilters({
      ...filters,
      [name]: newValue.value,
    });

    return newValue;
  };

  const closeFilters = () => {
    setFilters(initialState);
    setFilter(false);
  };

  const customFilterFunction = (setFiltered, items) => {
    if (!filter) return setFiltered(items);
    const results = [];

    for (let item of items) {
      console.log("ITEM ", item);
      if (
        !item.veiculos ||
        !item.carrocerias ||
        !item.servicos ||
        !item.licencasId
      )
        continue;
      if (
        contains(filters.veiculos, item.veiculosId) &&
        contains(filters.carrocerias, item.carroceriaId) &&
        contains(filters.servicos, item.servicosId) &&
        contains(filters.licencasId, item.licencasId)
      ) {
        results.push(item);
      }
    }

    setFiltered(results);
  };

  const comparar = () => {
    navigate("", {
      state: {
        section: "Análise Comparativa",
        compararList: JSON.stringify(compararList),
      },
    });
  };

  return (
    <div className="page">
      {setCompararList && (
        <BackButton
          onClick={() => {
            setResults([]);
          }}
        >
          Voltar para busca de sinergia
        </BackButton>
      )}
      {setCompararList ? (
        <>
          <p>
            {results.length} transportadores encontrados (
            {date.total.toFixed(2)} segundos)
          </p>
          <p>
            Filtre a busca por transportadores de acordo com os critérios
            desejados.{" "}
          </p>
        </>
      ) : null}

      {filter ? (
        <Filters
          changeSelectField={changeSelectField}
          inputs={inputs}
          setFilters={closeFilters}
        />
      ) : (
        <div className="buttons-container">
          <Button type="primary" onClick={() => setFilter(true)}>
            Filtrar
          </Button>
        </div>
      )}

      {setCompararList && (
        <IconContext.Provider
          value={{ color: "var(--JuntUs-Blue)", size: "19" }}
        >
          <h4 style={{ fontWeight: 500 }}>
            Comparar{" "}
            <span className="comparar">
              <HiInformationCircle />
            </span>
          </h4>
        </IconContext.Provider>
      )}

      <Pagination
        customFilterFunction={customFilterFunction}
        customFilters={[
          filters.carrocerias,
          filters.servicos,
          filters.veiculos,
          filters.licencasId,
          filter,
        ]}
        search={false}
        items={results}
        Component={props.Component}
        limit={5}
        itemProps={{ setCompararList }}
      />

      {setCompararList && (
        <div className="buttons-container">
          <Button
            type="primary"
            onClick={comparar}
            disabled={!compararList.length}
          >
            Comparar
          </Button>
        </div>
      )}
    </div>
  );
}
