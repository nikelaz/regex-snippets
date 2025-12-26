import type TestCase from "../types/test-case";

export const regexISBN10 = `^(?:\\d{9}X|\\d{10})$`;

export const regexISBN13 = `^97[89]\\d{10}$`;

export const jsSnippetISBN10 = `
const isbn10Regex = /${regexISBN10}/;
const isValidISBN10 = (isbn) => isbn10Regex.test(isbn);
`;

export const pySnippetISBN10 = `
import re

def is_valid_isbn10(isbn):
  isbn10Regex = r"${regexISBN10}"
  return re.match(isbn10Regex, isbn) is not None
`;

export const rustSnippetISBN10 = `
use regex::Regex;

fn is_valid_isbn10(isbn: &str) -> bool {
  let isbn10Regex = Regex::new("${regexISBN10}")
    .expect("Could not parse ISBN-10 validation regex");
  isbn10Regex.is_match(isbn)
}
`;

export const goSnippetISBN10 = `
package main

import (
  "regexp"
)

func isValidISBN10(isbn string) bool {
  isbn10Regex := "${regexISBN10}"
  re := regexp.MustCompile(isbn10Regex)
  return re.MatchString(isbn)
}
`;

export const swiftSnippetISBN10 = `
import Foundation

func isValidISBN10(_ isbn: String) -> Bool {
  let isbn10Regex = "${regexISBN10}"
  return NSPredicate(format: "SELF MATCHES %@", isbn10Regex).evaluate(with: isbn)
}
`;

export const csharpSnippetISBN10 = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidISBN10(string isbn) {
    string isbn10Regex = "${regexISBN10}";
    return Regex.IsMatch(isbn, isbn10Regex);
  }
}
`;

export const javaSnippetISBN10 = `
import java.util.regex.*;

public class Application {
  public static boolean isValidISBN10(String isbn) {
    String isbn10Regex = "${regexISBN10}";
    Pattern pattern = Pattern.compile(isbn10Regex);
    Matcher matcher = pattern.matcher(isbn);
    return matcher.matches();
  }
}
`;

export const phpSnippetISBN10 = `
<?php
function isValidISBN10($isbn) {
  $isbn10Regex = "${regexISBN10}";
  return preg_match("/" . $isbn10Regex . "/", $isbn);
}
?>
`;

export const testCasesISBN10: TestCase[] = [
  { pattern: "0306406152", isValid: true },
  { pattern: "0345391802", isValid: true },
  { pattern: "043942089X", isValid: true },
  { pattern: "156619909X", isValid: true },
  { pattern: "0471958697", isValid: true },
  { pattern: "12345", isValid: false },
  { pattern: "123456789", isValid: false },
  { pattern: "12345678901", isValid: false },
  { pattern: "123456789A", isValid: false },
  { pattern: "X123456789", isValid: false },
  { pattern: "12345X6789", isValid: false },
  { pattern: "", isValid: false },
  { pattern: "abcdefghij", isValid: false },
];

export const jsSnippetISBN13 = `
const isbn13Regex = /${regexISBN13}/;
const isValidISBN13 = (isbn) => isbn13Regex.test(isbn);
`;

export const pySnippetISBN13 = `
import re

def is_valid_isbn13(isbn):
  isbn13Regex = r"${regexISBN13}"
  return re.match(isbn13Regex, isbn) is not None
`;

export const rustSnippetISBN13 = `
use regex::Regex;

fn is_valid_isbn13(isbn: &str) -> bool {
  let isbn13Regex = Regex::new("${regexISBN13}")
    .expect("Could not parse ISBN-13 validation regex");
  isbn13Regex.is_match(isbn)
}
`;

export const goSnippetISBN13 = `
package main

import (
  "regexp"
)

func isValidISBN13(isbn string) bool {
  isbn13Regex := "${regexISBN13}"
  re := regexp.MustCompile(isbn13Regex)
  return re.MatchString(isbn)
}
`;

export const swiftSnippetISBN13 = `
import Foundation

func isValidISBN13(_ isbn: String) -> Bool {
  let isbn13Regex = "${regexISBN13}"
  return NSPredicate(format: "SELF MATCHES %@", isbn13Regex).evaluate(with: isbn)
}
`;

export const csharpSnippetISBN13 = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidISBN13(string isbn) {
    string isbn13Regex = "${regexISBN13}";
    return Regex.IsMatch(isbn, isbn13Regex);
  }
}
`;

export const javaSnippetISBN13 = `
import java.util.regex.*;

public class Application {
  public static boolean isValidISBN13(String isbn) {
    String isbn13Regex = "${regexISBN13}";
    Pattern pattern = Pattern.compile(isbn13Regex);
    Matcher matcher = pattern.matcher(isbn);
    return matcher.matches();
  }
}
`;

export const phpSnippetISBN13 = `
<?php
function isValidISBN13($isbn) {
  $isbn13Regex = "${regexISBN13}";
  return preg_match("/" . $isbn13Regex . "/", $isbn);
}
?>
`;

export const testCasesISBN13: TestCase[] = [
  { pattern: "9780306406157", isValid: true },
  { pattern: "9780345391803", isValid: true },
  { pattern: "9780439420891", isValid: true },
  { pattern: "9781566199094", isValid: true },
  { pattern: "9780471958697", isValid: true },
  { pattern: "978030640615", isValid: false },
  { pattern: "97803064061578", isValid: false },
  { pattern: "9770306406157", isValid: false },
  { pattern: "9880306406157", isValid: false },
  { pattern: "123456789012", isValid: false },
  { pattern: "978-0-306-40615-7", isValid: false },
  { pattern: "", isValid: false },
  { pattern: "abcdefghijklm", isValid: false },
];
