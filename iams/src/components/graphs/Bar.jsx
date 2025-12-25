import { Bar } from "react-chartjs-2";
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from "chart.js";
import { barChartData } from "./fakeData";
import useTheme from "../../hooks/useTheme";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BarChart() {
  const { theme } = useTheme();

  const textColor = theme === "dark" ? "#ffffff" : "#000000";
  const gridColor = theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: textColor, // legend text
        },
      },
      title: {
        display: true,
        text: "Audit Completion Rate %",
        color: textColor, // title text
        font: {
          size: 16,
          weight: "bold",
        },
      },
      tooltip: {
        titleColor: textColor,
        bodyColor: textColor,
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColor, // x-axis labels
        },
        grid: {
          color: gridColor,
        },
      },
      y: {
        ticks: {
          color: textColor, // y-axis numbers
        },
        grid: {
          color: gridColor,
        },
      },
    },
  };

  return <Bar options={options} data={barChartData} />;
}
