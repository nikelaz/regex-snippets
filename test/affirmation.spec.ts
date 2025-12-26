import { generateTest } from "./helpers";
import { regex, testCases } from "../data/affirmation";

const re = new RegExp(regex, 'i');

for (let testCase of testCases) {
  generateTest(re, testCase);
};
