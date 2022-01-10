import { fetchConvidados } from "helpers/api/rede";
import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function Usuarios() {
  const [convidados, setConvidados] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchConvidados();
      setConvidados(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <h3>CONVITES ENVIADOS</h3>
      {!convidados.length ? (
        <Loading />
      ) : (
        convidados.map((convidado) => (
          <Item {...convidado} key={convidado.email} />
        ))
      )}
    </>
  );
}

function Item(props: any) {
  return (
    <div className="rede-item appear">
      <div className="rede-info">
        <p>{props.email}</p>
        <p>{props.nome}</p>
      </div>
      {props.pendente && <div className="pendente">Pendente</div>}
    </div>
  );
}
