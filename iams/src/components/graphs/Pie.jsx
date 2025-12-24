import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { pieChartData } from "./fakeData";  

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Audit Status Distribution",
      },
    },
  };

  return <Pie options={options} data={pieChartData} />;
}                                                                                                                                                                                                                                                                                                                                               