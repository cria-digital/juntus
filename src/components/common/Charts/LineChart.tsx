import ReactApexChart from "react-apexcharts";

const data = {
  series: [
    {
      name: "visitas",
      data: [2, 4, 2, 4, 5, 6, 3],
    },
    {
      name: "Visitas",
      data: [3.5, 2, 2, 3, 6, 5, 2],
    },
  ],
  options: {
    chart: {
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 4,
    },
    stroke: {
      width: 2,
    },
    legend: {
      show: false,
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    colors: ["#db4138", "#6CA632"],
    xaxis: {
      lines: {
        show: false,
      },
      categories: ["1º Jan", "", "5º Jan", "", "10º Jan", "", "15º Jan"],
    },
    yaxis: {
      min: 1,
      max: 7,
      tickAmount: 7,
    },
  },
};

export default function LineChart(props) {
  return (
    <div id="chart">
      <ReactApexChart
        options={{ ...data.options }}
        series={data.series}
        type="line"
        height={350}
      />
    </div>
  );
}
