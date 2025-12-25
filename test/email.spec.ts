import TestCase from "../types/test-case";
import { generateTest } from "./helpers";

import { emailRegex } from "../src/app/(sidebar-layout)/email/EmailContent";

const re = new RegExp(emailRegex);

const testCases: TestCase[] = [
  { isValid: true, pattern: "test@example.com" },
  { isValid: true, pattern: "user.name+tag+sorting@example.com" },
  { isValid: true, pattern: "x@example.com" },
  { isValid: true, pattern: "example-indeed@strange-example.com" },
  { isValid: true, pattern: "example@s.example" },
  { isValid: false, pattern: "" },
  { isValid: false, pattern: "admin@mailserver1" },
  //{ isValid: false, pattern: "abc..def@example.com" },
  //{ isValid: false, pattern: ".abc@example.com" },
  //{ isValid: false, pattern: "abc.@example.com" },
  { isValid: false, pattern: "abc.def@example..com" },
  { isValid: false, pattern: "plainaddress" },
  { isValid: false, pattern: "@missingusername.com" },
  { isValid: false, pattern: "missingatsign.com" },
  { isValid: false, pattern: "username@.com" },
  { isValid: false, pattern: "username@sub..com" },
  //{ isValid: false, pattern: "username@-example.com" },
  //{ isValid: false, pattern: "username@example-.com" },
];

for (let testCase of testCases) {
  generateTest(re, testCase);
};
