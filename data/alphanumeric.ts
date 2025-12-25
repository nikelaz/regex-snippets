import type TestCase from "../types/test-case";

export const regex = `^[a-zA-Z0-9]+$`;

export const jsSnippet = `
const regex = /${regex}/;
const isValidAlphanumeric = (input) => regex.test(input);
`;

export const pySnippet = `
import re

def is_valid_alphanumeric(input):
  regex = r"${regex}"
  return re.match(regex, input) is not None
`;

export const rustSnippet = `
use regex::Regex;

fn is_valid_alphanumeric(pattern: &str) -> bool {
  let regex = Regex::new("${regex}")
    .expect("Could not parse alphanumeric validation regex");
  regex.is_match(input)
}
`;

export const goSnippet = `
package main

import (
  "regexp"
)

func isValidAlphanumeric(input string) bool {
  regex := "${regex}"
  re := regexp.MustCompile(regex)
  return re.MatchString(input)
}
`;

export const swiftSnippet = `
import Foundation

func isValidAlphanumeric(_ pattern: String) -> Bool {
  let regex = "${regex}"
  return NSPredicate(format: "SELF MATCHES %@", regex).evaluate(with: input)
}
`;

export const csharpSnippet = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidAlphanumeric(string input) {
    string regex = "${regex}";
    return Regex.IsMatch(input, regex);
  }
}
`;

export const javaSnippet = `
import java.util.regex.*;

public class Application {
  public static boolean isValidAlphanumeric(String input) {
    String regex = "${regex}";
    Pattern pattern = Pattern.compile(regex);
    Matcher matcher = pattern.matcher(input);
    return matcher.matches();
  }
}
`;

export const phpSnippet = `
<?php
function isValidAlphanumeric($input) {
  $regex = "${regex}";
  return preg_match("/" . $regex . "/", $input);
}
?>
`;

export const testCases: TestCase[] = [
  { pattern: "abc123", isValid: true },
  { pattern: "ABC", isValid: true },
  { pattern: "123", isValid: true },
  { pattern: "Test123", isValid: true },
  { pattern: "a1b2c3", isValid: true },
  { pattern: "0", isValid: true },
  { pattern: "Z", isValid: true },
  { pattern: "" , isValid: false },
  { pattern: "abc-123", isValid: false },
  { pattern: "abc_123", isValid: false },
  { pattern: "abc 123", isValid: false },
  { pattern: "abc.123", isValid: false },
  { pattern: "abc@123", isValid: false },
  { pattern: "hello world", isValid: false },
  { pattern: "test!", isValid: false },
  { pattern: "user@domain", isValid: false },
  { pattern: "ñoño", isValid: false },
  { pattern: "café", isValid: false },
  { pattern: "你好", isValid: false },
  { pattern: "привет", isValid: false },
];
