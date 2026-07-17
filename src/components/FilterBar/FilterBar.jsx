import SearchBar from "../SearchBar/SearchBar";
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";
import { useTasks } from "../../context/TaskContext";

export default function FilterBar() {

  const {

    filterPriority,
    setFilterPriority,

    statusFilter,
    setStatusFilter,

    sortBy,
    setSortBy,

  } = useTasks();

  return (

    <div className="filter-bar">

      <SearchBar />

      <CategoryDropdown />

      <select
        value={filterPriority}
        onChange={(e)=>setFilterPriority(e.target.value)}
      >
        <option value="All">All Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <select
        value={statusFilter}
        onChange={(e)=>setStatusFilter(e.target.value)}
      >
        <option value="All">All Status</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
      </select>

      <select
        value={sortBy}
        onChange={(e)=>setSortBy(e.target.value)}
      >
        <option value="Newest">Newest First</option>
        <option value="Oldest">Oldest First</option>
        <option value="Priority">Priority First</option>
      </select>

    </div>

  );

}