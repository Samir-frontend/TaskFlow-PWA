import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

import { useTasks } from "../../context/TaskContext";

export default function PieChartCard() {

  const { tasks } = useTasks();

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const pending = tasks.length - completed;

  const data = [

    {
      name: "Completed",
      value: completed,
    },

    {
      name: "Pending",
      value: pending,
    },

  ];

  const COLORS = [

    "#22c55e",

    "#ef4444",

  ];

  return (

    <div className="chart-card">

      <h3>Task Completion</h3>

      <ResponsiveContainer
        width="100%"
        height={320}
      >

        <PieChart>

          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={110}
            dataKey="value"
            label
          >

            {

              data.map((entry,index)=>(

                <Cell
                  key={index}
                  fill={COLORS[index]}
                />

              ))

            }

          </Pie>

          <Tooltip/>

          <Legend/>

        </PieChart>

      </ResponsiveContainer>

    </div>

  );

}