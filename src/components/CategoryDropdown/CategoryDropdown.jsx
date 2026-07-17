import { FaFolderOpen } from "react-icons/fa";
import { useTasks } from "../../context/TaskContext";
import categories from "../../data/categories";

export default function CategoryDropdown() {

  const {

    filterCategory,

    setFilterCategory,

  } = useTasks();

  return (

    <div className="category-box">

      <FaFolderOpen className="category-icon"/>

      <select
        value={filterCategory}
        onChange={(e)=>setFilterCategory(e.target.value)}
      >

        <option value="All">
          All Categories
        </option>

        {

          categories.map((cat)=>(

            <option
              key={cat}
              value={cat}
            >
              {cat}
            </option>

          ))

        }

      </select>

    </div>

  );

}