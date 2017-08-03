const Elo = require("elo-js");
const elo = new Elo();


function movieLeftWins(playerID, movieLeftID, movieRightID) {
  updateLoserScore(playerID, losingMovieID);
  updateWinnerScore(playerID, winningMovieID);
  return;
}

function movieRightWins(playerID, movieLeftID, movieRightID) {
  const losingMovieID = movieLeftID;
  const winningMovieID = movieRightID;
  updateLoserScore(playerID, losingMovieID);
  updateWinnerScore(playerID, winningMovieID);
  return;
}

function updateLoserScore(playerID, losingMovieID) {
  Grade.findOneAndUpdate({
    { userID: "playerID", movieID: "winningMovieID" },
    { grade: -= 10 }
  }
    return;
  );
  return;
}

function updateWinnerScore(playerID, winningMovieID) {
  db.grades.findAndModify({
    query: { userID: "playerID", movieID: "winningMovieID" },
    update: { grade: += 10 }
  });
  return;
}

/*db.people.findAndModify({
    query: { name: "Andy", locked: false },
    update: { locked: true },*/

//ELO method for the versus
