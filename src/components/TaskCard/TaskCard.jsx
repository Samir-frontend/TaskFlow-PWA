import {
  FaTrash,
  FaCheck,
  FaEdit,
  FaSave,
  FaCalendarAlt,
  FaFlag,
} from "react-icons/fa";
import { useState } from "react";
import { useTasks } from "../../context/TaskContext";

export default function TaskCard({ task }) {
  const { deleteTask, toggleTask, editTask } = useTasks();

  const [editing, setEditing] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [category, setCategory] = useState(task.category);

  const [priority, setPriority] = useState(
    task.priority || "Medium"
  );

  const [dueDate, setDueDate] = useState(
    task.dueDate || ""
  );

  const isOverdue =
    dueDate &&
    !task.completed &&
    new Date(dueDate) < new Date();

  const saveTask = () => {
    editTask(task.id, {
      title,
      description,
      category,
      priority,
      dueDate,
    });

    setEditing(false);
  };

  return (
    <>
      <div
        className={`task-card ${
          task.completed ? "completed" : ""
        } ${isOverdue ? "overdue" : ""}`}
      >
        {editing ? (
          <input
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />
        ) : (
          <h3>{task.title}</h3>
        )}

        {editing ? (
          <textarea
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
          />
        ) : (
          <p>{task.description}</p>
        )}

        {editing ? (
          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
          >
            <option>Work</option>
            <option>Study</option>
            <option>Personal</option>
            <option>Shopping</option>
            <option>Health</option>
            <option>Important</option>
          </select>
        ) : null}

        {editing ? (
          <select
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value)
            }
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        ) : (
          <div
            className={`priority ${priority.toLowerCase()}`}
          >
            <FaFlag />
            &nbsp;
            {priority}
          </div>
        )}

        {editing ? (
          <input
            type="date"
            value={dueDate}
            onChange={(e) =>
              setDueDate(e.target.value)
            }
          />
        ) : dueDate ? (
          <div className="due-date">
            <FaCalendarAlt />
            &nbsp;
            {new Date(dueDate).toLocaleDateString()}
          </div>
        ) : null}

        <div className="task-info">
          <span className="category">
            {category}
          </span>

          <small>
            {new Date(
              task.createdAt
            ).toLocaleDateString()}
          </small>
        </div>

        <div className="task-actions">
          <button
            className="complete-btn"
            onClick={() =>
              toggleTask(task.id)
            }
          >
            <FaCheck />
          </button>

          <button
            className="edit-btn"
            onClick={() => {
              if (editing) {
                saveTask();
              } else {
                setEditing(true);
              }
            }}
          >
            {editing ? (
              <FaSave />
            ) : (
              <FaEdit />
            )}
          </button>

          <button
            className="delete-btn"
            onClick={() => setShowDelete(true)}
          >
            <FaTrash />
          </button>
        </div>
      </div>

      {showDelete && (
        <div className="delete-modal">
          <div className="delete-box">

            <h3>Delete Task?</h3>

            <p>
              This action cannot be undone.
            </p>

            <div className="delete-buttons">

              <button
                className="cancel-btn"
                onClick={() =>
                  setShowDelete(false)
                }
              >
                Cancel
              </button>

              <button
                className="confirm-btn"
                onClick={() => {
                  deleteTask(task.id);
                  setShowDelete(false);
                }}
              >
                Delete
              </button>

            </div>

          </div>
        </div>
      )}
    </>
  );
}