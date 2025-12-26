import { generateTest } from "./helpers";
import { regex, testCases } from "../data/windows-path";

const re = new RegExp(regex);

for (let testCase of testCases) {
  generateTest(re, testCase);
};
