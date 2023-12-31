import React from "react";
import "../dashboard.css";
import LineCharts from "./LineChart";
import PieCharts from "./PieChart";
import BarCharts from "./BarChart";
import BarChartCentury from "./BarChartCentury";
import LineChartsAvarage from "./LineChartsAvarage";
import HomeVsAway from './HomeVsAway';
import OdiAndTtwentyBarChart from "./OdiAndTtwentyBarChart";
import { getSummarizedStats } from "../extract";

const Playground = props => {
  const res = getSummarizedStats(props.team);
  return (
    <div className="playground">
      <header className="ssp-300 playground-headline">
        Sachin vs {props.team}
      </header>
      <section className="single-insight-cards">
        {/* <div className="small-card card-1 ssp-400">
          <span style={{ fontSize: "18px", color: "white" }}>Runs</span>
          {res.totalRuns}
        </div>
        <div className="small-card card-2 ssp-400">
          <span style={{ fontSize: "18px", color: "white" }}>Wickets</span>
          {res.totalWickets}
        </div>
        <div className="small-card card-3 ssp-400">
          <span style={{ fontSize: "18px", color: "white" }}>Catches</span>
          {res.totalCatches}
        </div> */}
      </section>
      <section className="line-chart-container">
        <LineCharts team={props.team} />
      </section>
      <div className="line-chart-container">
          <BarCharts team={props.team} />
        </div>
        <div className="line-chart-container">
          <BarChartCentury team={props.team} />
        </div>
      <section className="dual-row">
        <div className="dual-boxes">
          <PieCharts team={props.team} />
        </div>
        <div className="dual-boxes">
        <LineChartsAvarage team={props.team} />
        </div>
        
      </section>
      <section className="dual-row">
      <div className="dual-boxes">
        <HomeVsAway team={props.team} />
        </div>
        <div className="dual-boxes">
        <OdiAndTtwentyBarChart team={props.team} />
        </div>
      </section>
      
    </div>
  );
};

export default Playground;
