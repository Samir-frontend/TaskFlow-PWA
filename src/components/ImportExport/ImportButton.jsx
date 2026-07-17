import { FaFileImport } from "react-icons/fa";
import { useTasks } from "../../context/TaskContext";

export default function ImportButton() {

  const { importTasks } = useTasks();

  const handleImport = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {

      try {

        const data = JSON.parse(event.target.result);

        importTasks(data);

        alert("✅ Tasks Imported Successfully");

      } catch {

        alert("❌ Invalid JSON File");

      }

    };

    reader.readAsText(file);

  };

  return (

    <label className="import-btn">

      <FaFileImport />

      Import JSON

      <input
        type="file"
        accept=".json"
        hidden
        onChange={handleImport}
      />

    </label>

  );

}