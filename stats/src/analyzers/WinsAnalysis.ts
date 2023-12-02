import { Analyzer } from "../Summary";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      let [_date, homeTeam, awayTeam, _homeScore, _awayScore, matchResult, _referee] = match;

      if (homeTeam === this.team && matchResult === MatchResult.HomeWin) {
        wins++;
      } else if (awayTeam === this.team && matchResult === MatchResult.AwayWin) {
        wins++;
      }
    }

    return `${this.team} won ${wins} matches.`;
  }
}
