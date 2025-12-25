import type TestCase from "../types/test-case";

export const regex = `^[a-zA-Z]:\\\\(?:[^\\\\/:*?"<>|\\r\\n]+\\\\)*[^\\\\/:*?"<>|\\r\\n]*$`;

export const jsSnippet = `
const windowsPathRegex = /${regex}/;
const isValidWindowsPath = (path) => windowsPathRegex.test(path);
`;

export const pySnippet = `
import re

def is_valid_windows_path(path):
  windowsPathRegex = r"${regex}"
  return re.match(windowsPathRegex, path) is not None
`;

export const rustSnippet = `
use regex::Regex;

fn is_valid_windows_path(path: &str) -> bool {
  let windowsPathRegex = Regex::new(r"${regex}")
    .expect("Could not parse Windows path validation regex");
  windowsPathRegex.is_match(path)
}
`;

export const goSnippet = `
package main

import (
  "regexp"
)

func isValidWindowsPath(path string) bool {
  windowsPathRegex := \`${regex}\`
  re := regexp.MustCompile(windowsPathRegex)
  return re.MatchString(path)
}
`;

export const swiftSnippet = `
import Foundation

func isValidWindowsPath(_ path: String) -> Bool {
  let windowsPathRegex = "${regex}"
  return NSPredicate(format: "SELF MATCHES %@", windowsPathRegex).evaluate(with: path)
}
`;

export const csharpSnippet = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidWindowsPath(string path) {
    string windowsPathRegex = @"${regex}";
    return Regex.IsMatch(path, windowsPathRegex);
  }
}
`;

export const javaSnippet = `
import java.util.regex.*;

public class Application {
  public static boolean isValidWindowsPath(String path) {
    String windowsPathRegex = "${regex}";
    Pattern pattern = Pattern.compile(windowsPathRegex);
    Matcher matcher = pattern.matcher(path);
    return matcher.matches();
  }
}
`;

export const phpSnippet = `
<?php
function isValidWindowsPath($path) {
  $windowsPathRegex = "${regex}";
  return preg_match("/" . str_replace("\\\\", "\\\\\\\\", $windowsPathRegex) . "/", $path);
}
?>
`;

export const testCases: TestCase[] = [
  { pattern: "C:\\\\", isValid: true },
  { pattern: "C:\\\\Windows\\\\System32", isValid: true },
  { pattern: "D:\\\\Users\\\\Documents\\\\file.txt", isValid: true },
  { pattern: "E:\\\\Program Files\\\\Application", isValid: true },
  { pattern: "F:\\\\folder\\\\subfolder\\\\", isValid: true },
  { pattern: "Z:\\\\data", isValid: true },
  { pattern: "C:\\\\path-with-dashes\\\\file_name.ext", isValid: true },
  { pattern: "C:\\\\Windows", isValid: true },
  { pattern: "C:\\\\Users\\\\admin\\\\Desktop\\\\file.docx", isValid: true },
  { pattern: "/unix/style/path", isValid: false },
  { pattern: "C:/forward/slash", isValid: false },
  { pattern: "C:\\\\invalid*name", isValid: false },
  { pattern: "C:\\\\invalid?name", isValid: false },
  { pattern: "C:\\\\invalid<>name", isValid: false },
  { pattern: "C:\\\\invalid|name", isValid: false },
  { pattern: "C:\\\\invalid:name", isValid: false },
  { pattern: "invalid\\\\path", isValid: false },
  { pattern: "", isValid: false },
  { pattern: "C:", isValid: false },
  { pattern: "1:\\\\path", isValid: false },
];
