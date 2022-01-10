import Pagination from "components/hocs/Pagination";
import { IoMapSharp } from "react-icons/io5";
import { BsChevronCompactDown } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import Button from "components/common/Button";
import { useEffect, useState } from "react";
import { fetchRotas } from "helpers/api/rotas";

export default function MinhasRotas() {
  const [rotas, setRotas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchRotas();
      setRotas(data);
    };

    fetchData();
  }, []);

  return <Pagination limit={4} Component={Item} items={rotas} />;
}

function Item(props: any) {
  const [expanded, setExpanded] = useState(false);
  const { municipioOrigem, municipioDestino, estadoOrigem, estadoDestino } = props;

  return (
    <IconContext.Provider value={{ size: "27", color: "var(--JuntUs-Blue)" }}>
      <div className="rota-item">
        <IoMapSharp />
        <h4 style={{ textTransform: "uppercase" }}>
          {municipioOrigem}, {estadoOrigem} {" > "} {municipioDestino}, {estadoDestino}
        </h4>

        <div className="buttons">
          <Button type="secondary">Excluir</Button>
          <Button type="primary">Editar</Button>
        </div>

        <div onClick={() => setExpanded(!expanded)}>
          <BsChevronCompactDown />
        </div>
      </div>
    </IconContext.Provider>
  );
}
