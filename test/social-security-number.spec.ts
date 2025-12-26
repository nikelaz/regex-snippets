import { generateTest } from "./helpers";
import { regex, testCases, regexBasic, testCasesBasic } from "../data/social-security-number";

const re = new RegExp(regex);

for (let testCase of testCases) {
  generateTest(re, testCase);
};

const reBasic = new RegExp(regexBasic);

for (let testCase of testCasesBasic) {
  generateTest(reBasic, testCase);
};
