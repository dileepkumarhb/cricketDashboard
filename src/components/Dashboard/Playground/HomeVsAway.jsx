import React from "react";
import * as Recharts from "recharts";
// import { getStadiumStats } from "../extract";
import { homeVsAway } from "../extract";
const { BarChart, Bar, XAxis, YAxis, Tooltip } = Recharts;

const HomeVsAway = props => {
  let result = homeVsAway();
  
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
       No of Centuries
      </span>
      <BarChart
        width={900}
        height={250}
        data={result}
        margin={{ top: 30, right: 40, left: -20, bottom: -30 }}
        className="ssp-400"
        style={{ color: "#1b2136" }}
      >
        <XAxis dataKey="ground" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="runs" stackId="a" fill="#8884d8" />
        <Bar dataKey="name" stackId="a" fill="#82ca9d" />
      </BarChart>
    </React.Fragment>
  );
};

export default HomeVsAway;
