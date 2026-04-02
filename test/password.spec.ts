import { generateTest } from "./helpers";
import {
  strictRegex,
  balancedRegex,
  minimalRegex,
  strictTestCases,
  balancedTestCases,
  minimalTestCases,
} from "../data/password";

const strictRe = new RegExp(strictRegex);
const balancedRe = new RegExp(balancedRegex);
const minimalRe = new RegExp(minimalRegex);

for (const testCase of strictTestCases) {
  generateTest(strictRe, testCase);
}

for (const testCase of balancedTestCases) {
  generateTest(balancedRe, testCase);
}

for (const testCase of minimalTestCases) {
  generateTest(minimalRe, testCase);
}
