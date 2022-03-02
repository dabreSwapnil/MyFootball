const time = document.querySelector("#elapsed");
const homeLogo = document.querySelector("#homelogo");
const homeName = document.querySelector("#homename");
const awayLogo = document.querySelector("#awaylogo");
const awayName = document.querySelector("#awayname");
const goal = document.querySelector("#goals");

const match = document.querySelector("#matchTable");


const addMatchTile = (data) => {
  //createing the tile div
  var matchtile = document.createElement("div");
  matchtile.classList.add("match-tile");

  //creating the home match box
  var homeTeam = document.createElement("div");
  homeTeam.classList.add("team");

  //creating the image and the text
  var homeTileTeamName = document.createElement("p");
  homeTileTeamName.innerHTML = data["teams"]["home"]["name"];
  var homeTileTeamLogo = document.createElement("img");
  homeTileTeamLogo.src = data["teams"]["home"]["logo"];
  homeTeam.appendChild(homeTileTeamLogo);
  homeTeam.appendChild(homeTileTeamName);

  var awayTeam = document.createElement("div");
  awayTeam.classList.add("team");
  //creating the image and the text
  var awayTileTeamName = document.createElement("p");
  awayTileTeamName.innerHTML = data["teams"]["away"]["name"];
  var awayTileTeamLogo = document.createElement("img");
  awayTileTeamLogo.src = data["teams"]["away"]["logo"];
  awayTeam.appendChild(awayTileTeamLogo);
  awayTeam.appendChild(awayTileTeamName);

  //createing the score
  var scoretime = document.createElement("div");
  var score = document.createElement("p");
  score.innerHTML = data["goals"]["home"] + " - " + data["goals"]["away"];
  var time = document.createElement("p");
  time.innerHTML=data["fixture"]["status"]["elapsed"] + "'";
  scoretime.appendChild(time);
  scoretime.appendChild(score);

  //append all the element to the parent
  matchtile.appendChild(homeTeam);
  matchtile.appendChild(scoretime);
  matchtile.appendChild(awayTeam);
  
  //console.log(matchtile);
  match.appendChild(matchtile);
};


const getData = (async () => {
        const setHeader = {
          method: "GET",
          headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "1364708263f96dc885a2c3a76d0aeb82",
          },
        };
        
      
        const res = await fetch(
          "https://v3.football.api-sports.io/fixtures?live=all",
          setHeader
        );
        const data = await res.json();
      
        //console.log(data);
      
        var matchesList = data["response"];
        console.log(matchesList);
        var fixture = matchesList[0]["fixture"];
        var goals = matchesList[0]["goals"];
        var teams = matchesList[0]["teams"];
        console.log(matchesList.length);
        time.innerHTML = fixture["status"]["elapsed"] + "'"==null?"45":fixture["status"]["elapsed"] + "'";
        homeLogo.src = (teams["home"]["logo"]==null)?"https://media.api-sports.io/football/teams/3588.png":teams["home"]["logo"];
        homeName.innerHTML = (teams["home"]["name"]==null)?"Swapnil":teams["home"]["name"];
        awayLogo.src = (teams["away"]["logo"]==null)?"https://media.api-sports.io/football/teams/3599.png":teams["away"]["logo"];
        awayName.innerHTML = (teams["away"]["name"]==null)?"Dabre":teams["away"]["name"];
        goal.innerHTML = (goals["home"] + " - " + goals["away"]==null)?"3-1":goals["home"] + " - " + goals["away"];
      
      
      //  console.log(goals["home"] + " - " + goals["away"]);
       // console.log(teams["away"]["name"]);
        //console.log(teams["away"]["logo"]);
      
        for (var i = 1; i < matchesList.length; i++) {
          //  console.log(matchesList[i]);
          addMatchTile(matchesList[i]);
          
          
        }
      })();