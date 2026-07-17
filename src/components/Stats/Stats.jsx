import {
  FaTasks,
  FaCheckCircle,
  FaClock,
  FaFolder,
  FaFlag,
  FaChartLine,
  FaFire,
  FaExclamationTriangle,
  FaBullseye,
} from "react-icons/fa";
import { useTasks } from "../../context/TaskContext";

export default function Stats() {

  const { tasks } = useTasks();

  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const pending = total - completed;

  const categories = [
    ...new Set(tasks.map((task) => task.category)),
  ].length;

  const highPriority = tasks.filter(
    (task) => task.priority === "High"
  ).length;

  const dueToday = tasks.filter((task) => {

    if (!task.dueDate) return false;

    return (
      new Date(task.dueDate).toDateString() ===
      new Date().toDateString()
    );

  }).length;

  const productivity = total
    ? Math.round((completed / total) * 100)
    : 0;

    const overdue = tasks.filter((task) => {
    if (!task.dueDate || task.completed) return false;

    return new Date(task.dueDate) < new Date();
   }).length;

   const focusScore = total
   ? Math.round((highPriority / total) * 100)
   : 0;

    const hour = new Date().getHours();

let greeting = "Good Evening";
let emoji = "🌇";

if (hour < 12) {
  greeting = "Good Morning";
  emoji = "🌞";
}
else if (hour < 17) {
  greeting = "Good Afternoon";
  emoji = "☀️";
}
else if (hour < 20) {
  greeting = "Good Evening";
  emoji = "🌇";
}
else {
  greeting = "Good Night";
  emoji = "🌙";
}

const quote =
  productivity >= 80
    ? "Excellent work! Keep it up 🚀"
    : productivity >= 50
    ? "You're making good progress 💪"
    : "Let's complete a few more tasks today 🎯";

    return (
  <>
    <div className="dashboard-header">
      <div>
        <h1>
          {emoji} {greeting}
        </h1>

        <p>{quote}</p>
      </div>

      <div className="progress-box">
        <h2>{productivity}%</h2>

        <span>Productivity</span>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${productivity}%`,
            }}
          />
        </div>
      </div>
    </div>

    <div className="stats-grid">

      <div className="stat-card">
        <FaTasks className="stat-icon" />
        <h2>{total}</h2>
        <p>Total Tasks</p>
      </div>

      <div className="stat-card">
        <FaCheckCircle className="stat-icon" />
        <h2>{completed}</h2>
        <p>Completed</p>
      </div>

      <div className="stat-card">
        <FaClock className="stat-icon" />
        <h2>{pending}</h2>
        <p>Pending</p>
      </div>

      <div className="stat-card">
        <FaFolder className="stat-icon" />
        <h2>{categories}</h2>
        <p>Categories</p>
      </div>

      <div className="stat-card">
        <FaFlag className="stat-icon" />
        <h2>{highPriority}</h2>
        <p>High Priority</p>
      </div>

      <div className="stat-card">
        <FaChartLine className="stat-icon" />
        <h2>{productivity}%</h2>
        <p>Productivity</p>
      </div>

      <div className="stat-card">
        <FaClock className="stat-icon" />
        <h2>{dueToday}</h2>
        <p>Due Today</p>
      </div>

      <div className="stat-card">
        <FaExclamationTriangle className="stat-icon" />
        <h2>{overdue}</h2>
        <p>Overdue Tasks</p>
      </div>

      <div className="stat-card">
        <FaBullseye className="stat-icon" />
        <h2>{focusScore}%</h2>
        <p>Focus Score</p>
      </div>

    </div>
  </>
);

}