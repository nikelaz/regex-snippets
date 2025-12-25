import type TestCase from "../types/test-case";

export const regex = `^(y|yes|yeah|yep|yup|true|t|ok|okay|sure|affirmative|1|on|enable|enabled|accept|accepted|confirm|confirmed|agree|agreed)$`;

export const jsSnippet = `
const affirmationRegex = /^(y|yes|yeah|yep|yup|true|t|ok|okay|sure|affirmative|1|on|enable|enabled|accept|accepted|confirm|confirmed|agree|agreed)$/i;
const isAffirmation = (input) => affirmationRegex.test(input);
`;

export const pySnippet = `
import re

def is_affirmation(input):
  affirmationRegex = r"${regex}"
  return re.fullmatch(affirmationRegex, input, re.IGNORECASE) is not None
`;

export const rustSnippet = `
use regex::Regex;

fn is_affirmation(input: &str) -> bool {
  let affirmationRegex = Regex::new("(?i)${regex}")
    .expect("Could not parse affirmation validation regex");
  affirmationRegex.is_match(input)
}
`;

export const goSnippet = `
package main

import (
  "regexp"
)

func isAffirmation(input string) bool {
  affirmationRegex := "(?i)${regex}"
  re := regexp.MustCompile(affirmationRegex)
  return re.MatchString(input)
}
`;

export const swiftSnippet = `
import Foundation

func isAffirmation(_ input: String) -> Bool {
  let affirmationRegex = "${regex}"
  return NSPredicate(format: "SELF MATCHES[c] %@", affirmationRegex).evaluate(with: input)
}
`;

export const csharpSnippet = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsAffirmation(string input) {
    string affirmationRegex = "${regex}";
    return Regex.IsMatch(input, affirmationRegex, RegexOptions.IgnoreCase);
  }
}
`;

export const javaSnippet = `
import java.util.regex.*;

public class Application {
  public static boolean isAffirmation(String input) {
    String affirmationRegex = "${regex}";
    Pattern pattern = Pattern.compile(affirmationRegex, Pattern.CASE_INSENSITIVE);
    Matcher matcher = pattern.matcher(input);
    return matcher.matches();
  }
}
`;

export const phpSnippet = `
<?php
function isAffirmation($input) {
  $affirmationRegex = "${regex}";
  return preg_match("/" . $affirmationRegex . "/i", $input);
}
?>
`;

export const testCases: TestCase[] = [
  { pattern: "yes", isValid: true },
  { pattern: "Yes", isValid: true },
  { pattern: "YES", isValid: true },
  { pattern: "y", isValid: true },
  { pattern: "Y", isValid: true },
  { pattern: "true", isValid: true },
  { pattern: "True", isValid: true },
  { pattern: "TRUE", isValid: true },
  { pattern: "t", isValid: true },
  { pattern: "T", isValid: true },
  { pattern: "ok", isValid: true },
  { pattern: "OK", isValid: true },
  { pattern: "okay", isValid: true },
  { pattern: "Okay", isValid: true },
  { pattern: "yeah", isValid: true },
  { pattern: "yep", isValid: true },
  { pattern: "yup", isValid: true },
  { pattern: "sure", isValid: true },
  { pattern: "affirmative", isValid: true },
  { pattern: "1", isValid: true },
  { pattern: "on", isValid: true },
  { pattern: "On", isValid: true },
  { pattern: "ON", isValid: true },
  { pattern: "enable", isValid: true },
  { pattern: "enabled", isValid: true },
  { pattern: "accept", isValid: true },
  { pattern: "accepted", isValid: true },
  { pattern: "confirm", isValid: true },
  { pattern: "confirmed", isValid: true },
  { pattern: "agree", isValid: true },
  { pattern: "agreed", isValid: true },
  { pattern: "no", isValid: false },
  { pattern: "n", isValid: false },
  { pattern: "false", isValid: false },
  { pattern: "f", isValid: false },
  { pattern: "0", isValid: false },
  { pattern: "off", isValid: false },
  { pattern: "disable", isValid: false },
  { pattern: "disabled", isValid: false },
  { pattern: "reject", isValid: false },
  { pattern: "decline", isValid: false },
  { pattern: "maybe", isValid: false },
  { pattern: "yess", isValid: false },
  { pattern: "", isValid: false },
];
