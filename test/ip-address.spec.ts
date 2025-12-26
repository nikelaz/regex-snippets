import { generateTest } from "./helpers";
import { regexIPv4, testCasesIPv4, regexIPv6, testCasesIPv6 } from "../data/ip-address";

const reIPv4 = new RegExp(regexIPv4);

for (let testCase of testCasesIPv4) {
  generateTest(reIPv4, testCase);
};

const reIPv6 = new RegExp(regexIPv6);

for (let testCase of testCasesIPv6) {
  generateTest(reIPv6, testCase);
};
