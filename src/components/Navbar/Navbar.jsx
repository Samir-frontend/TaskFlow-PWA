import { useEffect, useState } from "react";

import {
  FaTasks,
  FaBars,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";

import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Navbar({ toggleSidebar }) {

  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const interval = setInterval(() => {

      setTime(new Date());

    },1000);

    return ()=>clearInterval(interval);

  },[]);

  const currentDate = time.toLocaleDateString("en-IN",{

    weekday:"long",

    day:"numeric",

    month:"long",

    year:"numeric",

  });

  const currentTime = time.toLocaleTimeString("en-IN",{

    hour:"2-digit",

    minute:"2-digit",

    second:"2-digit",

  });

  return(

<header className="navbar">

<div className="nav-left">

<button
className="menu-btn"
onClick={toggleSidebar}
>

<FaBars/>

</button>

<div className="logo">

<FaTasks className="logo-icon"/>

<div>

<h2>TaskFlow</h2>

<span>Smart Productivity Manager</span>

</div>

</div>

</div>

<div className="nav-center">

<div className="date-box">

<p>{currentDate}</p>

<span>{currentTime}</span>

</div>

</div>

<div className="nav-right">

<button className="icon-btn">

<FaBell/>

</button>

<ThemeToggle/>

<button className="icon-btn">

<FaUserCircle/>

</button>

</div>

</header>

);

}