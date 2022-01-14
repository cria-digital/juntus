import SectionLayout from "components/layouts/SectionLayout";
import { PoliticaDeSeguranca } from "texts";

export default function Seguranca() {
  return (
    <div className="page">
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
