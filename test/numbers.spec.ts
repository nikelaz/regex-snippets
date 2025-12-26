import { generateTest } from "./helpers";
import { regexInteger, testCasesInteger, regexDecimal, testCasesDecimal } from "../data/numbers";

const reInteger = new RegExp(regexInteger);

for (let testCase of testCasesInteger) {
  generateTest(reInteger, testCase);
};

const reDecimal = new RegExp(regexDecimal);

for (let testCase of testCasesDecimal) {
  generateTest(reDecimal, testCase);
};
