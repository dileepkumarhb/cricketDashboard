import React from "react";
import "../dashboard.css";
import * as Recharts from "recharts";
// import { getRunsPerTeam } from "../extract";
 import { getRuns } from "../extract";


const { LineChart, Line, XAxis, YAxis, Tooltip } = Recharts;

const LineCharts = props => {
  const data = getRuns();
  return (
    <React.Fragment>
      <span
        className="ssp-400"
        style={{
          position: "absolute",
          top: "15px",
          left: "30px",
          fontSize: "20px",
          marginBottom: "10px"
        }}
      >
        Runs per match against {props.team}
      </span>
      <LineChart
        width={900}
        height={250}
        data={data}
        margin={{ top: 40, right: 30, left: 0, bottom: -10 }}
        className="ssp-400"
        style={{ color: "#e91e63" }}
      >
        <XAxis />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="runs"
          stroke="#e91e63"
          strokeWidth="3"
          strokeOpacity="0.85"
          activeDot={{ r: 8 }}
        />
      </LineChart>
      <span
        className="ssp-400"
        style={{
          color: "white",
          position: "absolute",
          bottom: "7px",
          left: "47%"
        }}
      >
        Matches
      </span>
    </React.Fragment>
  );
};

export default LineCharts;
