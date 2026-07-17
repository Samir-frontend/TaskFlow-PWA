import { useEffect, useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import TaskForm from "../components/TaskForm/TaskForm";
import TaskList from "../components/Dashboard/TaskList";
import Stats from "../components/Stats/Stats";
import Footer from "../components/Footer/Footer";
import FilterBar from "../components/FilterBar/FilterBar";
import InstallPrompt from "../components/InstallPrompt/InstallPrompt";
import Charts from "../components/Charts/Charts";
import CalendarView from "../components/Calendar/CalendarView";
import ExportButtons from "../components/ImportExport/ExportButtons";
import NotificationManager from "../components/Notifications/NotificationManager";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActive] = useState("dashboard");

  useEffect(() => {

  const sections = [
    "dashboard",
    "all",
    "analytics",
    "calendar",
    "export",
    "settings",
  ];

  const observer = new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          setActive(entry.target.id);

        }

      });

    },

    {

      threshold: 0.35,

    }

  );

  sections.forEach((id) => {

    const el = document.getElementById(id);

    if (el) observer.observe(el);

  });

  return () => observer.disconnect();

}, []);

  return (
    <>
      <Navbar
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <NotificationManager />

      <InstallPrompt />

      <div className="layout">

        <Sidebar
          open={sidebarOpen}
          active={active}
          setActive={(value) => {
            setActive(value);
            setSidebarOpen(false);
          }}
        />

        <main className="main-content">

          {/* Dashboard */}
          <section id="dashboard">

            <Stats />

          </section>

          {/* All Tasks */}
          <section
            id="all"
            style={{ marginTop: "50px" }}
          >

            <TaskForm />

            <FilterBar />

            <TaskList />

          </section>

          {/* Analytics */}
          <section
            id="analytics"
            style={{ marginTop: "60px" }}
          >

            <Charts />

          </section>

          {/* Calendar */}
          <section
            id="calendar"
            style={{ marginTop: "60px" }}
          >

            <CalendarView />

          </section>

          {/* Export */}
          <section
            id="export"
            style={{ marginTop: "60px" }}
          >

            <ExportButtons />

          </section>

          {/* Settings */}
          <section
            id="settings"
            style={{ marginTop: "60px" }}
          >

          </section>

        </main>

      </div>

      <Footer />

    </>
  );
}