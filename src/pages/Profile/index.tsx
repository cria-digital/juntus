import "styles/pages/profile.scss";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchLicencas, fetchProfile, fetchServicos, fetchVeiculos } from "helpers/api/profile";
import ProfileLayout from "components/layouts/ProfileLayout";
import Loading from "components/common/Loading";
import Card from "components/common/Cards/Card";

const initialState = {
  loading: true,
  nomeEmpresa: "",
  tempoCadastro: "",
  exigenciaPGR: "",
  exigenciaTecnologica: "",
  sobre: "",
  resumo: "",
  servicos: [],
  licencas: [],
  veiculos: [],
};

export default function Profile(props) {
  const { id } = useParams();
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const fetchData = async () => {
      const perfil = await fetchProfile(id);
      const servicos = await fetchServicos(id);
      const licencas = await fetchLicencas(id);
      const veiculos = await fetchVeiculos(id);
      setState({ ...perfil, servicos, licencas, veiculos, loading: false });
    };

    fetchData();
  }, [id]);

  if (state.loading) return <Loading />;

  if (props.isProfile)
    return (
      <Card className="profile-page">
        <ProfileLayout state={state} />
      </Card>
    );
  return <ProfileLayout state={state} />;
}
