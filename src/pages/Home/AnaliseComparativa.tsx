import ProfileCard from "components/common/Cards/ProfileCard";

export default function AnaliseComparativa() {
  return (
    <div className="mais-buscados analise-comparativa">
      <div className="analise-list">
        <ProfileCard name="sinergia" big tableData={[{ title: "sça", value: "" }]} to="/sla" />
        <ProfileCard name="sinergia" big tableData={[{ title: "sça", value: "" }]} to="/sla" />
        <ProfileCard name="sinergia" big tableData={[{ title: "sça", value: "" }]} to="/sla" />
        <ProfileCard name="sinergia" big tableData={[{ title: "sça", value: "" }]} to="/sla" />
        <ProfileCard name="sinergia" big tableData={[{ title: "sça", value: "" }]} to="/sla" />
        <ProfileCard name="sinergia" big tableData={[{ title: "sça", value: "" }]} to="/sla" />
      </div>
    </div>
  );
}
