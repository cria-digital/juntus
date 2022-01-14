import ReactApexChart from "react-apexcharts";

const data: any = {
  series: [
    {
      data: [
        {
          x: "category A",
          y: 20,
          fillColor: "#CC671F",
          strokeColor: "#CC671F",
        },
        {
          x: "category B",
          y: 15,
          fillColor: "#D67129",
          strokeColor: "#D67129",
        },
        {
          x: "category C",
          y: 10,
          fillColor: "#E48139",
          strokeColor: "#E48139",
        },
        {
          x: "category D",
          y: 5,
          fillColor: "#ED8A42",
          strokeColor: "#ED8A42",
        },
      ],
    },
  ],
  options: {
    chart: {
      zoom: {
        enabled: false,
      },
      fontSize: "15pt",
    },
    plotOptions: {
      bar: {
        columnWidth: "101%",
      },
    },
    dataLabels: {
      enabled: true,
    },
    legends: {
      show: true,
      position: "bottom",
    },
    grid: {
      show: false,
      xaxis: {
        lines: {},
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
  },
};

export default function ColumnChart() {
  return (
    <div id="chart">
      <ReactApexChart
        options={{ ...data.options }}
        series={data.series}
        type="bar"
        height={250}
      />
    </div>
  );
}
