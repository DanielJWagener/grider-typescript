"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResult_1 = require("../MatchResult");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            let [_date, homeTeam, awayTeam, _homeScore, _awayScore, matchResult, _referee] = match;
            if (homeTeam === this.team && matchResult === MatchResult_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (awayTeam === this.team && matchResult === MatchResult_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        return `${this.team} won ${wins} matches.`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
