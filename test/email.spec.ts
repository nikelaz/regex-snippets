import { expect, test } from "bun:test";
import TestCase from "./test-case";
import { generateTest } from "./helpers";

import { emailRegex } from "../src/app/(sidebar-layout)/email/EmailContent";

const re = new RegExp(emailRegex);

const testCases: TestCase[] = [
  { result: true, pattern: "test@example.com" },
  { result: true, pattern: "user.name+tag+sorting@example.com" },
  { result: true, pattern: "x@example.com" },
  { result: true, pattern: "example-indeed@strange-example.com" },
  { result: true, pattern: "example@s.example" },
  { result: false, pattern: "" },
  { result: false, pattern: "admin@mailserver1" },
  { result: false, pattern: "abc..def@example.com" },
  { result: false, pattern: ".abc@example.com" },
  { result: false, pattern: "abc.@example.com" },
  { result: false, pattern: "abc.def@example..com" },
  { result: false, pattern: "plainaddress" },
  { result: false, pattern: "@missingusername.com" },
  { result: false, pattern: "missingatsign.com" },
  { result: false, pattern: "username@.com" },
  { result: false, pattern: "username@sub..com" },
  { result: false, pattern: "username@-example.com" },
  { result: false, pattern: "username@example-.com" },
];

for (let testCase of testCases) {
  generateTest(re, testCase);
};
