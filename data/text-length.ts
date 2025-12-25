import type TestCase from "../types/test-case";

export const regexRange = `^.{8,32}$`;
export const regexMin = `^.{8,}$`;
export const regexMax = `^.{0,32}$`;

export const jsSnippetRange = `
const lengthRangeRegex = /${regexRange}/;
const isValidLength = (text) => lengthRangeRegex.test(text);
`;

export const pySnippetRange = `
import re

def is_valid_length(text):
  lengthRangeRegex = r"${regexRange}"
  return re.match(lengthRangeRegex, text) is not None
`;

export const rustSnippetRange = `
use regex::Regex;

fn is_valid_length(text: &str) -> bool {
  let lengthRangeRegex = Regex::new("${regexRange}")
    .expect("Could not parse length validation regex");
  lengthRangeRegex.is_match(text)
}
`;

export const goSnippetRange = `
package main

import (
  "regexp"
)

func isValidLength(text string) bool {
  lengthRangeRegex := "${regexRange}"
  re := regexp.MustCompile(lengthRangeRegex)
  return re.MatchString(text)
}
`;

export const swiftSnippetRange = `
import Foundation

func isValidLength(_ text: String) -> Bool {
  let lengthRangeRegex = "${regexRange}"
  return NSPredicate(format: "SELF MATCHES %@", lengthRangeRegex).evaluate(with: text)
}
`;

export const csharpSnippetRange = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidLength(string text) {
    string lengthRangeRegex = "${regexRange}";
    return Regex.IsMatch(text, lengthRangeRegex);
  }
}
`;

export const javaSnippetRange = `
import java.util.regex.*;

public class Application {
  public static boolean isValidLength(String text) {
    String lengthRangeRegex = "${regexRange}";
    Pattern pattern = Pattern.compile(lengthRangeRegex);
    Matcher matcher = pattern.matcher(text);
    return matcher.matches();
  }
}
`;

export const phpSnippetRange = `
<?php
function isValidLength($text) {
  $lengthRangeRegex = "${regexRange}";
  return preg_match("/" . $lengthRangeRegex . "/", $text);
}
?>
`;

export const testCasesRange: TestCase[] = [
  { pattern: "12345678", isValid: true },
  { pattern: "abcdefgh", isValid: true },
  { pattern: "Test1234", isValid: true },
  { pattern: "A1B2C3D4E5F6G7H8", isValid: true },
  { pattern: "12345678901234567890123456789012", isValid: true },
  { pattern: "1234567", isValid: false },
  { pattern: "abc", isValid: false },
  { pattern: "", isValid: false },
  { pattern: "123456789012345678901234567890123", isValid: false },
  { pattern: "This is a very long text that exceeds the maximum allowed length", isValid: false },
];

export const jsSnippetMin = `
const minLengthRegex = /${regexMin}/;
const isValidLength = (text) => minLengthRegex.test(text);
`;

export const pySnippetMin = `
import re

def is_valid_length(text):
  minLengthRegex = r"${regexMin}"
  return re.match(minLengthRegex, text) is not None
`;

export const rustSnippetMin = `
use regex::Regex;

fn is_valid_length(text: &str) -> bool {
  let minLengthRegex = Regex::new("${regexMin}")
    .expect("Could not parse length validation regex");
  minLengthRegex.is_match(text)
}
`;

export const goSnippetMin = `
package main

import (
  "regexp"
)

func isValidLength(text string) bool {
  minLengthRegex := "${regexMin}"
  re := regexp.MustCompile(minLengthRegex)
  return re.MatchString(text)
}
`;

export const swiftSnippetMin = `
import Foundation

func isValidLength(_ text: String) -> Bool {
  let minLengthRegex = "${regexMin}"
  return NSPredicate(format: "SELF MATCHES %@", minLengthRegex).evaluate(with: text)
}
`;

export const csharpSnippetMin = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidLength(string text) {
    string minLengthRegex = "${regexMin}";
    return Regex.IsMatch(text, minLengthRegex);
  }
}
`;

export const javaSnippetMin = `
import java.util.regex.*;

public class Application {
  public static boolean isValidLength(String text) {
    String minLengthRegex = "${regexMin}";
    Pattern pattern = Pattern.compile(minLengthRegex);
    Matcher matcher = pattern.matcher(text);
    return matcher.matches();
  }
}
`;

export const phpSnippetMin = `
<?php
function isValidLength($text) {
  $minLengthRegex = "${regexMin}";
  return preg_match("/" . $minLengthRegex . "/", $text);
}
?>
`;

export const testCasesMin: TestCase[] = [
  { pattern: "12345678", isValid: true },
  { pattern: "abcdefgh", isValid: true },
  { pattern: "Test1234", isValid: true },
  { pattern: "A very long text that is definitely more than 8 characters", isValid: true },
  { pattern: "12345678901234567890123456789012345678901234567890", isValid: true },
  { pattern: "1234567", isValid: false },
  { pattern: "abc", isValid: false },
  { pattern: "", isValid: false },
  { pattern: "short", isValid: false },
];

export const jsSnippetMax = `
const maxLengthRegex = /${regexMax}/;
const isValidLength = (text) => maxLengthRegex.test(text);
`;

export const pySnippetMax = `
import re

def is_valid_length(text):
  maxLengthRegex = r"${regexMax}"
  return re.match(maxLengthRegex, text) is not None
`;

export const rustSnippetMax = `
use regex::Regex;

fn is_valid_length(text: &str) -> bool {
  let maxLengthRegex = Regex::new("${regexMax}")
    .expect("Could not parse length validation regex");
  maxLengthRegex.is_match(text)
}
`;

export const goSnippetMax = `
package main

import (
  "regexp"
)

func isValidLength(text string) bool {
  maxLengthRegex := "${regexMax}"
  re := regexp.MustCompile(maxLengthRegex)
  return re.MatchString(text)
}
`;

export const swiftSnippetMax = `
import Foundation

func isValidLength(_ text: String) -> Bool {
  let maxLengthRegex = "${regexMax}"
  return NSPredicate(format: "SELF MATCHES %@", maxLengthRegex).evaluate(with: text)
}
`;

export const csharpSnippetMax = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidLength(string text) {
    string maxLengthRegex = "${regexMax}";
    return Regex.IsMatch(text, maxLengthRegex);
  }
}
`;

export const javaSnippetMax = `
import java.util.regex.*;

public class Application {
  public static boolean isValidLength(String text) {
    String maxLengthRegex = "${regexMax}";
    Pattern pattern = Pattern.compile(maxLengthRegex);
    Matcher matcher = pattern.matcher(text);
    return matcher.matches();
  }
}
`;

export const phpSnippetMax = `
<?php
function isValidLength($text) {
  $maxLengthRegex = "${regexMax}";
  return preg_match("/" . $maxLengthRegex . "/", $text);
}
?>
`;

export const testCasesMax: TestCase[] = [
  { pattern: "", isValid: true },
  { pattern: "a", isValid: true },
  { pattern: "12345678", isValid: true },
  { pattern: "Test1234", isValid: true },
  { pattern: "12345678901234567890123456789012", isValid: true },
  { pattern: "123456789012345678901234567890123", isValid: false },
  { pattern: "This is a very long text that exceeds the maximum allowed length", isValid: false },
  { pattern: "A very long text with more than thirty-two characters in total", isValid: false },
];
