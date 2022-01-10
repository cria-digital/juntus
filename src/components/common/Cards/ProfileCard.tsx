import Button from "../Button";
import Table from "../Table";
import Card from "./Card";

import { IconContext } from "react-icons";
import { IoShareSocialSharp } from "react-icons/io5";
import { RiMedal2Line } from "react-icons/ri";
import Ratings from "../Rating";
import { Link } from "react-router-dom";

import placeholderImg from "assets/placeholder.png";

export default function ProfileCard(props: any) {
  return (
    <Card className={"profile-card appear " + (props.big ? "big-profile" : "")} width={"30%"}>
      <div className="card-profile-container">
        <div className="share-icon">
          <IoShareSocialSharp />
        </div>

        <img src={placeholderImg} />
        <h2>
          {props.name}{" "}
          <IconContext.Provider value={{ color: "var(--JuntUs-Blue)" }}>
            <RiMedal2Line />
          </IconContext.Provider>
        </h2>
        <Ratings rating={3.5} />
        {props.sinergias && <span>{props.sinergias} sinergias com o seu perfil</span>}

        <Table data={props.tableData} />

        <Link to={props.to}>
          <Button type="primary">Ver Mais</Button>
        </Link>
      </div>
    </Card>
  );
}
