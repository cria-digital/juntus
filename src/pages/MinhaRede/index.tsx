import Button from "components/common/Button";
import Input from "components/common/Input";
import SectionLayout from "components/layouts/SectionLayout";
import Convidados from "./Convidados";

import MinhaRede from "./MinhaRede";

export default function Rede(props: { type: string }) {
  return (
    <div>
      <SectionLayout
        sections={[{ title: "Minha Rede" }, { title: "Convidados" }]}
        render={{
          "Minha Rede": <MinhaRede type={props.type} />,
          Convidados: <Convidados type={props.type} />,
        }}
      />
    </div>
  );
}
