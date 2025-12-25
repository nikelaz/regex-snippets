import type TestCase from "../types/test-case";

export const regex = `^\\+?[1-9]\\d{1,14}$`;

export const jsSnippet = `
const phoneRegex = /${regex}/;
const isValidPhone = (phone) => phoneRegex.test(phone);
`;

export const pySnippet = `
import re

def is_valid_phone(phone):
  phoneRegex = r"${regex}"
  return re.match(phoneRegex, phone) is not None
`;

export const rustSnippet = `
use regex::Regex;

fn is_valid_phone(phone: &str) -> bool {
  let phoneRegex = Regex::new("${regex}")
    .expect("Could not parse phone validation regex");
  phoneRegex.is_match(phone)
}
`;

export const goSnippet = `
package main

import (
  "fmt"
  "regexp"
)

func isValidPhone(phone string) bool {
  phoneRegex := "${regex}"
  re := regexp.MustCompile(phoneRegex)
  return re.MatchString(phone)
}
`;

export const swiftSnippet = `
import Foundation

func isValidPhone(_ phone: String) -> Bool {
  let phoneRegex = "${regex}"
  return NSPredicate(format: "SELF MATCHES %@", phoneRegex).evaluate(with: phone)
}
`;

export const csharpSnippet = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidPhone(string phone) {
    string phoneRegex = "${regex}";
    return Regex.IsMatch(phone, phoneRegex);
  }
}
`;

export const javaSnippet = `
import java.util.regex.*;

public class Application {
  public static boolean isValidPhone(String phone) {
    String phoneRegex = "${regex}";
    Pattern pattern = Pattern.compile(phoneRegex);
    Matcher matcher = pattern.matcher(phone);
    return matcher.matches();
  }
}
`;

export const phpSnippet = `
<?php
function isValidPhone($phone) {
  $phoneRegex = "${regex}";
  return (bool) preg_match("/" . $phoneRegex . "/", $phone);
}
?>
`;

export const testCases: TestCase[] = [
  { pattern: "+12025550123", isValid: true },
  { pattern: "+441234567890", isValid: true },
  { pattern: "+33123456789", isValid: true },
  { pattern: "+861234567890", isValid: true },
  { pattern: "+61212345678", isValid: true },
  { pattern: "+81312345678", isValid: true },
  { pattern: "15551234567", isValid: true },
  { pattern: "+1", isValid: false },
  { pattern: "+", isValid: false },
  { pattern: "", isValid: false },
  { pattern: "123", isValid: false },
  { pattern: "+01234567890", isValid: false },
  { pattern: "+123456789012345678", isValid: false },
  { pattern: "abc123456789", isValid: false },
  { pattern: "+1-202-555-0123", isValid: false },
  { pattern: "(202) 555-0123", isValid: false },
  { pattern: "202.555.0123", isValid: false },
];

// National format
export const regexNational = `^\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}$`;

export const jsSnippetNational = `const nationalPhoneRegex = /${regexNational}/;
const isValidPhone = (phone) => nationalPhoneRegex.test(phone);`;

export const pythonSnippetNational = `import re

national_phone_regex = r'${regexNational}'

def is_valid_phone(phone):
    return bool(re.match(national_phone_regex, phone))`;

export const rustSnippetNational = `use regex::Regex;

fn is_valid_phone(phone: &str) -> bool {
    let re = Regex::new(r"${regexNational}").unwrap();
    re.is_match(phone)
}`;

export const goSnippetNational = `package main

import (
    "fmt"
    "regexp"
)

func isValidPhone(phone string) bool {
    phoneRegex := "${regexNational}"
    re := regexp.MustCompile(phoneRegex)
    return re.MatchString(phone)
}`;

export const swiftSnippetNational = `import Foundation

func isValidPhone(_ phone: String) -> Bool {
    let phoneRegex = "${regexNational}"
    return NSPredicate(format: "SELF MATCHES %@", phoneRegex).evaluate(with: phone)
}`;

export const csharpSnippetNational = `using System;
using System.Text.RegularExpressions;

class Program {
    static bool IsValidPhone(string phone) {
        return Regex.IsMatch(phone, @"${regexNational}");
    }
}`;

export const javaSnippetNational = `import java.util.regex.*;

public class Application {
    public static boolean isValidPhone(String phone) {
        return Pattern.matches("${regexNational}", phone);
    }
}`;

export const phpSnippetNational = `<?php
function isValidPhone($phone) {
    return (bool) preg_match("/${regexNational}/", $phone);
}`;

export const testCasesNational: TestCase[] = [
  { pattern: "2025550123", isValid: true },
  { pattern: "(202)5550123", isValid: true },
  { pattern: "(202) 555-0123", isValid: true },
  { pattern: "202-555-0123", isValid: true },
  { pattern: "202.555.0123", isValid: true },
  { pattern: "202 555 0123", isValid: true },
  { pattern: "(202)555-0123", isValid: true },
  { pattern: "+12025550123", isValid: false },
  { pattern: "123", isValid: false },
  { pattern: "", isValid: false },
  { pattern: "12345", isValid: false },
  { pattern: "(202) 555-012", isValid: false },
  { pattern: "202-555-012", isValid: false },
  { pattern: "abc-def-ghij", isValid: false },
  { pattern: "202-555-01234", isValid: false },
];
