import type TestCase from "../types/test-case";

// Line range validation (5-20 lines)
export const regexRange = `^(?:[^\\n]*\\n){4,19}[^\\n]*$`;
// Minimum lines validation (5+ lines)
export const regexMin = `^(?:[^\\n]*\\n){4,}[^\\n]*$`;
// Maximum lines validation (0-20 lines)
export const regexMax = `^(?:[^\\n]*\\n){0,19}[^\\n]*$`;

export const jsSnippetRange = `
const lineRangeRegex = /${regexRange}/;
const isValidLineCount = (text) => lineRangeRegex.test(text);

// For configurable min/max:
function validateLineCount(text, min, max) {
  const lines = text.split('\\n').length;
  return lines >= min && lines <= max;
}
`;

export const pySnippetRange = `
import re

def is_valid_line_count(text):
  lineRangeRegex = r"${regexRange}"
  return re.match(lineRangeRegex, text, re.MULTILINE) is not None

# For configurable min/max:
def validate_line_count(text, min_lines, max_lines):
  lines = text.count('\\n') + 1
  return min_lines <= lines <= max_lines
`;

export const rustSnippetRange = `
use regex::Regex;

fn is_valid_line_count(text: &str) -> bool {
  let lineRangeRegex = Regex::new("${regexRange}")
    .expect("Could not parse line count validation regex");
  lineRangeRegex.is_match(text)
}

// For configurable min/max:
fn validate_line_count(text: &str, min_lines: usize, max_lines: usize) -> bool {
  let lines = text.lines().count();
  lines >= min_lines && lines <= max_lines
}
`;

export const goSnippetRange = `
package main

import (
  "regexp"
  "strings"
)

func isValidLineCount(text string) bool {
  lineRangeRegex := \`${regexRange}\`
  re := regexp.MustCompile(lineRangeRegex)
  return re.MatchString(text)
}

// For configurable min/max:
func validateLineCount(text string, minLines, maxLines int) bool {
  lines := strings.Count(text, "\\n") + 1
  return lines >= minLines && lines <= maxLines
}
`;

export const swiftSnippetRange = `
import Foundation

func isValidLineCount(_ text: String) -> Bool {
  let lineRangeRegex = "${regexRange}"
  return NSPredicate(format: "SELF MATCHES %@", lineRangeRegex).evaluate(with: text)
}

// For configurable min/max:
func validateLineCount(_ text: String, minLines: Int, maxLines: Int) -> Bool {
  let lines = text.components(separatedBy: "\\n").count
  return lines >= minLines && lines <= maxLines
}
`;

export const csharpSnippetRange = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidLineCount(string text) {
    string lineRangeRegex = "${regexRange}";
    return Regex.IsMatch(text, lineRangeRegex);
  }
  
  // For configurable min/max:
  static bool ValidateLineCount(string text, int minLines, int maxLines) {
    int lines = text.Split('\\n').Length;
    return lines >= minLines && lines <= maxLines;
  }
}
`;

export const javaSnippetRange = `
import java.util.regex.*;

public class Application {
  public static boolean isValidLineCount(String text) {
    String lineRangeRegex = "${regexRange}";
    Pattern pattern = Pattern.compile(lineRangeRegex);
    Matcher matcher = pattern.matcher(text);
    return matcher.matches();
  }
  
  // For configurable min/max:
  public static boolean validateLineCount(String text, int minLines, int maxLines) {
    int lines = text.split("\\n").length;
    return lines >= minLines && lines <= maxLines;
  }
}
`;

export const phpSnippetRange = `
<?php
function isValidLineCount($text) {
  $lineRangeRegex = "${regexRange}";
  return preg_match("/" . $lineRangeRegex . "/", $text);
}

// For configurable min/max:
function validateLineCount($text, $minLines, $maxLines) {
  $lines = substr_count($text, "\\n") + 1;
  return $lines >= $minLines && $lines <= $maxLines;
}
?>
`;

export const testCasesRange: TestCase[] = [
  { pattern: "Line 1\nLine 2\nLine 3\nLine 4\nLine 5", isValid: true },
  { pattern: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10", isValid: true },
  { pattern: "A\nB\nC\nD\nE\nF\nG\nH\nI\nJ\nK\nL\nM\nN\nO\nP\nQ\nR\nS\nT", isValid: true },
  { pattern: "Single line", isValid: false },
  { pattern: "Line 1\nLine 2\nLine 3\nLine 4", isValid: false },
  { pattern: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21", isValid: false },
  { pattern: "", isValid: false },
  { pattern: "First\n\nThird\nFourth\nFifth", isValid: true },
];

export const jsSnippetMin = `
const minLinesRegex = /${regexMin}/;
const isValidLineCount = (text) => minLinesRegex.test(text);
`;

export const pySnippetMin = `
import re

