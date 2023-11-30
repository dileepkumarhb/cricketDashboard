import data from "./data.json";

//Return Total runs, catches and wickets against a team (for small cards)
const getSummarizedStats = team => {
  let totalRuns = 0;
  // let totalCatches = 0;
  // let totalWickets = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].opponent === team) {
      if (data[i].batting_score !== "TDNB" && data[i].batting_score !== "DNB") {
        totalRuns += parseInt(data[i].batting_score, 10);
      }
      // if (data[i].wickets !== "-") {
      //   totalWickets += parseInt(data[i].wickets, 10);
      // }
      // if (data[i].catches !== "-") {
      //   totalCatches += parseInt(data[i].catches, 10);
      // }
    }
  }
  // return { totalRuns, totalCatches, totalWickets };
};

// Return runs per match per team from data (for line chart)
const getRuns= () => {
  const runs = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] ) {
      runs.push({
        name: `Match${i + 1}`,
        runs: data[i].runs
      });
    }
  }
  return runs;
};

const getRunsPerTeam = team => {
  const runs = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].opponent === team) {
      runs.push({
        name: `Match${i + 1}`,
        runs: data[i].runs
      });
    }
  }
  return runs;
};

const odiAndTtwenty = team => {
  const runs = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].opponent === team) {
      runs.push({
        name: `match${i + 1}`,
        match:data[i].match,
        runs: data[i].runs,
      });
    }
  }
  return runs;
};


const getCenturiesPerTeamOverYear = team => {
  const runs = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].opponent === team) {
      var date = new Date(data[i].date);
      var year = date.getFullYear();
      runs.push({
        name: `Match${i + 1}`,
        runs: data[i].runs >= 100 && year
      });
    }
  }
  return runs;
};

const battingAverage = team => {
  const runs = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].opponent === team) {
      var avg = (data[i].total/data[i].Match_No)
      runs.push({
        name: `Match${i + 1}`,
        avarage: avg
      });
    }
  }
  return runs;
};

const homeVsAway = () => {
  const runs = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].ground === 'india' || 'Chennai'||'Bengaluru'||'Delhi' || 'Nagpur' || 'Ahmedabad' 
    || 'Mohali' ||'Wankhede' || 'Hyderabad' || 'Kolkata' || 'Cuttack' || 'Visakhapatnam' || 'Indore') {
     
      runs.push({
        name: `Match${i + 1}`,
        runs: data[i].runs
      });
    }
     if (data[i].ground != 'india' || 'Chennai'||'Bengaluru'||'Delhi' || 'Nagpur' || 'Ahmedabad' 
     || 'Mohali' ||'Wankhede' || 'Hyderabad' || 'Kolkata' || 'Cuttack' || 'Visakhapatnam' || 'Indore') {
      
      runs.push({
        name: `Match${i + 1}`,
        runs: data[i].runs
      });
    }
  }
  return runs;
};

// Return wins/loses per team from data (for pie chart)
const getMatchResultsPerTeam = team => {
  let won = 0;
  let lost = 0;
  let draw = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].opponent === team) {
      switch (data[i].match_result) {
        case "won":
          won++;
          break;
        case "lost":
          lost++;
          break;
        case "n/r":
          draw++;
          break;
        default:
          break;
      }
    }
  }
  return { won, lost, draw };
};

//Return Stadium stats per team from data (for bar chart)
const getStadiumStats = team => {
  let stadiumList = new Set([]);
  let stadiumStats = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].opponent === team) {
      stadiumList.add(data[i].ground);
    }
  }

  //create an array of object for each unique stadium with default values(0)
  stadiumList.forEach(stadium => {
    return stadiumStats.push({
      ground: stadium,
      won: 0,
      lost: 0
    });
  });

  //update stadiumStats
  for (let i = 0; i < data.length; i++) {
    if (data[i].match_result === "won") {
      for (let j = 0; j < stadiumStats.length; j++) {
        if (
          stadiumStats[j].ground === data[i].ground &&
          data[i].opponent === team
        ) {
          stadiumStats[j].won++;
        }
      }
    } else if (data[i].match_result === "lost" && data[i].opponent === team) {
      for (let j = 0; j < stadiumStats.length; j++) {
        if (stadiumStats[j].ground === data[i].ground) {
          stadiumStats[j].lost++;
        }
      }
    }
  }
  return stadiumStats;
};

// Return opponent teams and respective matches from data (for team list)
const teams = () => {
  const teams = new Set([]);
  let teamStats = [];
  for (let i = 0; i < data.length; i++) {
    teams.add(data[i].opponent);
  }

  teams.forEach(team => {
    return teamStats.push({
      teamName: team,
      matches: 0
    });
  });

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < teamStats.length; j++) {
      if (teamStats[j].teamName === data[i].opponent) {
        teamStats[j].matches++;
      }
    }
  }

  let sortedTeamDetails = teamStats.sort((a, b) => {
    let nameA = a.teamName.replace(/\.| /g, "").toLowerCase();
    let nameB = b.teamName.replace(/\.| /g, "").toLowerCase();
    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  });

  return sortedTeamDetails;
};

export {
  teams,
  getSummarizedStats,
  getRunsPerTeam,
  getCenturiesPerTeamOverYear,
  battingAverage,
  getRuns,
  homeVsAway,
  odiAndTtwenty,
  getMatchResultsPerTeam,
  getStadiumStats
};
