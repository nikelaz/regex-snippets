import { generateTest } from "./helpers";
import { regex, testCases } from "../data/credit-debit-card-number";

const re = new RegExp(regex);

for (let testCase of testCases) {
  generateTest(re, testCase);
};
