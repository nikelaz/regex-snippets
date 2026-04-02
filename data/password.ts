import type TestCase from "../types/test-case";

export const strictRegex = `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*(),.?":{}|<>_\\-\\[\\]\\\\\\/+=~';])[A-Za-z\\d!@#$%^&*(),.?":{}|<>_\\-\\[\\]\\\\\\/+=~';]{8,64}$`;
export const balancedRegex = `^(?=.*[A-Za-z])(?=.*\\d)\\S{8,64}$`;
export const minimalRegex = `^\\S{8,64}$`;

export const jsSnippet = `
const passwordRegex = /${strictRegex}/;

const isValidPassword = (password) => passwordRegex.test(password);
`;

export const pySnippet = `
import re

def is_valid_password(password):
  password_regex = r"${strictRegex}"
  return re.match(password_regex, password) is not None
`;

export const rustSnippet = `
use regex::Regex;

fn is_valid_password(password: &str) -> bool {
  let password_regex = Regex::new("${strictRegex}")
    .expect("Could not parse password validation regex");
  password_regex.is_match(password)
}
`;

export const goSnippet = `
package main

import (
  "regexp"
)

func isValidPassword(password string) bool {
  passwordRegex := "${strictRegex}"
  re := regexp.MustCompile(passwordRegex)
  return re.MatchString(password)
}
`;

export const swiftSnippet = `
import Foundation

func isValidPassword(_ password: String) -> Bool {
  let passwordRegex = "${strictRegex}"
  return NSPredicate(format: "SELF MATCHES %@", passwordRegex).evaluate(with: password)
}
`;

export const csharpSnippet = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidPassword(string password) {
    string passwordRegex = "${strictRegex}";
    return Regex.IsMatch(password, passwordRegex);
  }
}
`;

export const javaSnippet = `
import java.util.regex.*;

public class Application {
  public static boolean isValidPassword(String password) {
    String passwordRegex = "${strictRegex}";
    Pattern pattern = Pattern.compile(passwordRegex);
    Matcher matcher = pattern.matcher(password);
    return matcher.matches();
  }
}
`;

export const phpSnippet = `
<?php
function isValidPassword($password) {
  $passwordRegex = "${strictRegex}";
  return preg_match("/" . $passwordRegex . "/", $password);
}
?>
`;

export const jsSnippetBalanced = `
const passwordRegex = /${balancedRegex}/;

const isValidPassword = (password) => passwordRegex.test(password);
`;

export const pySnippetBalanced = `
import re

def is_valid_password(password):
  password_regex = r"${balancedRegex}"
  return re.match(password_regex, password) is not None
`;

export const rustSnippetBalanced = `
use regex::Regex;

fn is_valid_password(password: &str) -> bool {
  let password_regex = Regex::new("${balancedRegex}")
    .expect("Could not parse password validation regex");
  password_regex.is_match(password)
}
`;

export const goSnippetBalanced = `
package main

import (
  "regexp"
)

func isValidPassword(password string) bool {
  passwordRegex := "${balancedRegex}"
  re := regexp.MustCompile(passwordRegex)
  return re.MatchString(password)
}
`;

export const swiftSnippetBalanced = `
import Foundation

func isValidPassword(_ password: String) -> Bool {
  let passwordRegex = "${balancedRegex}"
  return NSPredicate(format: "SELF MATCHES %@", passwordRegex).evaluate(with: password)
}
`;

export const csharpSnippetBalanced = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidPassword(string password) {
    string passwordRegex = "${balancedRegex}";
    return Regex.IsMatch(password, passwordRegex);
  }
}
`;

export const javaSnippetBalanced = `
import java.util.regex.*;

public class Application {
  public static boolean isValidPassword(String password) {
    String passwordRegex = "${balancedRegex}";
    Pattern pattern = Pattern.compile(passwordRegex);
    Matcher matcher = pattern.matcher(password);
    return matcher.matches();
  }
}
`;

export const phpSnippetBalanced = `
<?php
function isValidPassword($password) {
  $passwordRegex = "${balancedRegex}";
  return preg_match("/" . $passwordRegex . "/", $password);
}
?>
`;

