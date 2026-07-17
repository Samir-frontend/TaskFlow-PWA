import {
  Calendar,
  dateFnsLocalizer,
  Views,
  Navigate,
} from "react-big-calendar";

import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.css";

import { useState } from "react";
import { useTasks } from "../../context/TaskContext";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function CalendarView() {
  const { tasks } = useTasks();

  const [view, setView] = useState(Views.MONTH);
  const [date, setDate] = useState(new Date());

  const events = tasks
    .filter((task) => task.dueDate)
    .map((task) => ({
      id: task.id,
      title: task.title,
      start: new Date(task.dueDate),
      end: new Date(task.dueDate),
      allDay: true,
    }));

  const handleNavigate = (newDate) => {
    setDate(newDate);
  };

  const handleView = (newView) => {
    setView(newView);
  };

  return (
    <div className="calendar-card">

      <h2>📅 Task Calendar</h2>

      <Calendar
        localizer={localizer}
        events={events}
        date={date}
        view={view}
        onNavigate={handleNavigate}
        onView={handleView}
        startAccessor="start"
        endAccessor="end"
        popup
        selectable
        toolbar
        style={{ height: 650 }}
        views={[
          Views.MONTH,
          Views.WEEK,
          Views.DAY,
          Views.AGENDA,
        ]}
        defaultView={Views.MONTH}
        messages={{
          today: "Today",
          previous: "Back",
          next: "Next",
          month: "Month",
          week: "Week",
          day: "Day",
          agenda: "Agenda",
          date: "Date",
          time: "Time",
          event: "Task",
          noEventsInRange: "No Tasks",
        }}
      />

    </div>
  );
}