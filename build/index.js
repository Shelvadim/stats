"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
//import { CsvFileReader } from './CsvFileReader';
//import { ConsoleReport } from './reportTargets/ConsoleReport';
//import { WinsAnalyzis } from './analyzers/WinsAnalyzis';
var Summary_1 = require("./Summary");
//import { HtmlReport } from './reportTargets/HtmlReport';
/*const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);*/
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
/*const summary = new Summary(
  new WinsAnalyzis('Man United'),
  //new ConsoleReport()
  new HtmlReport()
);*/
var summary = Summary_1.Summary.winsAnalyzisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
