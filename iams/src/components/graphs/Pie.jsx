import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { pieChartData } from "./fakeData"; 
import useTheme from "../../hooks/useTheme"; 

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  const { theme } = useTheme();
  const textColor = theme === "dark" ? "#ffffff" : "#000000";

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
        text: "Audit Status Distribution",
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
  };

  return <Pie options={options} data={pieChartData} />;
}                                                                                                                                                                                                                                                                                                                                               