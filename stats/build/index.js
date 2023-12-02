"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const MatchResult_1 = require("./MatchResult");
const csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
let manUnitedWins = 0;
for (let match of matchReader.matches) {
    let [_date, homeTeam, awayTeam, _homeScore, _awayScore, matchResult, _referee] = match;
    if (homeTeam === "Man United" && matchResult === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (awayTeam === "Man United" && matchResult === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Manchester United won ${manUnitedWins} matches.`);
