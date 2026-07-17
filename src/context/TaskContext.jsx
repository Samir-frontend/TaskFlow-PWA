import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {

  // ===========================
  // TASKS
  // ===========================

  const [tasks, setTasks] = useState(() => {

    const saved = localStorage.getItem("taskflow_tasks");

    return saved ? JSON.parse(saved) : [];

  });

  // ===========================
  // SEARCH & FILTERS
  // ===========================

  const [search, setSearch] = useState("");

  const [filterCategory, setFilterCategory] = useState("All");

  const [filterPriority, setFilterPriority] = useState("All");

  const [statusFilter, setStatusFilter] = useState("All");

  const [sortBy, setSortBy] = useState("Newest");

  // ===========================
  // LOCAL STORAGE
  // ===========================

  useEffect(() => {

    localStorage.setItem(

      "taskflow_tasks",

      JSON.stringify(tasks)

    );

  }, [tasks]);

  // ===========================
  // ADD TASK
  // ===========================

  const addTask = (task) => {

    const newTask = {

      id: uuid(),

      title: task.title,

      description: task.description,

      category: task.category,

      priority: task.priority || "Medium",

      dueDate: task.dueDate || "",

      completed: false,

      createdAt: new Date().toISOString(),

    };

    setTasks((prev) => [...prev, newTask]);
    toast.success(" Task added successfully!");

  };

  // ===========================
  // DELETE TASK
  // ===========================

  const deleteTask = (id) => {

    setTasks((prev) =>

      prev.filter((task) => task.id !== id)

    );

    toast.error("🗑️ Task deleted");

  };

  // ===========================
  // COMPLETE TASK
  // ===========================

  const toggleTask = (id) => {

  let status = false;

  setTasks((prev) =>

    prev.map((task) => {

      if (task.id === id) {

        status = !task.completed;

        return {
          ...task,
          completed: !task.completed,
        };

      }

      return task;

    })

  );

  if (status) {
    toast.success(" Task completed");
  } else {
    toast("📌 Task marked as pending");
  }

};

  // ===========================
  // EDIT TASK
  // ===========================

  const editTask = (id, updatedTask) => {

    setTasks((prev) =>

      prev.map((task) =>

        task.id === id

          ? {

              ...task,

              ...updatedTask,

            }

          : task

      )

    );

    toast.success("✏️ Task updated");

  };

  // ===========================
// IMPORT TASKS
// ===========================

const importTasks = (importedTasks) => {

  if (!Array.isArray(importedTasks)) return;

  setTasks((prev) => {

    const existingIds = new Set(prev.map(task => task.id));

    const cleaned = importedTasks.map(task => ({

      id: task.id || uuid(),

      title: task.title || "Untitled",

      description: task.description || "",

      category: task.category || "Personal",

      priority: task.priority || "Medium",

      dueDate: task.dueDate || "",

      completed: task.completed || false,

      createdAt:
        task.createdAt || new Date().toISOString(),

    }));

    const newTasks = cleaned.filter(
      task => !existingIds.has(task.id)
    );

    return [...prev, ...newTasks];

  });

};

  // ===========================
  // FILTER + SEARCH + SORT
  // ===========================

  const filteredTasks = useMemo(() => {

    let filtered = [...tasks];

    // Search
    if (search.trim()) {

      filtered = filtered.filter((task) =>
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        task.description.toLowerCase().includes(search.toLowerCase())
      );

    }

    // Category
    if (filterCategory !== "All") {

      filtered = filtered.filter(
        (task) => task.category === filterCategory
      );

    }

    // Priority
    if (filterPriority !== "All") {

      filtered = filtered.filter(
        (task) => task.priority === filterPriority
      );

    }

    // Status
    if (statusFilter === "Completed") {

      filtered = filtered.filter((task) => task.completed);

    } else if (statusFilter === "Pending") {

      filtered = filtered.filter((task) => !task.completed);

    }

    // Sorting

    switch (sortBy) {

      case "Oldest":

        filtered.sort(
          (a, b) =>
            new Date(a.createdAt) - new Date(b.createdAt)
        );

        break;

      case "Priority": {

        const order = {
          High: 3,
          Medium: 2,
          Low: 1,
        };

        filtered.sort(
          (a, b) =>
            order[b.priority] - order[a.priority]
        );

        break;
      }

      case "Newest":

      default:

        filtered.sort(
          (a, b) =>
            new Date(b.createdAt) - new Date(a.createdAt)
        );

    }

    return filtered;

  }, [
    tasks,
    search,
    filterCategory,
    filterPriority,
    statusFilter,
    sortBy,
  ]);

  // ===========================
  // PROVIDER
  // ===========================

  return (

    <TaskContext.Provider
      value={{

        tasks,

        filteredTasks,

        addTask,

        deleteTask,

        toggleTask,

        editTask,

        importTasks,

        search,
        setSearch,

        filterCategory,
        setFilterCategory,

        filterPriority,
        setFilterPriority,

        statusFilter,
        setStatusFilter,

        sortBy,
        setSortBy,

      }}
    >

      {children}

    </TaskContext.Provider>

  );

};