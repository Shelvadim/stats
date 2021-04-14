import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalyzis } from './analyzers/WinsAnalyzis';
import { Summary } from './Summary';

const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalyzis('Man United'),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);
