import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { useTasks } from "../../context/TaskContext";

export default function BarChartCard() {

  const { tasks } = useTasks();

  const categoryMap = {};

  tasks.forEach((task) => {

    if (categoryMap[task.category]) {

      categoryMap[task.category]++;

    } else {

      categoryMap[task.category] = 1;

    }

  });

  const data = Object.keys(categoryMap).map((key) => ({

    category: key,

    tasks: categoryMap[key],

  }));

  return (

    <div className="chart-card">

      <h3>Tasks by Category</h3>

      <ResponsiveContainer
        width="100%"
        height={320}
      >

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="category" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="tasks"
            fill="#0f766e"
            radius={[8, 8, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );

}