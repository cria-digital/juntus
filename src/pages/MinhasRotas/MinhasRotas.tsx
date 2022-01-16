import Pagination from "components/hocs/Pagination";
import { IoMapSharp } from "react-icons/io5";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import Button from "components/common/Button";
import { useEffect, useState } from "react";
import { excluirRota, fetchRotas } from "helpers/api/rotas";

export default function MinhasRotas() {
  const [rotas, setRotas] = useState([]);

  const fetchData = async () => {
    const data = await fetchRotas();
    setRotas(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Pagination
      limit={4}
      Component={Item}
      itemProps={{ refetch: fetchData }}
      items={rotas}
    />
  );
}

function Item(props: any) {
  const [expanded, setExpanded] = useState(false);
  const { municipioOrigem, municipioDestino, estadoOrigem, estadoDestino } =
    props;

  const deleteRota = async () => {
    const response = await excluirRota(props.id);
    if (response.status === 200) {
      props.refetch();
    }
  };

  return (
    <IconContext.Provider value={{ size: "27", color: "var(--JuntUs-Blue)" }}>
      <div className="rota-item">
        <div>
          <IoMapSharp />
          <h4 style={{ textTransform: "uppercase" }}>
            {municipioOrigem}, {estadoOrigem} {" > "} {municipioDestino},{" "}
            {estadoDestino}
          </h4>

          <div className="buttons">
            <Button type="secondary" onClick={deleteRota}>
              Excluir
            </Button>
            <Button type="primary">Editar</Button>
          </div>

          <div
            className="cursor-pointer"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
          </div>
        </div>
        {expanded && (
          <div className="expanded">
            <ul>
              <li>Carrocerias: {props.carrocerias.join(", ")} </li>
              <li>Veículos: {props.veiculos.join(", ")} </li>
              <li>Transportes ao mês: {props.transportesMes} </li>
            </ul>
          </div>
        )}
      </div>
    </IconContext.Provider>
  );
}
