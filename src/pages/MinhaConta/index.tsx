import SectionLayout from "components/layouts/SectionLayout";
import Empresa from "./Empresa/Empresa";
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
        Operação: <div />,
        Perfil: <div />,
      }}
    />
  );
}
