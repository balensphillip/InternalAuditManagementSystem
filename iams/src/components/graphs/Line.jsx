import {Line} from "react-chartjs-2";
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from "chart.js";
import { lineChartData } from "./fakeData"; 
import { cssVar } from "../../utils/cssVars";                               

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function LineChart() {
const options = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: cssVar("--text"),
        font: {
          size: 12,
          weight: "500",
        },
      },
    },
    title: {
      display: true,
      text: "Audit Status Distribution",
      color: cssVar("--text"),
      font: {
        size: 16,
        weight: "600",
      },
    },
  },
};

  return <Line options={options} data={lineChartData} />;
}
