import { RiMedal2Line } from "react-icons/ri";
import { IconContext } from "react-icons/lib";
import { IoShareSocialSharp } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { VscGlobe } from "react-icons/vsc";
import Ratings from "components/common/Rating";
import placeholderImg from "assets/placeholder.png";

export default function ProfileHeader({ state }) {
  return (
    <div className="profile-info" style={{ marginBottom: 25 }}>
      <img src={placeholderImg} alt="profile" />
      <div className="profile-text" style={{ width: "90%" }}>
        <div className="profile-header">
          <div>
            <h1>
              {state.nomeEmpresa}
              <IconContext.Provider value={{ color: "var(--JuntUs-Blue)" }}>
                <RiMedal2Line />
              </IconContext.Provider>
            </h1>
            <span>Membro da JuntUs há {state.tempoCadastro}</span>
            <Ratings rating={3.5} />
          </div>
          <div className="profile-icons">
            <IconContext.Provider value={{ className: "profile-icon" }}>
              <VscGlobe />
              <BsTelephone />
              <AiOutlineMail />
              <IoShareSocialSharp />
            </IconContext.Provider>
          </div>
        </div>

        <p>{state.sobre}</p>
      </div>
    </div>
  );
}
