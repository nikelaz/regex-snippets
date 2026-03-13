import { generateTest } from "./helpers";
import { regex, testCases, regexExtract, testCasesExtract } from "../data/html-tag";

const re = new RegExp(regex);

for (let testCase of testCases) {
  generateTest(re, testCase);
}

const reExtract = new RegExp(regexExtract);

for (let testCase of testCasesExtract) {
  generateTest(reExtract, testCase);
}
