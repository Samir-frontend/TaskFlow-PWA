import {
  FaFilePdf,
  FaFileCsv,
} from "react-icons/fa";

import { useTasks } from "../../context/TaskContext";

import { exportCSV, exportPDF } from "./utils";

import ImportButton from "./ImportButton";

import "./importexport.css";

export default function ExportButtons() {

  const { tasks } = useTasks();

  return (

    <div className="export-section">

      <button
        className="pdf-btn"
        onClick={() => exportPDF(tasks)}
      >
        <FaFilePdf />
        Export PDF
      </button>

      <button
        className="csv-btn"
        onClick={() => exportCSV(tasks)}
      >
        <FaFileCsv />
        Export CSV
      </button>

      <ImportButton />

    </div>

  );

}