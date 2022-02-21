import React from 'react';
import './main.css';
import './Scores.js';


const Main = () => {
  return (
    <div className="container">
    <h1>ScoreBoard</h1>
    <div className="title-box">
        <p>Local Team</p>
        <p>Visitor Team</p>
    </div>

    <div className="title-box">
        <div className="team">
            <img id ="homelogo" alt="homelogo"/>
            <p id="homename">Team name</p>
        </div>
        <div>
        <p id="elapsed">45'</p>
        <p id ="goals">3 - 1</p>
        </div>
        <div className="team">
            <img id ="awaylogo" alt="awaylogo"/>
            <p id="awayname">Team name</p>
        </div>
    </div>
    <hr/>

    <div id ="matchTable" className="match-table"></div>  
    <script>'./Scores.js'</script>
</div>


  )
}

export default Main