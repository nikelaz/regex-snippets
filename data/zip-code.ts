import type TestCase from "../types/test-case";

export const regex = `^\\d{5}(?:-\\d{4})?$`;

export const jsSnippet = `
const zipCodeRegex = /${regex}/;
const isValidZipCode = (zipCode) => zipCodeRegex.test(zipCode);
`;

export const pySnippet = `
import re

def is_valid_zip_code(zipCode):
  zipCodeRegex = r"${regex}"
  return re.match(zipCodeRegex, zipCode) is not None
`;

export const rustSnippet = `
use regex::Regex;

fn is_valid_zip_code(zip_code: &str) -> bool {
  let zipCodeRegex = Regex::new("${regex}")
    .expect("Could not parse zip code validation regex");
  zipCodeRegex.is_match(zip_code)
}
`;

export const goSnippet = `
package main

import (
  "regexp"
)

func isValidZipCode(zipCode string) bool {
  zipCodeRegex := "${regex}"
  re := regexp.MustCompile(zipCodeRegex)
  return re.MatchString(zipCode)
}
`;

export const swiftSnippet = `
import Foundation

func isValidZipCode(_ zipCode: String) -> Bool {
  let zipCodeRegex = "${regex}"
  return NSPredicate(format: "SELF MATCHES %@", zipCodeRegex).evaluate(with: zipCode)
}
`;

export const csharpSnippet = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidZipCode(string zipCode) {
    string zipCodeRegex = "${regex}";
    return Regex.IsMatch(zipCode, zipCodeRegex);
  }
}
`;

export const javaSnippet = `
import java.util.regex.*;

public class Application {
  public static boolean isValidZipCode(String zipCode) {
    String zipCodeRegex = "${regex}";
    Pattern pattern = Pattern.compile(zipCodeRegex);
    Matcher matcher = pattern.matcher(zipCode);
    return matcher.matches();
  }
}
`;

export const phpSnippet = `
<?php
function isValidZipCode($zipCode) {
  $zipCodeRegex = "${regex}";
  return preg_match("/" . $zipCodeRegex . "/", $zipCode);
}
?>
`;

export const testCases: TestCase[] = [
  { pattern: "12345", isValid: true },
  { pattern: "12345-6789", isValid: true },
  { pattern: "90210", isValid: true },
  { pattern: "00501", isValid: true },
  { pattern: "99950-0001", isValid: true },
  { pattern: "1234", isValid: false },
  { pattern: "123456", isValid: false },
  { pattern: "12345-", isValid: false },
  { pattern: "12345-678", isValid: false },
  { pattern: "12345-67890", isValid: false },
  { pattern: "abcde", isValid: false },
  { pattern: "12 345", isValid: false },
  { pattern: "12-345", isValid: false },
  { pattern: "", isValid: false },
  { pattern: "-1234", isValid: false },
  { pattern: "12345-abcd", isValid: false },
];
