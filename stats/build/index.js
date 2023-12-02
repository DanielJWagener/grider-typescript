"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
const reader = new MatchReader_1.MatchReader("football.csv");
reader.read();
console.log(reader.data);
let manUnitedWins = 0;
for (let match of reader.data) {
    let [_date, homeTeam, awayTeam, _homeScore, _awayScore, matchResult, _referee] = match;
    if (homeTeam === "Man United" && matchResult === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (awayTeam === "Man United" && matchResult === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Manchester United won ${manUnitedWins} matches.`);
