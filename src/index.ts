import { MatchReader } from './MatchReader';
//import { CsvFileReader } from './CsvFileReader';
//import { ConsoleReport } from './reportTargets/ConsoleReport';
//import { WinsAnalyzis } from './analyzers/WinsAnalyzis';
import { Summary } from './Summary';
//import { HtmlReport } from './reportTargets/HtmlReport';

/*const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);*/
const matchReader = MatchReader.fromCsv('football.csv');

matchReader.load();

/*const summary = new Summary(
  new WinsAnalyzis('Man United'),
  //new ConsoleReport()
  new HtmlReport()
);*/

const summary = Summary.winsAnalyzisWithHtmlReport('Man United');

summary.buildAndPrintReport(matchReader.matches);
