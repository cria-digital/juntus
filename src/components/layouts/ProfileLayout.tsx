import Button from "components/common/Button";
import ProfileHeader from "components/main/Profile/ProfileHeader";
import ProfileCards from "components/main/Profile/ProfileCards";
import RoutesItem from "components/common/RoutesItem";

export default function ProfileLayout({ state }) {
  return (
    <div className="profile">
      <ProfileHeader state={state} />
      <ProfileInfo state={state} />

      <div className="map">
        <Button type="secondary">Ver mais</Button>
      </div>

      <div className="profile-servicos">
        <h2>PRINCIPAIS SERVIÇOS REQUERIDOS</h2>

        <div>
          {state.servicos.map((servico) => (
            <span key={servico.id}>{servico.nome}</span>
          ))}
        </div>
      </div>

      <ProfileCards state={state} />
    </div>
  );
}

function ProfileInfo({ state }) {
  return (
    <div className="sub-info">
      <div className="profile-description">
        <p>{state.resumo}</p>
        <Button type="secondary">Ver mais</Button>
      </div>

      <div className="profile-list">
        <ul>
          <RoutesItem />
          <RoutesItem />
          <RoutesItem />
          <RoutesItem />
        </ul>
      </div>
    </div>
  );
}
