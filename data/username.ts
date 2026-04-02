import type TestCase from "../types/test-case";

export const regex = `^(?=.{3,30}$)[A-Za-z][A-Za-z0-9]*(?:[._-][A-Za-z0-9]+)*$`;

export const jsSnippet = `
const usernameRegex = /${regex}/;
const isValidUsername = (username) => usernameRegex.test(username);
`;

export const pySnippet = `
import re

def is_valid_username(username):
  username_regex = r"${regex}"
  return re.match(username_regex, username) is not None
`;

export const rustSnippet = `
use regex::Regex;

fn is_valid_username(username: &str) -> bool {
  let username_regex = Regex::new("${regex}")
    .expect("Could not parse username validation regex");
  username_regex.is_match(username)
}
`;

export const goSnippet = `
package main

import (
  "regexp"
)

func isValidUsername(username string) bool {
  usernameRegex := "${regex}"
  re := regexp.MustCompile(usernameRegex)
  return re.MatchString(username)
}
`;

export const swiftSnippet = `
import Foundation

func isValidUsername(_ username: String) -> Bool {
  let usernameRegex = "${regex}"
  return NSPredicate(format: "SELF MATCHES %@", usernameRegex).evaluate(with: username)
}
`;

export const csharpSnippet = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidUsername(string username) {
    string usernameRegex = "${regex}";
    return Regex.IsMatch(username, usernameRegex);
  }
}
`;

export const javaSnippet = `
import java.util.regex.*;

public class Application {
  public static boolean isValidUsername(String username) {
    String usernameRegex = "${regex}";
    Pattern pattern = Pattern.compile(usernameRegex);
    Matcher matcher = pattern.matcher(username);
    return matcher.matches();
  }
}
`;

export const phpSnippet = `
<?php
function isValidUsername($username) {
  $usernameRegex = "${regex}";
  return preg_match("/" . $usernameRegex . "/", $username);
}
?>
`;

export const testCases: TestCase[] = [
  { pattern: "alice", isValid: true },
  { pattern: "alice_123", isValid: true },
  { pattern: "Alice-01", isValid: true },
  { pattern: "john.doe", isValid: true },
  { pattern: "a1_b2-c3", isValid: true },
  { pattern: "ab", isValid: false },
  { pattern: "1alice", isValid: false },
  { pattern: "_alice", isValid: false },
  { pattern: "alice_", isValid: false },
  { pattern: "alice..doe", isValid: false },
  { pattern: "alice__doe", isValid: false },
  { pattern: "alice--doe", isValid: false },
  { pattern: "alice.-doe", isValid: false },
  { pattern: "alice doe", isValid: false },
  { pattern: "alice@doe", isValid: false },
  { pattern: "", isValid: false },
  { pattern: "abcdefghijklmnopqrstuvwxyzabcde", isValid: false },
  { pattern: "álvaro", isValid: false },
];
