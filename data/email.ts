import type TestCase from "../types/test-case";

export const regex = `^(?!.*\\.\\.)(?!.*\\.$)[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*\\.[a-zA-Z]{2,}$`;

export const jsSnippet = `
const emailRegex = /${regex}/;
const isValidEmail = (email) => emailRegex.test(email);
`;

export const pySnippet = `
import re

def is_valid_email(email):
  emailRegex = r"${regex}"
  return re.match(emailRegex, email) is not None
`;

export const rustSnippet = `
use regex::Regex;

fn is_valid_email(email: &str) -> bool {
  let emailRegex = Regex::new("${regex}")
    .expect("Could not parse email validation regex");
  emailRegex.is_match(email)
}
`;

export const goSnippet = `
package main

import (
  "fmt"
  "regexp"
)

func isValidEmail(email string) bool {
  emailRegex := "${regex}"
  re := regexp.MustCompile(emailRegex)
  return re.MatchString(email)
}
`;

export const swiftSnippet = `
import Foundation

func isValidEmail(_ email: String) -> Bool {
  let emailRegex = "${regex}"
  return NSPredicate(format: "SELF MATCHES %@", emailRegex).evaluate(with: email)
}
`;

export const csharpSnippet = `
using System;
using System.Text.RegularExpressions;

class Application {
  static bool IsValidEmail(string email) {
    string emailRegex = "${regex}";
    return Regex.IsMatch(email, emailRegex);
  }
}
`;

export const javaSnippet = `
import java.util.regex.*;

public class Application {
  public static boolean isValidEmail(String email) {
    String emailRegex = "${regex}";
    Pattern pattern = Pattern.compile(emailRegex);
    Matcher matcher = pattern.matcher(email);
    return matcher.matches();
  }
}
`;

export const phpSnippet = `
<?php
function isValidEmail($email) {
  $emailRegex = "${regex}";
  return preg_match("/" . $emailRegex . "/", $email);
}
?>
`;

export const testCases: TestCase[] = [
  { pattern: "test@example.com", isValid: true },
  { pattern: "user.name+tag+sorting@example.com", isValid: true },
  { pattern: "x@example.com", isValid: true },
  { pattern: "example-indeed@strange-example.com", isValid: true },
  { pattern: "example@s.example", isValid: true },
  { pattern: "" , isValid: false },
  { pattern: "admin@mailserver1", isValid: false },
  { pattern: "abc..def@example.com", isValid: false },
  { pattern: ".abc@example.com", isValid: false },
  { pattern: "abc.@example.com", isValid: false },
  { pattern: "abc.def@example..com", isValid: false },
  { pattern: "plainaddress", isValid: false },
  { pattern: "@missingusername.com", isValid: false },
  { pattern: "missingatsign.com", isValid: false },
  { pattern: "username@.com", isValid: false },
  { pattern: "username@sub..com", isValid: false },
  { pattern: "username@-example.com", isValid: false },
  { pattern: "username@example-.com", isValid: false },
];

// Basic email validation
export const regexBasic = `^\\S+@\\S+\\.\\S+$`;

export const jsSnippetBasic = `const basicEmailRegex = /${regexBasic}/;
const isValidEmail = (email) => basicEmailRegex.test(email);`;

export const pythonSnippetBasic = `import re

basic_email_regex = r'${regexBasic}'

def is_valid_email(email):
    return bool(re.match(basic_email_regex, email))`;

export const rustSnippetBasic = `use regex::Regex;

fn is_valid_email(email: &str) -> bool {
    let re = Regex::new(r"${regexBasic}").unwrap();
    re.is_match(email)
}`;

export const goSnippetBasic = `package main

import (
    "fmt"
    "regexp"
)

func isValidEmail(email string) bool {
    re := regexp.MustCompile(\`${regexBasic}\`)
    return re.MatchString(email)
}`;

export const swiftSnippetBasic = `import Foundation

func isValidEmail(_ email: String) -> Bool {
    let regex = try! NSRegularExpression(pattern: "${regexBasic}")
    return regex.firstMatch(in: email, range: NSRange(location: 0, length: email.utf16.count)) != nil
}`;

export const csharpSnippetBasic = `using System;
using System.Text.RegularExpressions;

class Program {
    static bool IsValidEmail(string email) {
        return Regex.IsMatch(email, @"${regexBasic}");
    }
}`;

export const javaSnippetBasic = `import java.util.regex.*;

public class EmailValidator {
    public static boolean isValidEmail(String email) {
        return Pattern.matches("${regexBasic}", email);
    }
}`;

export const phpSnippetBasic = `<?php
function isValidEmail($email) {
    return preg_match("/${regexBasic}/", $email);
}`;

export const testCasesBasic: TestCase[] = [
  { pattern: "test@example.com", isValid: true },
  { pattern: "user.name+tag+sorting@example.com", isValid: true },
  { pattern: "x@example.com", isValid: true },
  { pattern: "example-indeed@strange-example.com", isValid: true },
  { pattern: "example@s.example", isValid: true },
  { pattern: "" , isValid: false },
  { pattern: "admin@mailserver1", isValid: true },
  { pattern: "abc..def@example.com", isValid: true },
  { pattern: ".abc@example.com", isValid: true },
  { pattern: "abc.@example.com", isValid: true },
  { pattern: "abc.def@example..com", isValid: true },
  { pattern: "plainaddress", isValid: false },
  { pattern: "@missingusername.com", isValid: false },
  { pattern: "missingatsign.com", isValid: false },
  { pattern: "username@.com", isValid: true },
  { pattern: "username@sub..com", isValid: true },
  { pattern: "username@-example.com", isValid: true },
  { pattern: "username@example-.com", isValid: true },
];
