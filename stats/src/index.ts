import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

const reader = new MatchReader("football.csv");
reader.read();

console.log(reader.data);

let manUnitedWins = 0;

for (let match of reader.data) {
  let [_date, homeTeam, awayTeam, _homeScore, _awayScore, matchResult, _referee] = match;

  if (homeTeam === "Man United" && matchResult === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (awayTeam === "Man United" && matchResult === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Manchester United won ${manUnitedWins} matches.`);
