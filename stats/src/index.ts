import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());
summary.buildAndPrintReport(matchReader.matches);

const summary2 = Summary.winsAnalysisWithConsoleReport("Man United");
summary2.buildAndPrintReport(matchReader.matches);
