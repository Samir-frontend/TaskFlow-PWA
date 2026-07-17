import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { useTasks } from "../../context/TaskContext";

export default function TaskForm() {

  const { addTask } = useTasks();

  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [category,setCategory]=useState("Work");

  const [priority,setPriority]=useState("Medium");

  const [dueDate,setDueDate]=useState("");

  const handleSubmit=(e)=>{

    e.preventDefault();

    if(title.trim()===""){

      alert("Please enter task title");

      return;

    }

    addTask({

      title,

      description,

      category,

      priority,

      dueDate

    });

    setTitle("");

    setDescription("");

    setCategory("Work");

    setPriority("Medium");

    setDueDate("");

  };

  return(

<form
className="task-form"
onSubmit={handleSubmit}
>

<h2>Create New Task</h2>

<input

type="text"

placeholder="Task Title"

value={title}

onChange={(e)=>setTitle(e.target.value)}

/>

<textarea

placeholder="Task Description"

value={description}

onChange={(e)=>setDescription(e.target.value)}

/>

<div className="filter-bar">

<select

value={category}

onChange={(e)=>setCategory(e.target.value)}

>

<option>Work</option>

<option>Study</option>

<option>Personal</option>

<option>Shopping</option>

<option>Health</option>

<option>Important</option>

</select>

<select

value={priority}

onChange={(e)=>setPriority(e.target.value)}

>

<option>High</option>

<option>Medium</option>

<option>Low</option>

</select>

</div>

<label>

Due Date

</label>

<input

type="date"

value={dueDate}

onChange={(e)=>setDueDate(e.target.value)}

/>

<button type="submit">

<FaPlusCircle />

&nbsp;

Add Task

</button>

</form>

  );

}