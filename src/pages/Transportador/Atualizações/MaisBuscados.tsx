import Card from "components/common/Cards/Card";
import ColumnChart from "components/common/Charts/ColumnChart";
import DonutChart from "components/common/Charts/DonutChart";
import Table from "components/common/Table";
import placeholderImg from "assets/placeholder.png";

export default function MaisBuscados(props: any) {
  return (
    <div className="mais-buscados">
      <p>Veja o que os embarcadores da sua rede estão buscando nesta semana:</p>
      <div>
        <div className="row">
          <Card>
            <h3> ROTAS MAIS PESQUISADAS </h3>
            <div className="flex">
              <div className="rota-img" />
              <ul>
                <li>São Paulo, SP {">"} Curitiba, PR</li>
                <li>São Paulo, SP {">"} Curitiba, PR</li>
                <li>São Paulo, SP {">"} Curitiba, PR</li>
                <li>São Paulo, SP {">"} Curitiba, PR</li>
                <li>São Paulo, SP {">"} Curitiba, PR</li>
              </ul>
            </div>
          </Card>
        </div>

        <div className="row">
          <Card>
            <h3> VEÍCULOS E CARROCERIAS MAIS PESQUISADAS </h3>
            <div className="flex j-even">
              <ColumnChart />
              <DonutChart />
            </div>
          </Card>
        </div>

        <div className="row flex">
          <Card width="40%">
            <h3>LICENÇAS MAIS SOLICITADAS</h3>
            <div className="licenças">
              <img width="80" src={placeholderImg} alt="Licença" />
              <img width="80" src={placeholderImg} alt="Licença" />
              <img width="80" src={placeholderImg} alt="Licença" />
              <img width="80" src={placeholderImg} alt="Licença" />
              <img width="80" src={placeholderImg} alt="Licença" />
              <img width="80" src={placeholderImg} alt="Licença" />
            </div>
          </Card>
          <Card width="40%">
            <h3>NOVAS ADIÇÕES ÀS REDES</h3>
            <Table
              noShadow
              data={[
                {
                  name: "ANVISA",
                  value: "Alimentos",
                },
                {
                  name: "ANVISA",
                  value: "Saneamentos",
                },
                {
                  name: "ISO",
                  value: "9001",
                },
              ]}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}
