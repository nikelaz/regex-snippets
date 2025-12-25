import type TestCase from "../types/test-case";

export const regex = `^(?!000|666|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0000)\\d{4}$`;

export const jsSnippet = `
const ssnRegex = /${regex}/;
const isValidSSN = (ssn) => ssnRegex.test(ssn);
`;

export const pySnippet = `
import re

def is_valid_ssn(ssn):
  ssnRegex = r"${regex}"
  return re.match(ssnRegex, ssn) is not None
`;

export const rustSnippet = `
use regex::Regex;

fn is_valid_ssn(ssn: &str) -> bool {
  let ssnRegex = Regex::new("${regex}")
    .expect("Could not parse SSN validation regex");
  ssnRegex.is_match(ssn)
}
`;

export const goSnippet = `
package main

import (
  "regexp"
)

func isValidSSN(ssn string) bool {
  ssnRegex := "${regex}"
  re := regexp.MustCompile(ssnRegex)
  return re.MatchString(ssn)
}
`;

export const swiftSnippet = `
import Foundation

func isValidSSN(_ ssn: String) -> Bool {
  let ssnRegex = "${regex}"
  return NSPredicate(format: "SELF MATCHES %@", ssnRegex).evaluate(with: ssn)
}
`;

export const csharpSnippet = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidSSN(string ssn) {
    string ssnRegex = "${regex}";
    return Regex.IsMatch(ssn, ssnRegex);
  }
}
`;

export const javaSnippet = `
import java.util.regex.*;

public class Application {
  public static boolean isValidSSN(String ssn) {
    String ssnRegex = "${regex}";
    Pattern pattern = Pattern.compile(ssnRegex);
    Matcher matcher = pattern.matcher(ssn);
    return matcher.matches();
  }
}
`;

export const phpSnippet = `
<?php
function isValidSSN($ssn) {
  $ssnRegex = "${regex}";
  return preg_match("/" . $ssnRegex . "/", $ssn);
}
?>
`;

export const testCases: TestCase[] = [
  { pattern: "123-45-6789", isValid: true },
  { pattern: "234-56-7890", isValid: true },
  { pattern: "456-78-9012", isValid: true },
  { pattern: "987-65-4321", isValid: true },
  { pattern: "800-12-3456", isValid: true },
  { pattern: "000-12-3456", isValid: false },
  { pattern: "666-12-3456", isValid: false },
  { pattern: "900-12-3456", isValid: false },
  { pattern: "999-12-3456", isValid: false },
  { pattern: "123-00-4567", isValid: false },
  { pattern: "123-45-0000", isValid: false },
  { pattern: "12-34-5678", isValid: false },
  { pattern: "1234-56-789", isValid: false },
  { pattern: "123456789", isValid: false },
  { pattern: "123-456-789", isValid: false },
  { pattern: "", isValid: false },
  { pattern: "abc-de-fghi", isValid: false },
  { pattern: "123-45-67890", isValid: false },
  { pattern: "123.45.6789", isValid: false },
];

// Basic format (no validation of specific ranges)
export const regexBasic = `^\\d{3}-\\d{2}-\\d{4}$`;

export const jsSnippetBasic = `const ssnRegex = /${regexBasic}/;
const isValidSSN = (ssn) => ssnRegex.test(ssn);`;

export const pythonSnippetBasic = `import re

ssn_regex = r'${regexBasic}'

def is_valid_ssn(ssn):
    return bool(re.match(ssn_regex, ssn))`;

export const rustSnippetBasic = `use regex::Regex;

fn is_valid_ssn(ssn: &str) -> bool {
    let re = Regex::new(r"${regexBasic}").unwrap();
    re.is_match(ssn)
}`;

export const goSnippetBasic = `package main

import (
    "regexp"
)

func isValidSSN(ssn string) bool {
    ssnRegex := "${regexBasic}"
    re := regexp.MustCompile(ssnRegex)
    return re.MatchString(ssn)
}`;

export const swiftSnippetBasic = `import Foundation

func isValidSSN(_ ssn: String) -> Bool {
    let ssnRegex = "${regexBasic}"
    return NSPredicate(format: "SELF MATCHES %@", ssnRegex).evaluate(with: ssn)
}`;

export const csharpSnippetBasic = `using System;
using System.Text.RegularExpressions;

class Program {
    static bool IsValidSSN(string ssn) {
        return Regex.IsMatch(ssn, @"${regexBasic}");
    }
}`;

export const javaSnippetBasic = `import java.util.regex.*;

public class Application {
    public static boolean isValidSSN(String ssn) {
        return Pattern.matches("${regexBasic}", ssn);
    }
}`;

export const phpSnippetBasic = `<?php
function isValidSSN($ssn) {
    return preg_match("/${regexBasic}/", $ssn);
}`;

export const testCasesBasic: TestCase[] = [
  { pattern: "123-45-6789", isValid: true },
  { pattern: "234-56-7890", isValid: true },
  { pattern: "456-78-9012", isValid: true },
  { pattern: "987-65-4321", isValid: true },
  { pattern: "800-12-3456", isValid: true },
  { pattern: "000-12-3456", isValid: true },  // Different from strict validation
  { pattern: "666-12-3456", isValid: true },  // Different from strict validation
  { pattern: "900-12-3456", isValid: true },  // Different from strict validation
  { pattern: "999-12-3456", isValid: true },  // Different from strict validation
  { pattern: "123-00-4567", isValid: true },  // Different from strict validation
  { pattern: "123-45-0000", isValid: true },  // Different from strict validation
  { pattern: "12-34-5678", isValid: false },
  { pattern: "1234-56-789", isValid: false },
  { pattern: "123456789", isValid: false },
  { pattern: "123-456-789", isValid: false },
  { pattern: "", isValid: false },
  { pattern: "abc-de-fghi", isValid: false },
  { pattern: "123-45-67890", isValid: false },
  { pattern: "123.45.6789", isValid: false },
];
