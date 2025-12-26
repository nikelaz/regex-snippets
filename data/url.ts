import type TestCase from "../types/test-case";

export const regex = `^https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/=]*)$`;

export const jsSnippet = `
const urlRegex = /${regex}/;
const isValidURL = (url) => urlRegex.test(url);
`;

export const pySnippet = `
import re

def is_valid_url(url):
  urlRegex = r"${regex}"
  return re.match(urlRegex, url) is not None
`;

export const rustSnippet = `
use regex::Regex;

fn is_valid_url(url: &str) -> bool {
  let urlRegex = Regex::new("${regex}")
    .expect("Could not parse URL validation regex");
  urlRegex.is_match(url)
}
`;

export const goSnippet = `
package main

import (
  "fmt"
  "regexp"
)

func isValidURL(url string) bool {
  urlRegex := "${regex}"
  re := regexp.MustCompile(urlRegex)
  return re.MatchString(url)
}
`;

export const swiftSnippet = `
import Foundation

func isValidURL(_ url: String) -> Bool {
  let urlRegex = "${regex}"
  return NSPredicate(format: "SELF MATCHES %@", urlRegex).evaluate(with: url)
}
`;

export const csharpSnippet = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidURL(string url) {
    string urlRegex = "${regex}";
    return Regex.IsMatch(url, urlRegex);
  }
}
`;

export const javaSnippet = `
import java.util.regex.*;

public class Application {
  public static boolean isValidURL(String url) {
    String urlRegex = "${regex}";
    Pattern pattern = Pattern.compile(urlRegex);
    Matcher matcher = pattern.matcher(url);
    return matcher.matches();
  }
}
`;

export const phpSnippet = `
<?php
function isValidURL($url) {
  $urlRegex = "${regex}";
  return (bool) preg_match("/" . $urlRegex . "/", $url);
}
?>
`;

export const testCases: TestCase[] = [
  { pattern: "https://www.example.com", isValid: true },
  { pattern: "http://example.com", isValid: true },
  { pattern: "https://example.com/path/to/resource", isValid: true },
  { pattern: "https://example.com/path?query=value", isValid: true },
  { pattern: "https://example.com:8080/path", isValid: true },
  { pattern: "https://subdomain.example.com", isValid: true },
  { pattern: "http://example.com/path#fragment", isValid: true },
  { pattern: "https://example.com/path?key1=value1&key2=value2", isValid: true },
  { pattern: "https://example.co.uk", isValid: true },
  // Note: This regex validates domain-based URLs, not IP-based URLs
  { pattern: "ftp://example.com", isValid: false },
  { pattern: "https://", isValid: false },
  { pattern: "example.com", isValid: false },
  { pattern: "www.example.com", isValid: false },
  { pattern: "https://example", isValid: false },
  { pattern: "https://example.", isValid: false },
  { pattern: "https://ex ample.com", isValid: false },
  { pattern: "", isValid: false },
  { pattern: "http:/example.com", isValid: false },
  { pattern: "https//example.com", isValid: false },
];
