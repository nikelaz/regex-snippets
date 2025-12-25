export const regex = `^\\d{4}[-/.]\\d{2}[-/.]\\d{2}$`;

export const jsSnippet = `const basicDateRegex = /${regex}/;
const isValidDate = (date) => basicDateRegex.test(date);`;

export const pySnippet = `import re

basic_date_regex = r'${regex}'

def is_valid_date(date):
    return bool(re.match(basic_date_regex, date))`;

export const rustSnippet = `use regex::Regex;

fn is_valid_date(pattern: &str) -> bool {
    let re = Regex::new(r"${regex}").unwrap();
    re.is_match(date)
}`;

export const goSnippet = `package main

import (
    "regexp"
)

func isValidDate(date string) bool {
    re := regexp.MustCompile(\`${regex}\`)
    return re.MatchString(date)
}`;

export const swiftSnippet = `import Foundation

func isValidDate(_ pattern: String) -> Bool {
    let regex = try! NSRegularExpression(pattern: "${regex}")
    return regex.firstMatch(in: date, range: NSRange(location: 0, length: date.utf16.count)) != nil
}`;

export const csharpSnippet = `using System;
using System.Text.RegularExpressions;

class Program {
    static bool IsValidDate(string date) {
        return Regex.IsMatch(date, @"${regex}");
    }
}`;

export const javaSnippet = `import java.util.regex.*;

public class DateValidator {
    public static boolean isValidDate(String date) {
        return Pattern.matches("${regex}", date);
    }
}`;

export const phpSnippet = `<?php
function isValidDate($date) {
    return preg_match("/${regex}/", $date);
}`;

export const testCases = [
  { pattern: "2024-01-15", isValid: true },
  { pattern: "2024/01/15", isValid: true },
  { pattern: "2024.01.15", isValid: true },
  { pattern: "2024-12-31", isValid: true },
  { pattern: "2000-02-29", isValid: true },
  { pattern: "2024-02-30", isValid: true },
  { pattern: "2024-13-01", isValid: true },
  { pattern: "9999-99-99", isValid: true },
  { pattern: "2024-1-15", isValid: false },
  { pattern: "24-01-15", isValid: false },
  { pattern: "2024-01-5", isValid: false },
  { pattern: "15-01-2024", isValid: false }, 
  { pattern: "", isValid: false },
  { pattern: "not-a-date", isValid: false },
];
