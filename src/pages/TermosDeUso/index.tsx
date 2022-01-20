import BackButton from "components/common/BackButton";
import SectionLayout from "components/layouts/SectionLayout";
import { TermosDeUso } from "texts";

export default function Termos({ type }: { type: string }) {
  return (
    <div className="page">
      <BackButton to="/">
        Voltar para{" "}
        {type === "EMBARCADOR" ? "busca de sinergia" : "atualizações"}
      </BackButton>
      <SectionLayout
        sections={[{ title: "TERMOS E CONDIÇÕES DE USO" }]}
        render={{
          "TERMOS E CONDIÇÕES DE USO": (
            <p
              style={{ marginTop: 100 }}
              dangerouslySetInnerHTML={{
                __html: TermosDeUso,
              }}
            ></p>
          ),
        }}
      />
    </div>
  );
}
