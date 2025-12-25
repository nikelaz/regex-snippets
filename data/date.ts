import type TestCase from "../types/test-case";

// ISO 8601 Date format (YYYY-MM-DD)
export const regex = `^(?:19|20)\\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$`;

export const jsSnippet = `
const dateRegex = /${regex}/;
const isValidDate = (date) => {
  if (!dateRegex.test(date)) return false;
  
  // Additional validation for day-month combinations
  const [year, month, day] = date.split('-').map(Number);
  const dateObj = new Date(year, month - 1, day);
  
  return dateObj.getFullYear() === year &&
         dateObj.getMonth() === month - 1 &&
         dateObj.getDate() === day;
};
`;

export const pySnippet = `
import re
from datetime import datetime

def is_valid_date(date):
  dateRegex = r"${regex}"
  if not re.match(dateRegex, date):
    return False
  
  # Additional validation for day-month combinations
  try:
    datetime.strptime(date, '%Y-%m-%d')
    return True
  except ValueError:
    return False
`;

export const rustSnippet = `
use regex::Regex;
use chrono::NaiveDate;

fn is_valid_date(date: &str) -> bool {
  let dateRegex = Regex::new("${regex}")
    .expect("Could not parse date validation regex");
  
  if !dateRegex.is_match(date) {
    return false;
  }
  
  // Additional validation for day-month combinations
  NaiveDate::parse_from_str(date, "%Y-%m-%d").is_ok()
}
`;

export const goSnippet = `
package main

import (
  "regexp"
  "time"
)

func isValidDate(date string) bool {
  dateRegex := "${regex}"
  re := regexp.MustCompile(dateRegex)
  
  if !re.MatchString(date) {
    return false
  }
  
  // Additional validation for day-month combinations
  _, err := time.Parse("2006-01-02", date)
  return err == nil
}
`;

export const swiftSnippet = `
import Foundation

func isValidDate(_ date: String) -> Bool {
  let dateRegex = "${regex}"
  let predicate = NSPredicate(format: "SELF MATCHES %@", dateRegex)
  
  if !predicate.evaluate(with: date) {
    return false
  }
  
  // Additional validation for day-month combinations
  let formatter = DateFormatter()
  formatter.dateFormat = "yyyy-MM-dd"
  return formatter.date(from: date) != nil
}
`;

export const csharpSnippet = `
using System;
using System.Text.RegularExpressions;
using System.Globalization;

class Application {
  static bool IsValidDate(string date) {
    string dateRegex = "${regex}";
    if (!Regex.IsMatch(date, dateRegex)) {
      return false;
    }
    
    // Additional validation for day-month combinations
    return DateTime.TryParseExact(date, "yyyy-MM-dd", 
      CultureInfo.InvariantCulture, DateTimeStyles.None, out _);
  }
}
`;

export const javaSnippet = `
import java.util.regex.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;

public class Application {
  public static boolean isValidDate(String date) {
    String dateRegex = "${regex}";
    if (!Pattern.matches(dateRegex, date)) {
      return false;
    }
    
    // Additional validation for day-month combinations
    try {
      LocalDate.parse(date, DateTimeFormatter.ISO_LOCAL_DATE);
      return true;
    } catch (DateTimeParseException e) {
      return false;
    }
  }
}
`;

export const phpSnippet = `
<?php
function isValidDate($date) {
  $dateRegex = "${regex}";
  if (!preg_match("/" . $dateRegex . "/", $date)) {
    return false;
  }
  
  // Additional validation for day-month combinations
  $d = DateTime::createFromFormat('Y-m-d', $date);
  return $d && $d->format('Y-m-d') === $date;
}
?>
`;

export const testCases: TestCase[] = [
  { pattern: "2024-01-15", isValid: true },
  { pattern: "2024-12-31", isValid: true },
  { pattern: "2000-02-29", isValid: true }, // Leap year
  { pattern: "2024-02-29", isValid: true }, // Leap year
  { pattern: "1999-06-30", isValid: true },
  { pattern: "2023-07-04", isValid: true },
  { pattern: "2020-11-01", isValid: true },
  { pattern: "2024-02-30", isValid: false }, // Invalid day for February
  { pattern: "2023-02-29", isValid: false }, // Not a leap year
  { pattern: "2024-04-31", isValid: false }, // April has 30 days
  { pattern: "2024-06-31", isValid: false }, // June has 30 days
  { pattern: "2024-09-31", isValid: false }, // September has 30 days
  { pattern: "2024-11-31", isValid: false }, // November has 30 days
  { pattern: "2024-13-01", isValid: false }, // Invalid month
  { pattern: "2024-00-15", isValid: false }, // Invalid month
  { pattern: "2024-01-00", isValid: false }, // Invalid day
  { pattern: "2024-01-32", isValid: false }, // Invalid day
  { pattern: "1899-12-31", isValid: false }, // Year too old (pre-1900)
  { pattern: "2100-01-01", isValid: false }, // Year too far in future (post-2099)
  { pattern: "24-01-15", isValid: false }, // Year too short
  { pattern: "2024/01/15", isValid: false }, // Wrong separator
  { pattern: "15-01-2024", isValid: false }, // Wrong order
  { pattern: "", isValid: false },
];