export const jsSnippetMinimal = `
const passwordRegex = /${minimalRegex}/;

const isValidPassword = (password) => passwordRegex.test(password);
`;

export const pySnippetMinimal = `
import re

def is_valid_password(password):
  password_regex = r"${minimalRegex}"
  return re.match(password_regex, password) is not None
`;

export const rustSnippetMinimal = `
use regex::Regex;

fn is_valid_password(password: &str) -> bool {
  let password_regex = Regex::new("${minimalRegex}")
    .expect("Could not parse password validation regex");
  password_regex.is_match(password)
}
`;

export const goSnippetMinimal = `
package main

import (
  "regexp"
)

func isValidPassword(password string) bool {
  passwordRegex := "${minimalRegex}"
  re := regexp.MustCompile(passwordRegex)
  return re.MatchString(password)
}
`;

export const swiftSnippetMinimal = `
import Foundation

func isValidPassword(_ password: String) -> Bool {
  let passwordRegex = "${minimalRegex}"
  return NSPredicate(format: "SELF MATCHES %@", passwordRegex).evaluate(with: password)
}
`;

export const csharpSnippetMinimal = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidPassword(string password) {
    string passwordRegex = "${minimalRegex}";
    return Regex.IsMatch(password, passwordRegex);
  }
}
`;

export const javaSnippetMinimal = `
import java.util.regex.*;

public class Application {
  public static boolean isValidPassword(String password) {
    String passwordRegex = "${minimalRegex}";
    Pattern pattern = Pattern.compile(passwordRegex);
    Matcher matcher = pattern.matcher(password);
    return matcher.matches();
  }
}
`;

export const phpSnippetMinimal = `
<?php
function isValidPassword($password) {
  $passwordRegex = "${minimalRegex}";
  return preg_match("/" . $passwordRegex . "/", $password);
}
?>
`;

export const strictTestCases: TestCase[] = [
  { pattern: "Str0ng!Pass", isValid: true },
  { pattern: "A1!bcdef", isValid: true },
  { pattern: "P@ssw0rd2026", isValid: true },
  { pattern: "Valid_123!", isValid: true },
  { pattern: "N0Spaces#", isValid: true },
  { pattern: "lowercase1!", isValid: false },
  { pattern: "UPPERCASE1!", isValid: false },
  { pattern: "NoNumber!", isValid: false },
  { pattern: "NoSpecial1", isValid: false },
  { pattern: "Sh0rt!", isValid: false },
  { pattern: "Has Space1!", isValid: false },
  { pattern: "Tabs\tPass1!", isValid: false },
  { pattern: "Äbcd123!", isValid: false },
  { pattern: "Password123", isValid: false },
  { pattern: "", isValid: false },
  { pattern: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaA1!", isValid: false },
];

export const balancedTestCases: TestCase[] = [
  { pattern: "password1", isValid: true },
  { pattern: "Passw0rd", isValid: true },
  { pattern: "abc12345", isValid: true },
  { pattern: "1234test!", isValid: true },
  { pattern: "LOGIN2026", isValid: true },
  { pattern: "NoDigitsHere", isValid: false },
  { pattern: "12345678", isValid: false },
  { pattern: "short1a", isValid: false },
  { pattern: "has space1", isValid: false },
  { pattern: "tabs\t123a", isValid: false },
  { pattern: "", isValid: false },
  { pattern: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1", isValid: false },
];

export const minimalTestCases: TestCase[] = [
  { pattern: "password", isValid: true },
  { pattern: "12345678", isValid: true },
  { pattern: "long-enough", isValid: true },
  { pattern: "UPPERCASE", isValid: true },
  { pattern: "Abc123!@", isValid: true },
  { pattern: "short", isValid: false },
  { pattern: "has space", isValid: false },
  { pattern: "tabs\tpass", isValid: false },
  { pattern: "", isValid: false },
  { pattern: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", isValid: false },
];

export const regex = strictRegex;
export const testCases = strictTestCases;
