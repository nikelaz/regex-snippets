import type TestCase from "../types/test-case";

export const regex = `^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$`;
export const regexWithAlpha = `^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$`;

export const jsSnippet = `
const hexColorRegex = /${regex}/;
const isValidHexColor = (color) => hexColorRegex.test(color);
`;

export const pySnippet = `
import re

def is_valid_hex_color(color):
  hex_color_regex = r"${regex}"
  return re.match(hex_color_regex, color) is not None
`;

export const rustSnippet = `
use regex::Regex;

fn is_valid_hex_color(color: &str) -> bool {
  let hex_color_regex = Regex::new("${regex}")
    .expect("Could not parse hex color validation regex");
  hex_color_regex.is_match(color)
}
`;

export const goSnippet = `
package main

import (
  "regexp"
)

func isValidHexColor(color string) bool {
  hexColorRegex := "${regex}"
  re := regexp.MustCompile(hexColorRegex)
  return re.MatchString(color)
}
`;

export const swiftSnippet = `
import Foundation

func isValidHexColor(_ color: String) -> Bool {
  let hexColorRegex = "${regex}"
  return NSPredicate(format: "SELF MATCHES %@", hexColorRegex).evaluate(with: color)
}
`;

export const csharpSnippet = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidHexColor(string color) {
    string hexColorRegex = "${regex}";
    return Regex.IsMatch(color, hexColorRegex);
  }
}
`;

export const javaSnippet = `
import java.util.regex.*;

public class Application {
  public static boolean isValidHexColor(String color) {
    String hexColorRegex = "${regex}";
    Pattern pattern = Pattern.compile(hexColorRegex);
    Matcher matcher = pattern.matcher(color);
    return matcher.matches();
  }
}
`;

export const phpSnippet = `
<?php
function isValidHexColor($color) {
  $hexColorRegex = "${regex}";
  return preg_match("/" . $hexColorRegex . "/", $color);
}
?>
`;

export const jsSnippetWithAlpha = `
const hexColorAlphaRegex = /${regexWithAlpha}/;
const isValidHexColorWithAlpha = (color) => hexColorAlphaRegex.test(color);
`;

export const pySnippetWithAlpha = `
import re

def is_valid_hex_color_with_alpha(color):
  hex_color_alpha_regex = r"${regexWithAlpha}"
  return re.match(hex_color_alpha_regex, color) is not None
`;

export const rustSnippetWithAlpha = `
use regex::Regex;

fn is_valid_hex_color_with_alpha(color: &str) -> bool {
  let hex_color_alpha_regex = Regex::new("${regexWithAlpha}")
    .expect("Could not parse alpha hex color validation regex");
  hex_color_alpha_regex.is_match(color)
}
`;

export const goSnippetWithAlpha = `
package main

import (
  "regexp"
)

func isValidHexColorWithAlpha(color string) bool {
  hexColorAlphaRegex := "${regexWithAlpha}"
  re := regexp.MustCompile(hexColorAlphaRegex)
  return re.MatchString(color)
}
`;

export const swiftSnippetWithAlpha = `
import Foundation

func isValidHexColorWithAlpha(_ color: String) -> Bool {
  let hexColorAlphaRegex = "${regexWithAlpha}"
  return NSPredicate(format: "SELF MATCHES %@", hexColorAlphaRegex).evaluate(with: color)
}
`;

export const csharpSnippetWithAlpha = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidHexColorWithAlpha(string color) {
    string hexColorAlphaRegex = "${regexWithAlpha}";
    return Regex.IsMatch(color, hexColorAlphaRegex);
  }
}
`;

export const javaSnippetWithAlpha = `
import java.util.regex.*;

public class Application {
  public static boolean isValidHexColorWithAlpha(String color) {
    String hexColorAlphaRegex = "${regexWithAlpha}";
    Pattern pattern = Pattern.compile(hexColorAlphaRegex);
    Matcher matcher = pattern.matcher(color);
    return matcher.matches();
  }
}
`;

export const phpSnippetWithAlpha = `
<?php
function isValidHexColorWithAlpha($color) {
  $hexColorAlphaRegex = "${regexWithAlpha}";
  return preg_match("/" . $hexColorAlphaRegex . "/", $color);
}
?>
`;

export const testCases: TestCase[] = [
  { pattern: "#000", isValid: true },
  { pattern: "#fff", isValid: true },
  { pattern: "#1a2", isValid: true },
  { pattern: "#1A2B3C", isValid: true },
  { pattern: "#abcdef", isValid: true },
  { pattern: "#ABCDEF", isValid: true },
  { pattern: "#123456", isValid: true },
  { pattern: "123456", isValid: false },
  { pattern: "#12", isValid: false },
  { pattern: "#1234", isValid: false },
  { pattern: "#12345", isValid: false },
  { pattern: "#1234567", isValid: false },
  { pattern: "#GGG", isValid: false },
  { pattern: "#12G45F", isValid: false },
  { pattern: "#abcdex", isValid: false },
  { pattern: " #fff", isValid: false },
  { pattern: "#fff ", isValid: false },
  { pattern: "", isValid: false },
];

export const testCasesWithAlpha: TestCase[] = [
  { pattern: "#000", isValid: true },
  { pattern: "#fff", isValid: true },
  { pattern: "#123456", isValid: true },
  { pattern: "#00000000", isValid: true },
  { pattern: "#FFFFFFFF", isValid: true },
  { pattern: "#1A2B3C7F", isValid: true },
  { pattern: "#abcdef99", isValid: true },
  { pattern: "#123456FF", isValid: true },
  { pattern: "#12", isValid: false },
  { pattern: "#1234", isValid: false },
  { pattern: "#1234567", isValid: false },
  { pattern: "#123456789", isValid: false },
  { pattern: "#GGGGGGGG", isValid: false },
  { pattern: "#GGG", isValid: false },
  { pattern: "#12G45F99", isValid: false },
  { pattern: " #00000000", isValid: false },
  { pattern: "#00000000 ", isValid: false },
  { pattern: "", isValid: false },
];
