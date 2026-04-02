import { generateTest } from "./helpers";
import { regex, testCases } from "../data/username";

const re = new RegExp(regex);

for (const testCase of testCases) {
  generateTest(re, testCase);
}
