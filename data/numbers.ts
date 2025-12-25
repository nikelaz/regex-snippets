import type TestCase from "../types/test-case";

export const regexInteger = `^-?\\d+$`;
export const regexDecimal = `^-?\\d+(\\.\\d+)?$`;
export const regexPositiveInteger = `^\\d+$`;

export const jsSnippetInteger = `
const integerRegex = /${regexInteger}/;
const isValidInteger = (number) => integerRegex.test(number);
`;

export const pySnippetInteger = `
import re

def is_valid_integer(number):
  integerRegex = r"${regexInteger}"
  return re.match(integerRegex, number) is not None
`;

export const rustSnippetInteger = `
use regex::Regex;

fn is_valid_integer(number: &str) -> bool {
  let integerRegex = Regex::new("${regexInteger}")
    .expect("Could not parse integer validation regex");
  integerRegex.is_match(number)
}
`;

export const goSnippetInteger = `
package main

import (
  "regexp"
)

func isValidInteger(number string) bool {
  integerRegex := "${regexInteger}"
  re := regexp.MustCompile(integerRegex)
  return re.MatchString(number)
}
`;

export const swiftSnippetInteger = `
import Foundation

func isValidInteger(_ number: String) -> Bool {
  let integerRegex = "${regexInteger}"
  return NSPredicate(format: "SELF MATCHES %@", integerRegex).evaluate(with: number)
}
`;

export const csharpSnippetInteger = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidInteger(string number) {
    string integerRegex = "${regexInteger}";
    return Regex.IsMatch(number, integerRegex);
  }
}
`;

export const javaSnippetInteger = `
import java.util.regex.*;

public class Application {
  public static boolean isValidInteger(String number) {
    String integerRegex = "${regexInteger}";
    Pattern pattern = Pattern.compile(integerRegex);
    Matcher matcher = pattern.matcher(number);
    return matcher.matches();
  }
}
`;

export const phpSnippetInteger = `
<?php
function isValidInteger($number) {
  $integerRegex = "${regexInteger}";
  return preg_match("/" . $integerRegex . "/", $number);
}
?>
`;

export const testCasesInteger: TestCase[] = [
  { pattern: "123", isValid: true },
  { pattern: "-456", isValid: true },
  { pattern: "0", isValid: true },
  { pattern: "-0", isValid: true },
  { pattern: "1000000", isValid: true },
  { pattern: "12.34", isValid: false },
  { pattern: "12.0", isValid: false },
  { pattern: "abc", isValid: false },
  { pattern: "12a", isValid: false },
  { pattern: "", isValid: false },
  { pattern: "+123", isValid: false },
  { pattern: "1,234", isValid: false },
  { pattern: "1 234", isValid: false },
  { pattern: "--123", isValid: false },
];

export const jsSnippetDecimal = `
const decimalRegex = /${regexDecimal}/;
const isValidDecimal = (number) => decimalRegex.test(number);
`;

export const pySnippetDecimal = `
import re

def is_valid_decimal(number):
  decimalRegex = r"${regexDecimal}"
  return re.match(decimalRegex, number) is not None
`;

export const rustSnippetDecimal = `
use regex::Regex;

fn is_valid_decimal(number: &str) -> bool {
  let decimalRegex = Regex::new("${regexDecimal}")
    .expect("Could not parse decimal validation regex");
  decimalRegex.is_match(number)
}
`;

export const goSnippetDecimal = `
package main

import (
  "regexp"
)

func isValidDecimal(number string) bool {
  decimalRegex := "${regexDecimal}"
  re := regexp.MustCompile(decimalRegex)
  return re.MatchString(number)
}
`;

export const swiftSnippetDecimal = `
import Foundation

func isValidDecimal(_ number: String) -> Bool {
  let decimalRegex = "${regexDecimal}"
  return NSPredicate(format: "SELF MATCHES %@", decimalRegex).evaluate(with: number)
}
`;

export const csharpSnippetDecimal = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidDecimal(string number) {
    string decimalRegex = "${regexDecimal}";
    return Regex.IsMatch(number, decimalRegex);
  }
}
`;

export const javaSnippetDecimal = `
import java.util.regex.*;

public class Application {
  public static boolean isValidDecimal(String number) {
    String decimalRegex = "${regexDecimal}";
    Pattern pattern = Pattern.compile(decimalRegex);
    Matcher matcher = pattern.matcher(number);
    return matcher.matches();
  }
}
`;

export const phpSnippetDecimal = `
<?php
function isValidDecimal($number) {
  $decimalRegex = "${regexDecimal}";
  return preg_match("/" . $decimalRegex . "/", $number);
}
?>
`;

export const testCasesDecimal: TestCase[] = [
  { pattern: "123", isValid: true },
  { pattern: "123.45", isValid: true },
  { pattern: "-456", isValid: true },
  { pattern: "-456.78", isValid: true },
  { pattern: "0", isValid: true },
  { pattern: "0.0", isValid: true },
  { pattern: "-0.5", isValid: true },
  { pattern: "1000000.999", isValid: true },
  { pattern: "abc", isValid: false },
  { pattern: "12a", isValid: false },
  { pattern: "", isValid: false },
  { pattern: "+123.45", isValid: false },
  { pattern: "1,234.56", isValid: false },
  { pattern: "1 234.56", isValid: false },
  { pattern: ".5", isValid: false },
  { pattern: "123.", isValid: false },
  { pattern: "12.34.56", isValid: false },
];
