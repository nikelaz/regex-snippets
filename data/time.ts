import type TestCase from "../types/test-case";

export const regex = `^(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d)?$`;

export const jsSnippet = `
const time24Regex = /${regex}/;
const isValidTime = (time) => time24Regex.test(time);
`;

export const pySnippet = `
import re

def is_valid_time(time):
  time24Regex = r"${regex}"
  return re.match(time24Regex, time) is not None
`;

export const rustSnippet = `
use regex::Regex;

fn is_valid_time(time: &str) -> bool {
  let time24Regex = Regex::new("${regex}")
    .expect("Could not parse time validation regex");
  time24Regex.is_match(time)
}
`;

export const goSnippet = `
package main

import (
  "regexp"
)

func isValidTime(time string) bool {
  time24Regex := "${regex}"
  re := regexp.MustCompile(time24Regex)
  return re.MatchString(time)
}
`;

export const swiftSnippet = `
import Foundation

func isValidTime(_ time: String) -> Bool {
  let time24Regex = "${regex}"
  return NSPredicate(format: "SELF MATCHES %@", time24Regex).evaluate(with: time)
}
`;

export const csharpSnippet = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidTime(string time) {
    string time24Regex = "${regex}";
    return Regex.IsMatch(time, time24Regex);
  }
}
`;

export const javaSnippet = `
import java.util.regex.*;

public class Application {
  public static boolean isValidTime(String time) {
    String time24Regex = "${regex}";
    Pattern pattern = Pattern.compile(time24Regex);
    Matcher matcher = pattern.matcher(time);
    return matcher.matches();
  }
}
`;

export const phpSnippet = `
<?php
function isValidTime($time) {
  $time24Regex = "${regex}";
  return preg_match("/" . $time24Regex . "/", $time);
}
?>
`;

export const testCases: TestCase[] = [
  { pattern: "00:00", isValid: true },
  { pattern: "00:00:00", isValid: true },
  { pattern: "09:30", isValid: true },
  { pattern: "09:30:45", isValid: true },
  { pattern: "12:00", isValid: true },
  { pattern: "12:00:00", isValid: true },
  { pattern: "23:59", isValid: true },
  { pattern: "23:59:59", isValid: true },
  { pattern: "13:45:30", isValid: true },
  { pattern: "00:59:59", isValid: true },
  { pattern: "24:00", isValid: false },
  { pattern: "25:00", isValid: false },
  { pattern: "12:60", isValid: false },
  { pattern: "12:30:60", isValid: false },
  { pattern: "9:30", isValid: false },
  { pattern: "09:5", isValid: false },
  { pattern: "9:5", isValid: false },
  { pattern: "12:00 PM", isValid: false },
  { pattern: "1200", isValid: false },
  { pattern: "12:", isValid: false },
  { pattern: ":30", isValid: false },
  { pattern: "12:30:5", isValid: false },
  { pattern: "", isValid: false },
];

// 12-hour format
export const regex12 = `^(?:0?[1-9]|1[0-2]):[0-5]\\d(?::[0-5]\\d)?\\s?[AaPp][Mm]$`;

export const jsSnippet12 = `const time12Regex = /${regex12}/;
const isValidTime = (time) => time12Regex.test(time);`;

export const pySnippet12 = `import re

time12_regex = r'${regex12}'

def is_valid_time(time):
    return bool(re.match(time12_regex, time))`;

export const rustSnippet12 = `use regex::Regex;

fn is_valid_time(time: &str) -> bool {
    let re = Regex::new(r"${regex12}").unwrap();
    re.is_match(time)
}`;

export const goSnippet12 = `package main

import (
    "regexp"
)

func isValidTime(time string) bool {
    time12Regex := "${regex12}"
    re := regexp.MustCompile(time12Regex)
    return re.MatchString(time)
}`;

export const swiftSnippet12 = `import Foundation

func isValidTime(_ time: String) -> Bool {
    let time12Regex = "${regex12}"
    return NSPredicate(format: "SELF MATCHES %@", time12Regex).evaluate(with: time)
}`;

export const csharpSnippet12 = `using System;
using System.Text.RegularExpressions;

class Program {
    static bool IsValidTime(string time) {
        return Regex.IsMatch(time, @"${regex12}");
    }
}`;

export const javaSnippet12 = `import java.util.regex.*;

public class Application {
    public static boolean isValidTime(String time) {
        return Pattern.matches("${regex12}", time);
    }
}`;

export const phpSnippet12 = `<?php
function isValidTime($time) {
    return preg_match("/${regex12}/", $time);
}`;

export const testCases12: TestCase[] = [
  { pattern: "12:00 AM", isValid: true },
  { pattern: "12:00 PM", isValid: true },
  { pattern: "1:00 AM", isValid: true },
  { pattern: "1:00 PM", isValid: true },
  { pattern: "01:00 AM", isValid: true },
  { pattern: "01:00 PM", isValid: true },
  { pattern: "9:30 AM", isValid: true },
  { pattern: "09:30 PM", isValid: true },
  { pattern: "12:59 AM", isValid: true },
  { pattern: "11:59 PM", isValid: true },
  { pattern: "12:00:00 AM", isValid: true },
  { pattern: "11:59:59 PM", isValid: true },
  { pattern: "1:30:45 PM", isValid: true },
  { pattern: "12:00AM", isValid: true },
  { pattern: "12:00PM", isValid: true },
  { pattern: "12:00 am", isValid: true },
  { pattern: "12:00 pm", isValid: true },
  { pattern: "00:00 AM", isValid: false },
  { pattern: "13:00 PM", isValid: false },
  { pattern: "12:60 PM", isValid: false },
  { pattern: "12:30:60 PM", isValid: false },
  { pattern: "12:00", isValid: false },
  { pattern: "1:00", isValid: false },
  { pattern: "12:00 XM", isValid: false },
  { pattern: "", isValid: false },
];
