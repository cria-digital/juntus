import Pagination from "components/hocs/Pagination";
import { IoMapSharp } from "react-icons/io5";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import Button from "components/common/Button";
import { useEffect, useState } from "react";
import {
  editarRota,
  excluirRota,
  fetchCarrocerias,
  fetchRotas,
  fetchVeiculos,
} from "helpers/api/rotas";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { fetchVolumes } from "helpers/api/sinergias";
import Input from "components/common/Input";
import Select from "components/common/Select";

const mySwal = withReactContent(Swal);

export default function MinhasRotas() {
  const [rotas, setRotas] = useState([]);
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

  const fetchData = async () => {
    const data = await fetchRotas();
    setRotas(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Pagination
      download
      limit={4}
      Component={Item}
      itemProps={{ refetch: fetchData }}
      items={rotas.map((rota) => ({
        ...rota,
        veiculosId: veiculos,
        carroceriasId: carrocerias,
        transportesMesId: transportesMes,
      }))}
    />
  );
}

function Item(props: any) {
  const [expanded, setExpanded] = useState(false);
  const { municipioOrigem, municipioDestino, estadoOrigem, estadoDestino } =
    props;

  const deleteRota = async () => {
    mySwal
      .fire({
        title: <h3>EDITAR</h3>,
        html: <p>Você tem certeza que deseja excluir essa rota?</p>,
        showCloseButton: true,
        confirmButtonText: "SIM",
      })
      .then(async (result) => {
        if (result) {
          const response = await excluirRota(props.id);
          if (response.status === 200) {
            props.refetch();
          }
        }
      });
  };

  console.log(props);

  const editRota = async () => {
    mySwal
      .fire({
        title: <h3>EDITAR</h3>,
        html: (
          <form>
            <div style={{ display: "flex" }}>
              <Input
                width="45%"
                type="text"
                label="Origem da carga"
                name="municipioOrigemId"
                id="municipioOrigemId"
                placeholder="Digite a região de origem"
                defaultValue={municipioOrigem}
                onChange={(e) => {
                  e.target.value = e.target.value;
                }}
                required
              />
              <Input
                width="45%"
                type="text"
                label="Destino da carga"
                defaultValue={municipioDestino}
                name="municipioDestinoId"
                id="municipioDestinoId"
                placeholder="Digite a região de destino"
                // onChange={({target} => {
                //   target.value = target.value;
                // })}
                required
              />
            </div>
            <div style={{ width: "45%", marginLeft: "2.5%" }}>
              <Select
                width="100%"
                type="select"
                label="Quantidade"
                name="transportesMes"
                id="transportesMes"
                placeholder="Selecione a faixa"
                onChange={(c) => c}
                required
                options={props.transportesMesId.map((i) => ({
                  id: i.id,
                  label: i.nome,
                }))}
              ></Select>
            </div>
          </form>
        ),
        showCloseButton: true,
        confirmButtonText: "EDITAR",
        preConfirm: () => {
          const municipioOrigemId = (
            Swal.getPopup().querySelector(
              "#municipioOrigemId"
            ) as HTMLInputElement
          ).value;
          const municipioDestinoId = (
            Swal.getPopup().querySelector(
              "#municipioDestinoId"
            ) as HTMLInputElement
          ).value;
          const transportesMesId = (
            Swal.getPopup().querySelector("#transportesMes") as HTMLInputElement
          ).value;

          console.log(municipioOrigemId, municipioDestinoId, transportesMesId);
          if (!municipioOrigemId || !municipioDestinoId) {
            Swal.showValidationMessage(`Por favor, insira de forma válida`);
          }
          return { municipioOrigemId, municipioDestinoId, transportesMesId };
        },
      })
      .then(async (result) => {
        console.log(result.value);
        await editarRota({
          id: props.id,
          municipioOrigemId: result.value.municipioOrigemId,
          municipioDestinoId: result.value.municipioDestinoId,
          transportesMesId: result.value.transportesMesId,
        });
      });
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
            <Button type="primary" onClick={editRota}>
              Editar
            </Button>
          </div>

          <div
            className="cursor-pointer"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
          </div>
        </div>
        {console.log(props.carrocerias, props.veiculos, props.transportesMes)}
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