def is_valid_line_count(text):
  minLinesRegex = r"${regexMin}"
  return re.match(minLinesRegex, text, re.MULTILINE) is not None
`;

export const rustSnippetMin = `
use regex::Regex;

fn is_valid_line_count(text: &str) -> bool {
  let minLinesRegex = Regex::new("${regexMin}")
    .expect("Could not parse line count validation regex");
  minLinesRegex.is_match(text)
}
`;

export const goSnippetMin = `
package main

import (
  "regexp"
)

func isValidLineCount(text string) bool {
  minLinesRegex := \`${regexMin}\`
  re := regexp.MustCompile(minLinesRegex)
  return re.MatchString(text)
}
`;

export const swiftSnippetMin = `
import Foundation

func isValidLineCount(_ text: String) -> Bool {
  let minLinesRegex = "${regexMin}"
  return NSPredicate(format: "SELF MATCHES %@", minLinesRegex).evaluate(with: text)
}
`;

export const csharpSnippetMin = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidLineCount(string text) {
    string minLinesRegex = "${regexMin}";
    return Regex.IsMatch(text, minLinesRegex);
  }
}
`;

export const javaSnippetMin = `
import java.util.regex.*;

public class Application {
  public static boolean isValidLineCount(String text) {
    String minLinesRegex = "${regexMin}";
    Pattern pattern = Pattern.compile(minLinesRegex);
    Matcher matcher = pattern.matcher(text);
    return matcher.matches();
  }
}
`;

export const phpSnippetMin = `
<?php
function isValidLineCount($text) {
  $minLinesRegex = "${regexMin}";
  return preg_match("/" . $minLinesRegex . "/", $text);
}
?>
`;

export const testCasesMin: TestCase[] = [
  { pattern: "Line 1\nLine 2\nLine 3\nLine 4\nLine 5", isValid: true },
  { pattern: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10", isValid: true },
  { pattern: "A\nB\nC\nD\nE\nF\nG\nH\nI\nJ\nK\nL\nM\nN\nO\nP\nQ\nR\nS\nT\nU\nV\nW\nX\nY\nZ", isValid: true },
  { pattern: "Line 1\nLine 2\nLine 3\nLine 4", isValid: false },
  { pattern: "Single line", isValid: false },
  { pattern: "", isValid: false },
  { pattern: "1\n2\n3", isValid: false },
];

export const jsSnippetMax = `
const maxLinesRegex = /${regexMax}/;
const isValidLineCount = (text) => maxLinesRegex.test(text);
`;

export const pySnippetMax = `
import re

def is_valid_line_count(text):
  maxLinesRegex = r"${regexMax}"
  return re.match(maxLinesRegex, text, re.MULTILINE) is not None
`;

export const rustSnippetMax = `
use regex::Regex;

fn is_valid_line_count(text: &str) -> bool {
  let maxLinesRegex = Regex::new("${regexMax}")
    .expect("Could not parse line count validation regex");
  maxLinesRegex.is_match(text)
}
`;

export const goSnippetMax = `
package main

import (
  "regexp"
)

func isValidLineCount(text string) bool {
  maxLinesRegex := \`${regexMax}\`
  re := regexp.MustCompile(maxLinesRegex)
  return re.MatchString(text)
}
`;

export const swiftSnippetMax = `
import Foundation

func isValidLineCount(_ text: String) -> Bool {
  let maxLinesRegex = "${regexMax}"
  return NSPredicate(format: "SELF MATCHES %@", maxLinesRegex).evaluate(with: text)
}
`;

export const csharpSnippetMax = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidLineCount(string text) {
    string maxLinesRegex = "${regexMax}";
    return Regex.IsMatch(text, maxLinesRegex);
  }
}
`;

export const javaSnippetMax = `
import java.util.regex.*;

public class Application {
  public static boolean isValidLineCount(String text) {
    String maxLinesRegex = "${regexMax}";
    Pattern pattern = Pattern.compile(maxLinesRegex);
    Matcher matcher = pattern.matcher(text);
    return matcher.matches();
  }
}
`;

export const phpSnippetMax = `
<?php
function isValidLineCount($text) {
  $maxLinesRegex = "${regexMax}";
  return preg_match("/" . $maxLinesRegex . "/", $text);
}
?>
`;

export const testCasesMax: TestCase[] = [
  { pattern: "", isValid: true },
  { pattern: "Single line", isValid: true },
  { pattern: "Line 1\nLine 2\nLine 3\nLine 4\nLine 5", isValid: true },
  { pattern: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20", isValid: true },
  { pattern: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21", isValid: false },
  { pattern: "A\nB\nC\nD\nE\nF\nG\nH\nI\nJ\nK\nL\nM\nN\nO\nP\nQ\nR\nS\nT\nU\nV\nW\nX\nY\nZ", isValid: false },
];
