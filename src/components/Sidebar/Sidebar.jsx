import {
  FaHome,
  FaClipboardList,
  FaChartPie,
  FaCalendarAlt,
  FaFileExport,
  FaCog,
} from "react-icons/fa";

export default function Sidebar({
  open,
  active,
  setActive,
}) {

  const navigate = (section) => {

    setActive(section);

    document
      .getElementById(section)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    // Mobile me sidebar automatically close
    if (window.innerWidth < 768) {
      document
        .querySelector(".sidebar")
        ?.classList.remove("show");
    }

  };

  return (

    <aside className={`sidebar ${open ? "show" : ""}`}>

      <ul>

        <li
          className={active === "dashboard" ? "active" : ""}
          onClick={() => navigate("dashboard")}
        >
          <FaHome />
          <span>Dashboard</span>
        </li>

        <li
          className={active === "all" ? "active" : ""}
          onClick={() => navigate("all")}
        >
          <FaClipboardList />
          <span>All Tasks</span>
        </li>

        <li
          className={active === "analytics" ? "active" : ""}
          onClick={() => navigate("analytics")}
        >
          <FaChartPie />
          <span>Analytics</span>
        </li>

        <li
          className={active === "calendar" ? "active" : ""}
          onClick={() => navigate("calendar")}
        >
          <FaCalendarAlt />
          <span>Calendar</span>
        </li>

        <li
          className={active === "export" ? "active" : ""}
          onClick={() => navigate("export")}
        >
          <FaFileExport />
          <span>Export</span>
        </li>

        <li
          className={active === "settings" ? "active" : ""}
          onClick={() => navigate("settings")}
        >
          <FaCog />
          <span>Settings</span>
        </li>

      </ul>

      <div className="sidebar-bottom">

        <h4>TaskFlow</h4>

        <small>Version 2.0.0</small>

      </div>

    </aside>

  );

}