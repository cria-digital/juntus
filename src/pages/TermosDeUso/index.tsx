import SectionLayout from "components/layouts/SectionLayout";
import { TermosDeUso } from "texts";

export default function Termos() {
  return (
    <div className="page">
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
