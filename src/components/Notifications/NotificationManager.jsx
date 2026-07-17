import { useEffect } from "react";
import { useTasks } from "../../context/TaskContext";

export default function NotificationManager() {
  const { tasks } = useTasks();

  useEffect(() => {
    if (!("Notification" in window)) return;

    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    if (Notification.permission !== "granted") return;

    const today = new Date();

    tasks.forEach((task) => {
      if (!task.dueDate || task.completed) return;

      const due = new Date(task.dueDate);

      if (
        due.getFullYear() === today.getFullYear() &&
        due.getMonth() === today.getMonth() &&
        due.getDate() === today.getDate()
      ) {
        new Notification("📌 Task Reminder", {
          body: `${task.title} is due today.`,
          icon: "/icons/icon-192.png",
        });
      }
    });
  }, [tasks]);

  return null;
}