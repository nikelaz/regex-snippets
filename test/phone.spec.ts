import { generateTest } from "./helpers";
import { regex, testCases, regexNational, testCasesNational } from "../data/phone";

const re = new RegExp(regex);

for (let testCase of testCases) {
  generateTest(re, testCase);
};

const reNational = new RegExp(regexNational);

for (let testCase of testCasesNational) {
  generateTest(reNational, testCase);
};
