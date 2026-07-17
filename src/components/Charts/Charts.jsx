import PieChartCard from "./PieChartCard";
import BarChartCard from "./BarChartCard";
import "./charts.css";

export default function Charts(){

return(

<section className="charts-section">

<h2 className="charts-title">
📊 Productivity Analytics
</h2>

<div className="charts-grid">

<PieChartCard/>

<BarChartCard/>

</div>

</section>

);

}