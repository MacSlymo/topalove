const Elo = require("elo-js");
const elo = new Elo();

//First draft of logic

const gradeMovieLeft = db.grades.find({ userID: /*CONNECTED PLAYER ID*/, movieID: /*LEFT MOVIE ID*/ }, {grade});
const gradeMovieRight = db.grades..find({ userID: /*CONNECTED PLAYER ID*/, movieID: /*RIGHT MOVIE ID*/ }, {grade});

function movieLeftWins(playerID, movieLeftID, movieRightID) {
  const losingMovieID = movieRightID;
  const winningMovieID = movieLeftID;
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
  });
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
