import { generateTest } from "./helpers";
import { regexRange, testCasesRange, regexMin, testCasesMin, regexMax, testCasesMax } from "../data/number-of-lines";

const reRange = new RegExp(regexRange);

for (let testCase of testCasesRange) {
  generateTest(reRange, testCase);
};

const reMin = new RegExp(regexMin);

for (let testCase of testCasesMin) {
  generateTest(reMin, testCase);
};

const reMax = new RegExp(regexMax);

for (let testCase of testCasesMax) {
  generateTest(reMax, testCase);
};
