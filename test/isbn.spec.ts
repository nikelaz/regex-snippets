import { generateTest } from "./helpers";
import { regexISBN10, testCasesISBN10, regexISBN13, testCasesISBN13 } from "../data/isbn";

const reISBN10 = new RegExp(regexISBN10);

for (let testCase of testCasesISBN10) {
  generateTest(reISBN10, testCase);
};

const reISBN13 = new RegExp(regexISBN13);

for (let testCase of testCasesISBN13) {
  generateTest(reISBN13, testCase);
};
