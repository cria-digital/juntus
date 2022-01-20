import placeholderImg from "assets/placeholder.png";
import Card from "components/common/Cards/Card";
import CheckBox from "components/common/Checkbox";
import Ratings from "components/common/Rating";
import { useState } from "react";
import { IoShareSocialSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

export const MySwal = withReactContent(Swal);

export default function BuscaCard(props: any) {
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/empresa/${props.empresaId}`);
  };

  console.log("PROPS ", props);

  const handleChange = () => {
    props.setCompararList((state: any[]) => {
      if (state.some((item: any) => item.id === props.id)) {
        setIsChecked(false);
        return state.filter((item) => item.id !== props.id);
      }

      setIsChecked(true);
      return state.length > 3 ? state : [...state, props];
    });
  };

  const addToRede = async (e: any) => {
    e.preventDefault();
    console.log("teste");
    await MySwal.fire({
      title: <h3>CONVITE ENVIADO</h3>,
      showCloseButton: true,
      html: (
        <p>
          O transportador QB Logística recebeu a solicitação para fazer parte da
          sua rede
        </p>
      ),
    });
  };

  return (
    <div className="flex" style={{ alignItems: "center" }}>
      <CheckBox checked={isChecked} onChange={handleChange} />
      <Card className="busca-card cursor-pointer">
        <div className="sinergia-icon">
          <div onClick={addToRede}>
            <IoShareSocialSharp />
          </div>
        </div>
        <div onClick={handleClick} className="flex">
          <img
            src={placeholderImg}
            height="80"
            width="80"
            style={{ margin: 25 }}
          />
          <div>
            <h3>{props.nomeEmpresa}</h3>
            <Ratings rating={3.5} />
            <p>
              <b>Rotas</b>: <span>{props.rotas.join(", ")}</span>
            </p>
            <p>
              <b>Veículos</b>: <span>{props.veiculos.join(", ")}</span>
            </p>
            <p>
              <b>Carrocerias</b>: <span>{props.carrocerias.join(", ")}</span>
            </p>

            <div className="tags">
              <p>Rastreador</p>
              <p>Certificado Registro Exército</p>
              <p>ISO 9001</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
