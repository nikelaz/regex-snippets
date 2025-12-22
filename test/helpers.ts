export function generateTest(regex: RegExp, testCase: TestCase) {
  test(testCase.pattern, () => {
    expect(regex.test(testCase.pattern)).toEqual(testCase.result);
  });
}
