import { FaSearch } from "react-icons/fa";
import { useTasks } from "../../context/TaskContext";

export default function SearchBar() {

  const { search, setSearch } = useTasks();

  return (

    <div className="search-box">

      <FaSearch className="search-icon" />

      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

    </div>

  );

}