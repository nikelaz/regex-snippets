import { expect, test } from "bun:test";
import type TestCase from "../types/test-case";

export function generateTest(regex: RegExp, testCase: TestCase) {
  test(testCase.pattern, () => {
    expect(regex.test(testCase.pattern)).toEqual(testCase.isValid);
  });
}
