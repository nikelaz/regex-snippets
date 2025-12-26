import { generateTest } from "./helpers";
import { regex, testCases, regex12, testCases12 } from "../data/time";

const re = new RegExp(regex);

for (let testCase of testCases) {
  generateTest(re, testCase);
};

const re12 = new RegExp(regex12);

for (let testCase of testCases12) {
  generateTest(re12, testCase);
};
