import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";

const csvFileReader = new CsvFileReader("football.csv");

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  let [_date, homeTeam, awayTeam, _homeScore, _awayScore, matchResult, _referee] = match;

  if (homeTeam === "Man United" && matchResult === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (awayTeam === "Man United" && matchResult === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Manchester United won ${manUnitedWins} matches.`);
