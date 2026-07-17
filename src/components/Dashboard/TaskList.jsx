import { useTasks } from "../../context/TaskContext";
import TaskCard from "../TaskCard/TaskCard";
import { FaClipboardList, FaPlusCircle } from "react-icons/fa";

export default function TaskList() {

  const { filteredTasks } = useTasks();

  if (filteredTasks.length === 0) {

    return (

      <div className="empty-state">

        <FaClipboardList className="empty-icon" />

        <h2>No Tasks Found</h2>

        <p>
          You don't have any tasks yet.
          <br />
          Create your first task and stay productive.
        </p>

        <button
          className="empty-btn"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >

          <FaPlusCircle />

          Add Your First Task

        </button>

      </div>

    );

  }

  return (

    <div className="task-grid">

      {

        filteredTasks.map((task) => (

          <TaskCard
            key={task.id}
            task={task}
          />

        ))

      }

    </div>

  );

}