import BackButton from "components/common/BackButton";
import SectionLayout from "components/layouts/SectionLayout";
import { PoliticaDeSeguranca } from "texts";

export default function Seguranca({ type }: { type: string }) {
  return (
    <div className="page">
      <BackButton to="/">
        Voltar para{" "}
        {type === "EMBARCADOR" ? "busca de sinergia" : "atualizações"}
      </BackButton>
      <SectionLayout
        sections={[{ title: "POLÍTICA DE PRIVACIDADE E SEGURANÇA" }]}
        render={{
          "POLÍTICA DE PRIVACIDADE E SEGURANÇA": (
            <p
              style={{ marginTop: 100 }}
              dangerouslySetInnerHTML={{
                __html: PoliticaDeSeguranca,
              }}
            ></p>
          ),
        }}
      />
    </div>
  );
}
