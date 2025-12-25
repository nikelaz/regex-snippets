import type TestCase from "../types/test-case";

export const regex = `^(\\/[^\\/ ]*)+\\/?$|^\\.(\\/[^\\/ ]*)+\\/?$|^\\.\\.\\/([^\\/ ]*\\/)*[^\\/ ]*$`;

export const jsSnippet = `
const unixPathRegex = /${regex}/;
const isValidUnixPath = (path) => unixPathRegex.test(path);
`;

export const pySnippet = `
import re

def is_valid_unix_path(path):
  unixPathRegex = r"${regex}"
  return re.match(unixPathRegex, path) is not None
`;

export const rustSnippet = `
use regex::Regex;

fn is_valid_unix_path(path: &str) -> bool {
  let unixPathRegex = Regex::new("${regex}")
    .expect("Could not parse Unix path validation regex");
  unixPathRegex.is_match(path)
}
`;

export const goSnippet = `
package main

import (
  "regexp"
)

func isValidUnixPath(path string) bool {
  unixPathRegex := \`${regex}\`
  re := regexp.MustCompile(unixPathRegex)
  return re.MatchString(path)
}
`;

export const swiftSnippet = `
import Foundation

func isValidUnixPath(_ path: String) -> Bool {
  let unixPathRegex = "${regex}"
  return NSPredicate(format: "SELF MATCHES %@", unixPathRegex).evaluate(with: path)
}
`;

export const csharpSnippet = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidUnixPath(string path) {
    string unixPathRegex = @"${regex}";
    return Regex.IsMatch(path, unixPathRegex);
  }
}
`;

export const javaSnippet = `
import java.util.regex.*;

public class Application {
  public static boolean isValidUnixPath(String path) {
    String unixPathRegex = "${regex}";
    Pattern pattern = Pattern.compile(unixPathRegex);
    Matcher matcher = pattern.matcher(path);
    return matcher.matches();
  }
}
`;

export const phpSnippet = `
<?php
function isValidUnixPath($path) {
  $unixPathRegex = "${regex}";
  return preg_match("/" . str_replace("/", "\\/", $unixPathRegex) . "/", $path);
}
?>
`;

export const testCases: TestCase[] = [
  { pattern: "/", isValid: true },
  { pattern: "/home/user", isValid: true },
  { pattern: "/usr/local/bin", isValid: true },
  { pattern: "/var/log/system.log", isValid: true },
  { pattern: "./relative/path", isValid: true },
  { pattern: "./file.txt", isValid: true },
  { pattern: "../parent/directory", isValid: true },
  { pattern: "/path/to/directory/", isValid: true },
  { pattern: "/path-with-dashes/file_name.ext", isValid: true },
  { pattern: "/path/with.dots/file.tar.gz", isValid: true },
  { pattern: "relative/path", isValid: false },
  { pattern: "C:/Windows/System32", isValid: false },
  { pattern: "/path with spaces/file", isValid: false },
  { pattern: "", isValid: false },
  { pattern: "//double/slash", isValid: false },
  { pattern: "/path//file", isValid: false },
];
