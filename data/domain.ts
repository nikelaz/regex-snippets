import type TestCase from "../types/test-case";

export const regex = `^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\\.)+[a-zA-Z]{2,}$`;

export const jsSnippet = `
const domainRegex = /${regex}/;
const isValidDomain = (domain) => domainRegex.test(domain);
`;

export const pySnippet = `
import re

def is_valid_domain(domain):
  domainRegex = r"${regex}"
  return re.match(domainRegex, domain) is not None
`;

export const rustSnippet = `
use regex::Regex;

fn is_valid_domain(domain: &str) -> bool {
  let domainRegex = Regex::new("${regex}")
    .expect("Could not parse domain validation regex");
  domainRegex.is_match(domain)
}
`;

export const goSnippet = `
package main

import (
  "regexp"
)

func isValidDomain(domain string) bool {
  domainRegex := "${regex}"
  re := regexp.MustCompile(domainRegex)
  return re.MatchString(domain)
}
`;

export const swiftSnippet = `
import Foundation

func isValidDomain(_ domain: String) -> Bool {
  let domainRegex = "${regex}"
  return NSPredicate(format: "SELF MATCHES %@", domainRegex).evaluate(with: domain)
}
`;

export const csharpSnippet = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidDomain(string domain) {
    string domainRegex = "${regex}";
    return Regex.IsMatch(domain, domainRegex);
  }
}
`;

export const javaSnippet = `
import java.util.regex.*;

public class Application {
  public static boolean isValidDomain(String domain) {
    String domainRegex = "${regex}";
    Pattern pattern = Pattern.compile(domainRegex);
    Matcher matcher = pattern.matcher(domain);
    return matcher.matches();
  }
}
`;

export const phpSnippet = `
<?php
function isValidDomain($domain) {
  $domainRegex = "${regex}";
  return preg_match("/" . $domainRegex . "/", $domain);
}
?>
`;

export const testCases: TestCase[] = [
  { pattern: "example.com", isValid: true },
  { pattern: "subdomain.example.com", isValid: true },
  { pattern: "sub.domain.example.com", isValid: true },
  { pattern: "example.co.uk", isValid: true },
  { pattern: "my-site.com", isValid: true },
  { pattern: "example123.org", isValid: true },
  { pattern: "test.example.museum", isValid: true },
  { pattern: "a.b.c.d.example.com", isValid: true },
  { pattern: "xn--80akhbyknj4f.com", isValid: true },
  { pattern: "example", isValid: false },
  { pattern: ".example.com", isValid: false },
  { pattern: "example.com.", isValid: false },
  { pattern: "-example.com", isValid: false },
  { pattern: "example-.com", isValid: false },
  { pattern: "example..com", isValid: false },
  { pattern: "example .com", isValid: false },
  { pattern: "example.c", isValid: false },
  { pattern: "", isValid: false },
  { pattern: "example.123", isValid: false },
  { pattern: "exam ple.com", isValid: false },
];
