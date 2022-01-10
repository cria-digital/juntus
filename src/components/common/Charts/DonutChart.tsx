import ReactApexChart from "react-apexcharts";

const data = {
  series: [44, 55, 41, 40],
  labels: ["Caçamba", "Graneleira", "Grade baixa", "Baú"],
  options: {
    colors: ["#FC9D58", "#F5934C", "#ED8A42", "#E48139"],

    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          labels: {
            show: true,

            total: {
              show: true,
              showAlways: true,
              color: "#BCC1C8",
              fontFamily: "Open Sans",
              formatter: (w) => {
                const total = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                return total;
              },
            },
          },
        },
      },
    },
  },
};

export default function DonutChart(props) {
  return (
    <div id="chart">
      <ReactApexChart
        options={{ ...data.options }}
        series={data.series}
        type="donut"
        height={250}
      />
    </div>
  );
}
