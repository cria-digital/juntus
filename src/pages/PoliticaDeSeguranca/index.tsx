import { politica } from "texts";

export default function PoliticaDeSeguranca() {
  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: politica }}></p>
    </div>
  );
}
