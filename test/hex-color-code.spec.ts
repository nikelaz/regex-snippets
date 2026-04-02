import { generateTest } from "./helpers";
import {
  regex,
  regexWithAlpha,
  testCases,
  testCasesWithAlpha,
} from "../data/hex-color-code";

const re = new RegExp(regex);
const reWithAlpha = new RegExp(regexWithAlpha);

for (const testCase of testCases) {
  generateTest(re, testCase);
}

for (const testCase of testCasesWithAlpha) {
  generateTest(reWithAlpha, testCase);
}
