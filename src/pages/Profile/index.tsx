import "styles/pages/profile.scss";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  fetchLicencas,
  fetchProfile,
  fetchServicos,
  fetchVeiculos,
  fetchClientes,
} from "helpers/api/profile";
import ProfileLayout from "components/layouts/ProfileLayout";
import Loading from "components/common/Loading";
import Card from "components/common/Cards/Card";
import BackButton from "components/common/BackButton";

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

export default function Profile(props: any) {
  const { id } = useParams();
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const fetchData = async () => {
      const perfil = await fetchProfile(id);
      const servicos = await fetchServicos(id);
      const licencas = await fetchLicencas(id);
      const veiculos = await fetchVeiculos(id);
      const clientes = await fetchClientes(id);
      setState({
        ...perfil,
        servicos,
        licencas,
        veiculos,
        clientes,
        loading: false,
      });
    };

    fetchData();
  }, [id]);

  if (state.loading) return <Loading />;

  if (props.isProfile)
    return (
      <Card className="profile-page">
        <ProfileLayout charts={props.type !== "EMBARCADOR"} state={state} />
      </Card>
    );
  return (
    <>
      <BackButton to="/">Voltar para busca</BackButton>
      <ProfileLayout charts={props.type === "EMBARCADOR"} state={state} />
    </>
  );
}
