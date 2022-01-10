import SectionLayout from "components/layouts/SectionLayout";
import Profile from "pages/Profile";
import Empresa from "./Empresa/Empresa";
import Operacao from "./Operacao/Operacao";
import Usuario from "./Usuario";

export default function MinhaConta(props: any) {
  return (
    <SectionLayout
      sections={[
        { title: "Usuário" },
        { title: "Empresa" },
        { title: "Operação" },
        { title: "Perfil" },
      ]}
      render={{
        Usuário: <Usuario />,
        Empresa: <Empresa />,
        Operação: <Operacao />,
        Perfil: <Profile isProfile />,
      }}
    />
  );
}
